import React from 'react'
import styled from 'styled-components/native'
import ProfileCard from './ProfileCard'

const Cards = () => {
  const cards = ['Goals', 'Workout List', 'Weekly Stats', 'Settings']
  return (
    <Container>
      {cards.map((card) => <ProfileCard card={card} key={card} />)}
    </Container>
  )
}

export default Cards

const Container = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  height: 50%;
  width: 85%;
`


