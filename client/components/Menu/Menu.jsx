import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import styled from 'styled-components/native'
import QR from '../QR/QR'
import Home from '../Home/Home'
import Settings from '../Settings/Settings'


const Menu = ({ activeComponent }) => {

  const Drawer = createDrawerNavigator()
  const navigateToPage = (page) => {
  }

  return (
    <Drawer.Navigator
      initialRouteName="Settings"
      drawerContentOptions={{
        activeTintColor: 'purple', 
        inactiveTintColor: 'white'
      }}
      drawerStyle={{
        backgroundColor: '#242323',
        color: 'white',
      }}
    >
      {Object.keys(menuOptions).map((option) => (
        <Drawer.Screen 
          name={option} 
          component={menuOptions[option]}
          options={{
            color: 'white'
          }}
        />
      ))}
    </Drawer.Navigator>
  )
}

export default Menu

const menuOptions = {
  'QR Scanner': QR, 
  'Profile': Home, 
  'Settings': Settings, 
  // 'Exercise': 'exercise', 
  // 'Workout Schedule': 'schedule', 
  // 'Workout Statistics': 'statistics', 
  // 'Goals': 'goals', 
  // 'Edit Profile': 'edit-profile'
}




const MenuItem = styled.Text`
  color: ${(props) => props.active ? 'purple': 'white'};

`