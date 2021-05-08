import React, { useState, useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import axios from 'axios'
import { Button, KeyboardAvoidingView, TouchableWithoutFeedback, Keyboard, View  } from 'react-native'
import styled from 'styled-components/native'
import * as action from '../../State/actionTypes'
import { StateContext } from '../../State/context'

export default function Register() {
  const [errorMessage, setErrorMessage] = useState('Passwords do not match. Please try again.')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const { dispatch } = useContext(StateContext)
  const navigation = useNavigation()

  const handleSubmit = async () => {
    if(!firstName && !lastName && !email && !password1 && !password2) return
    if(password1 === password2) {
      try {
        const response = await axios.post('/register', {
          data: {email, firstName, lastName, password: password1},
        })

        // On success response, update context and navigate to the home page
        if (response.status === 200) {
          dispatch({
            type: action.ADD_USER, 
            payload: { email, firstName, lastName }
          })
          navigation.navigate('home')
        } else setErrorMessage('Error Occurred. Please try again.')
      } catch(err) {
        console.log(err)
      }

    } else {
      setErrorMessage('')
    }
    navigation.navigate('home')
  }

  return (
    <KeyboardAvoidingView
      style={RegisterContainer}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={RegisterView}>
          <Header>Register</Header>

          <Label>Enter your first name: </Label>
          <InputField 
            placeholder="First Name"
            placeholderTextColor="white"
            onChangeText={(text) => setFirstName(text)}
          />

          <Label>Enter your last name: </Label>
          <InputField 
            placeholder="Last Name"
            placeholderTextColor="white"
            onChangeText={(text) => setLastName(text)}
          />

          <Label>Enter your email: </Label>
          <InputField 
            placeholder="Email"
            placeholderTextColor="white"
            onChangeText={(text) => setEmail(text)}
          />

          <Label>Enter a password: </Label>
          <InputField 
            placeholder="Password"
            placeholderTextColor="white"  
            onChangeText={(text) => setPassword1(text)}
          />

          <Label>Confirm your password: </Label>
          <InputField 
            placeholder="Confirm password"
            placeholderTextColor="white"
            onChangeText={(text) => setPassword2(text)}
          />

          <Button 
            color="gold"
            title="Register"
            onPress={handleSubmit}
          />

          <ErrorField 
            active={errorMessage.length > 0}
          >
            {errorMessage}
          </ErrorField>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  )
}

const RegisterContainer = {
  flex: 1,
  backgroundColor: '#242323',
}

const RegisterView = {
  backgroundColor: '#242323',
  height: '100%',
  width: '100%', 
  fontFamily: 'Arial', 
  display: 'flex', 
  alignItems: 'center', 
  color: 'white',
  flex: 1,
  justifyContent: "flex-end"
}

const Header = styled.Text`
  font-size: 42px;
  color: whitesmoke;
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
  margin: 5px;
`

const ErrorField = styled.Text`
  color: red;
  font-size: 16px;
  display: ${props => props.active ? 'none': 'block'};
`