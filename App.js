import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './screens/RootStack';
import { LogContextProvider } from './contexts/LogContext';
import { ChallengeContextProvider } from './contexts/ChallengeContext';

function App() {
  return (
    <NavigationContainer>
      <ChallengeContextProvider>
        <LogContextProvider>
          <RootStack /> 
        </LogContextProvider>
      </ChallengeContextProvider>
    </NavigationContainer>
  );
}

export default App;