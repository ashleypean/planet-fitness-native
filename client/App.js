import React from 'react'
import { NavigationContainer } from '@react-navigation/native' 
import { createStackNavigator } from '@react-navigation/stack'
import Auth from './components/Auth/Auth'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import QR from './components/QR/QR'
import Home from './components/Home/Home'
import StateProvider from './State/context'



export default function App() {
  const Stack = createStackNavigator();
  return (
    <StateProvider>
      <NavigationContainer>
        <Stack.Navigator headerMode={false}>
          {/* <Stack.Screen name="auth" component={Auth} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="qr" component={QR} /> */}
          <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </StateProvider>
  );
}
