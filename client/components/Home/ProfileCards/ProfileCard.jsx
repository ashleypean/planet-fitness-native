import React, { useReducer, useEffect } from 'react'
import { Pressable } from 'react-native'
import { Card, Avatar } from 'react-native-paper'
import styled from 'styled-components/native'

const ProfileCard = ({ card, navigation }) => {
  const [state, dispatch] = useReducer(getInfo, initalState)
  
  useEffect(() => {
    dispatch({ type: card })
  }, [])

  return (
    <PressableContainer onPress={() => navigation.navigate(state.component)}>
      <Container>
        <Logo icon={state.icon} color="gold"/>
        <Title>{card}</Title>
        <Subtitle>{state.subtitle}</Subtitle>
      </Container>
    </PressableContainer>
  )
}

export default ProfileCard

const initalState = {
  title: '',
  icon: '',
  subtitle: '',
}

const getInfo = (state = initalState, action) => {
  switch(action.type) {
    case 'Goals': 
      return {
        icon: 'trophy-outline',
        subtitle: '57% Achieved',
        title: action.type, 
        component: 'Goals'
      }
    case 'Workout List': 
      return {
        icon: 'format-list-bulleted-type', subtitle: 'Get List',
        title: action.type, 
        component: 'Workout Schedule'
      }
    case 'Weekly Stats': 
      return {
        icon: 'fire',
        subtitle: '36% more reps',
        title: action.type, 
        component: 'Workout Stats'
      }
    case 'Settings':
      return {
        icon: 'tune',
        subtitle: '100% Completed',
        title: action.type, 
        component: 'Settings'
      }
    default:
      return state
  }
}

const PressableContainer = styled(Pressable)`
  display: flex;
  height: 40%;
  width: 50%;
  margin: 10px 0;
`

const Container = styled(Card)`
  height: 100%;
  width: 95%;
  background: #333333; 
  padding: 5px;
`

const Title = styled.Text`
  color: white; 
  font-family: Arial;
  font-size: 18px;
  margin: 10px;
`

const Subtitle = styled.Text`
  color: lightgray;
  margin: 10px;
`

const Logo = styled(Avatar.Icon)`
  background: transparent;
  color: #93741e;
`




