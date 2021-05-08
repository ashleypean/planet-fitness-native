import React, { useContext } from 'react'
import { StateContext } from '../../State/context'
import styled from 'styled-components/native'
import TopNav from './TopNav'
import UserInfo from './UserInfo'
import Quote from './Quote'
import Cards from './ProfileCards/Cards'

export default function Home() {
  const { state: { user } } = useContext(StateContext)

  return (
    <HomeContainer>
      <TopNav />
      <UserInfo />
      <Quote />
      <Cards />
    </HomeContainer>
  )
}

const HomeContainer = styled.View`
  background: #242323;
  height: 100%;
  width: 100%;
  font-family: Arial;
  padding-top: 60px;
  display: flex;
  align-items: center;
`
