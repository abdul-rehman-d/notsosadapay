import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SignInContextProvider } from './src/context/SignInContext'
import MainStack from './src/stacks/MainStack';

const App = () => {
  return (
    <SignInContextProvider>
      <NavigationContainer>
        <MainStack />
      </NavigationContainer>
    </SignInContextProvider>
  );
}

export default App