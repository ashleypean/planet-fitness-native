import React, { useContext } from 'react'
import styled from 'styled-components/native'
import { StateContext } from '../../State/context'
import { Switch } from 'react-native-paper'
import Nav from '../Nav/Nav'
import * as actions from '../../State/actionTypes'

const Settings = () => {
  const { state: { settings }, dispatch } = useContext(StateContext)

  const changeActiveValue = (option) => {
    dispatch({ type: actions.CHANGE_SETTINGS, payload: option })
  }

  return (
    <Container>
      <Nav component="Settings" />
      {Object.keys(settings).map((option) => (
        <OptionContainer key={option}>
          <OptionText>
            <OptionTitle>{option}</OptionTitle>
            <Status>Enabled</Status>
          </OptionText>
          <Switch 
            color="gold"
            value={settings[option]}
            onValueChange={() => changeActiveValue(option)} 
          />
        </OptionContainer>
      ))}
      <OptionContainer>
        <OptionText>
          <OptionTitle>About This App</OptionTitle>
          <Status>Version 1.1.0</Status>
        </OptionText>
      </OptionContainer>
    </Container>
  )
}

export default Settings


const Container = styled.View`
  background: #242323;
  height: 100%;
  width: 100%;
  font-family: Arial;
  padding-top: 40px;
  display: flex;
  align-items: center;
`

const OptionContainer = styled.View`
  padding: 10px 20px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const OptionText = styled.View`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const OptionTitle = styled.Text`
  font-size: 20px;
  color: white;
`

const Status = styled.Text`
  color: gray;
`