import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import SignUp from './app/signup';
import Login from './app/login';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Log in">
        <Drawer.Screen name="Log in" component={Login} />
        <Drawer.Screen name="Signup" component={SignUp} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
