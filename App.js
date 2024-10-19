import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/Navigation/Routes';
import App from './src/Navigation/screens/BottomTab';
function Apps() {

  return (
    <NavigationContainer>
      <Routes />
      {/* <App /> */}
    </NavigationContainer>
  )
}

export default Apps
