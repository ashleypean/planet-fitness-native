import React, { useContext } from 'react'
import { StateContext } from '../../State/context'
import styled from 'styled-components/native'
import { Appbar } from 'react-native-paper'

export default function TopNav() {
  const { state: { user } } = useContext(StateContext)

  return (
    <NavContainer>
      <Appbar.Action 
        icon="menu"
        color="white"
        onPress={() => console.log('pressed')}/>

      <Appbar.Content
        color="white" 
        title={`${user.firstName} ${user.lastName}`}/>

      <Appbar.Action 
        icon="tune"
        color="white"
        onPress={() => console.log('pressed')}/>
    </NavContainer>
  )
}

const NavContainer = styled(Appbar)`
  background: transparent;
  color: white;
`
