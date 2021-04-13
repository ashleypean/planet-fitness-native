import React, { useRef } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import styled from 'styled-components/native';

export default function Login(){
  const usernameRef = useRef()
  const passwordRef = useRef()

  return (
    <LoginContainer>
      <Label>Username: </Label>
      <InputField 
        placeholder="Username"
        placeholderTextColor="white"
      />

      <Label>Password: </Label>
      <InputField 
        placeholder="Pasword"
        placeholderTextColor="white"
        ref={usernameRef}
      />

      <Button 
        color="gold"
        title="Sign In"
        ref={passwordRef}
      />
    </LoginContainer>
  )
}

const LoginContainer = styled.View`
  background: #242323;
  height: 100%;
  width: 100%;
  font-family: Arial;
  padding-top: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Label = styled.Text`
  color: white;
  align-self: flex-start;
  padding-left: 10%;
`
const InputField = styled.TextInput`
  color: white;
  border-color: gray;
  border-width: 1px;
  font-size: 20px;
  width: 80%;
  padding: 20px;
  margin: 10px;
`
