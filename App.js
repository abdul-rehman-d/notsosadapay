import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import { SignInContextProvider } from './src/context/SignInContext'
import PinScreen from './src/screens/PinScreen';
import HomeTabs from './src/screens/HomeTabs';
import TransactionDetails from './src/screens/TransactionDetails';
import LoadMoney from './src/screens/LoadMoney';
import MyCards from './src/screens/MyCards';
import SendMoney from './src/screens/SendMoney';

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <SignInContextProvider>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name='Pin'
            component={PinScreen}
            options={{headerShown: false, presentation: 'fullScreenModal'}}
          />
          <Stack.Screen
            name='HomeTabs'
            component={HomeTabs}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='TransactionDetails'
            component={TransactionDetails}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='MyCards'
            component={MyCards}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='LoadMoney'
            component={LoadMoney}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name='SendMoney'
            component={SendMoney}
            options={{headerShown: false}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SignInContextProvider>
  );
}

export default App