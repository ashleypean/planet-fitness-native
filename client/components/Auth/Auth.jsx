import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, Alert, Button } from 'react-native'
import styled from 'styled-components/native';
import logo from '../../images/logo.png'


export default function Auth({ navigation }){

  return (
    <AuthContainer>
      <Image source={logo}/>
      <MainHeader>Member Sign In</MainHeader>
      <SubHeader>Your Fitness is Essential</SubHeader>

        <Button 
          color="gold"
          title="Sign Up"
          onPress={()=> navigation.navigate('register')}
        />

      <SignUpText>Already have an account?</SignUpText>

      <Button 
          color="purple"
          title="Sign In"
          onPress={() => navigation.navigate('login')}
        />

    </AuthContainer>
  )
}

// export default Auth

const AuthContainer = styled.View`
  background: #242323;
  height: 100%;
  width: 100%;
  font-family: Arial;
  padding-top: 80px;
  display: flex;
  align-items: center;
`;
export const MainHeader = styled.Text`
  font-size: 40px;
  color: white;
  margin-top: 50px;
`

export const SubHeader = styled.Text`
  font-size: 15px;
  color: white;
  margin-top: 20px;
`

export const SignUpText = styled.Text`
  color: white;
  font-size: 15px;
  margin-top: 200px;
`

const SignUpButton = styled.TouchableOpacity`
  color: gold;
`

