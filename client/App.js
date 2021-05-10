import React from 'react'
import { NavigationContainer } from '@react-navigation/native' 
import { createStackNavigator } from '@react-navigation/stack'
import StateProvider from './State/context'
import Auth from './components/Auth/Auth'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import Menu from './components/Menu/Menu'

export default function App() {
  const Stack = createStackNavigator();
  return (
    <StateProvider>
      <NavigationContainer>
        <Menu />
      </NavigationContainer>
    </StateProvider>
  );
}
