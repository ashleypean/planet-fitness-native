import React, { useContext } from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import { Text } from 'react-native-paper'
import { StateContext } from '../../State/context'

export default function UserInfo() {
  const { state: { user } } = useContext(StateContext)

  return (
    <Container>
      <UserProfileImage source={require('../../images/me.jpeg')}/>
      <View>
        <Username>{`${user.firstName} ${user.lastName}`}</Username>
        <MemberSince>Member Since {user.joinDate.yyyy}</MemberSince>
      </View>
    </Container>
  )
}

const Container = styled.View`
  background: #242323;
  height: 20%;
  width: 75%;
  font-family: Arial;
  display: flex;
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const UserProfileImage = styled.Image`
  height: 150px; 
  width: 150px;
`

const Username = styled(Text)`
  color: white;
`

const MemberSince = styled(Text)`
  color: #857f7f;
`
