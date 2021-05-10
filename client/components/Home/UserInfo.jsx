import React, { useContext } from 'react'
import styled from 'styled-components/native'
import { View } from 'react-native'
import { Text, Button } from 'react-native-paper'
import { StateContext } from '../../State/context'

export default function UserInfo({ navigation }) {
  const { state: { user } } = useContext(StateContext)

  

  return (
    <Container>
      <UserProfileImage source={require('../../images/me.jpeg')}/>
      <InfoContainer>
        <Username>{`${user.firstName} ${user.lastName}`}</Username>
        <MemberSince>Member Since {user.joinDate.yyyy}</MemberSince>
        <Button
          icon="pencil"
          mode="contained"
          color="gold"
        >
          Edit Profile
        </Button>
      </InfoContainer>
    </Container>
  )
}

const Container = styled.View`
  background: #242323;
  height: 20%;
  width: 90%;
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

const InfoContainer = styled.View`
  display: flex;
`

const Username = styled(Text)`
  color: white;
`

const MemberSince = styled(Text)`
  color: #857f7f;
  margin-bottom: 20px;
`
