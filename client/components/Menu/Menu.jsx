import React from 'react'
import { createDrawerNavigator, DrawerItem } from '@react-navigation/drawer'
import styled from 'styled-components/native'
import QR from '../QR/QR'
import Home from '../Home/Home'
import Settings from '../Settings/Settings'
import Schedule from '../Schedule/Schedule'


const Menu = ({ activeComponent }) => {
  const Drawer = createDrawerNavigator()

  return (
    <Drawer.Navigator
      initialRouteName="Workout Schedule"
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
          key={option}
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
  'Workout Schedule': Schedule, 
  // 'Exercise': 'exercise', 
  // 'Workout Statistics': 'statistics', 
  // 'Goals': 'goals', 
  // 'Edit Profile': 'edit-profile'
}




const MenuItem = styled.Text`
  color: ${(props) => props.active ? 'purple': 'white'};

`