import React from 'react'
import { NavigationContainer } from '@react-navigation/native' 
import { createStackNavigator } from '@react-navigation/stack'
import Auth from './components/Auth/Auth'
import Login from './components/Login/Login'
import Register from './components/Register/Register'



export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode={false}>
          <Stack.Screen name="auth" component={Auth} />
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="register" component={Register} />
      </Stack.Navigator>
    </NavigationContainer>

  );
}
