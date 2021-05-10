import React from 'react'
import styled from 'styled-components/native'
import Nav from '../Nav/Nav'
import Days from './Days'

const Schedule = ({ navigation }) => {
  return (
    <Container>
      <Nav component="Workout Schedule" navigation={navigation} />
      <Days />
    </Container>
  )
}

export default Schedule

const Container = styled.View`
  background: #242323;
  height: 100%;
  width: 100%;
  font-family: Arial;
  padding-top: 60px;
  display: flex;
  align-items: center;
`