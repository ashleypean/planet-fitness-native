import React, { useRef } from 'react'
import { StyleSheet, Text, View, TextInput, Button } from 'react-native'
import styled from 'styled-components/native';

export default function Register() {
  const firstNameRef = useRef()
  const lastNameRef = useRef()
  const usernameRef = useRef()
  const passwordRef = useRef()
  const confirmPasswordRef = useRef()

  return (
    <RegisterContainer>
      <Label>Enter your first name: </Label>
      <InputField 
        placeholder="First Name"
        placeholderTextColor="white"
        ref={firstNameRef}
      />

      <Label>Enter your last name: </Label>
      <InputField 
        placeholder="Last Name"
        placeholderTextColor="white"
        ref={lastNameRef}
      />

      <Label>Enter a username: </Label>
      <InputField 
        placeholder="Username"
        placeholderTextColor="white"
        ref={usernameRef}
      />

      <Label>Enter a password: </Label>
      <InputField 
        placeholder="Password"
        placeholderTextColor="white"  
        ref={passwordRef}
      />

      <Label>Confirm your password: </Label>
      <InputField 
        placeholder="Confirm password"
        placeholderTextColor="white"
        ref={confirmPasswordRef}
      />

      <Button 
        color="gold"
        title="Register"
      />
    </RegisterContainer>
  )
}

const RegisterContainer = styled.View`
  background: #242323;
  height: 100%;
  width: 100%;
  font-family: Arial;
  padding-top: 80px;
  display: flex;
  align-items: center;
  color: white;
`

const Label = styled.Text`
  color: white;
  margin-top: 30px;
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