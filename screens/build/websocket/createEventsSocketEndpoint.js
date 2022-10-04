"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createEventsSocketEndpoint;

function _ws() {
  const data = require("ws");

  _ws = function () {
    return data;
  };

  return data;
}

function _cliTools() {
  const data = require("@react-native-community/cli-tools");

  _cliTools = function () {
    return data;
  };

  return data;
}

function _prettyFormat() {
  const data = _interopRequireDefault(require("pretty-format"));

  _prettyFormat = function () {
    return data;
  };

  return data;
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This number is used to version the communication protocol between
 * Dev tooling like Flipper and Metro, so that in the future we can recognize
 * messages coming from old clients, so that it will be simpler to implement
 * backward compatibility.
 *
 * We start at 2 as the protocol is currently the same as used internally at FB,
 * which happens to be at version 2 as well.
 */
const PROTOCOL_VERSION = 2;

function parseMessage(data) {
  try {
    const message = JSON.parse(data);

    if (message.version === PROTOCOL_VERSION) {
      return message;
    }

    _cliTools().logger.error('Received message had wrong protocol version: ' + message.version);
  } catch {
    _cliTools().logger.error('Failed to parse the message as JSON:\n' + data);
  }

  return undefined;
}
/**
 * Two types of messages will arrive in this function,
 * 1) messages generated by Metro itself (through the reporter abstraction)
 *    those are yet to be serialized, and can contain any kind of data structure
 * 2) a specific event generated by Metro is `client_log`, which describes
 *    console.* calls in the app.
 *    The arguments send to the console are pretty printed so that they can be
 *    displayed in a nicer way in dev tools
 *
 * @param message
 */


function serializeMessage(message) {
  // We do want to send Metro report messages, but their contents is not guaranteed to be serializable.
  // For some known types we will pretty print otherwise not serializable parts first:
  let toSerialize = message;

  if (message && message.error && message.error instanceof Error) {
    toSerialize = { ...message,
      error: (0, _prettyFormat().default)(message.error, {
        escapeString: true,
        highlight: true,
        maxDepth: 3,
        min: true
      })
    };
  } else if (message && message.type === 'client_log') {
    toSerialize = { ...message,
      data: message.data.map(item => typeof item === 'string' ? item : (0, _prettyFormat().default)(item, {
        escapeString: true,
        highlight: true,
        maxDepth: 3,
        min: true,
        plugins: [_prettyFormat().default.plugins.ReactElement]
      }))
    };
  }

  try {
    return JSON.stringify(toSerialize);
  } catch (e) {
    _cliTools().logger.error('Failed to serialize: ' + e);

    return null;
  }
}
/**
 * Starts the eventsSocket at the given path
 *
 */


function createEventsSocketEndpoint(broadcast) {
  const wss = new (_ws().Server)({
    noServer: true,

    verifyClient({
      origin
    }) {
      // This exposes the full JS logs and enables issuing commands like reload
      // so let's make sure only locally running stuff can connect to it
      // origin is only checked if it is set, e.g. when the request is made from a (CORS) browser
      // any 'back-end' connection isn't CORS at all, and has full control over the origin header,
      // so there is no point in checking it security wise
      return !origin || origin.startsWith('http://localhost:') || origin.startsWith('file:');
    }

  });
  const clients = new Map();
  let nextClientId = 0;
  /**
   * broadCastEvent is called by reportEvent (below), which is called by the
   * default reporter of this server, to make sure that all Metro events are
   * broadcasted to all connected clients
   * (that is, all devtools such as Flipper, _not_: connected apps)
   *
   * @param message
   */

  function broadCastEvent(message) {
    if (!clients.size) {
      return;
    }

    const serialized = serializeMessage(message);

    if (!serialized) {
      return;
    }

    for (const ws of clients.values()) {
      try {
        ws.send(serialized);
      } catch (e) {
        _cliTools().logger.error(`Failed to send broadcast to client due to:\n ${e.toString()}`);
      }
    }
  }

  wss.on('connection', function (clientWs) {
    const clientId = `client#${nextClientId++}`;
    clients.set(clientId, clientWs);

    clientWs.onclose = clientWs.onerror = () => {
      clients.delete(clientId);
    };

    clientWs.onmessage = event => {
      const message = parseMessage(event.data.toString());

      if (message == null) {
        return;
      }

      if (message.type === 'command') {
        try {
          /**
           * messageSocket.broadcast (not to be confused with our own broadcast above)
           * forwards a command to all connected React Native applications.
           */
          broadcast(message.command, message.params);
        } catch (e) {
          _cliTools().logger.error('Failed to forward message to clients: ', e);
        }
      } else {
        _cliTools().logger.error('Unknown message type: ', message.type);
      }
    };
  });
  return {
    server: wss,
    reportEvent: event => {
      broadCastEvent(event);
    }
  };
}

//# sourceMappingURL=createEventsSocketEndpoint.js.map