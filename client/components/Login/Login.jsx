import React, { useRef } from 'react'
import { useNavigation } from '@react-navigation/native'
import { Button, KeyboardAvoidingView } from 'react-native'
import styled from 'styled-components/native'
import axios from 'axios'
import { useStateValue } from '../../State/context'
import * as action from '../../State/actionTypes'

export default function Login(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigation = useNavigation()
  cosnt [__, dispatch] = useStateValue()

  const handleSubmit = async () => {
    console.log(email, password)

    const response = await axios.post('/login', {
      data: {
        email, 
        password
      }
    })

    console.log(response.data)

    if(response.status === 200) {
      const { firstName, lastName, email } = response.data
      dispatch({
        type: action.ADD_USER, 
        payload: {
          firstName, 
          lastName, 
          email
        }
      })
      navigation.navigate('home')
    }
  }

  return (
    <KeyboardAvoidingView 
      style={{flex: 1}}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <LoginContainer>
      <Header>Login</Header>

      <Label>Username: </Label>
      <InputField 
        placeholder="Username"
        placeholderTextColor="white"
        onChangeText={(text) => setEmail(text)}
      />

      <Label>Password: </Label>
      <InputField 
        placeholder="Pasword"
        placeholderTextColor="white"
        onChangeText={(text) => setPassword(text)}
      />

      <Button 
        color="gold"
        title="Sign In"
        ref={passwordRef}
        onPress={handleSubmit}
      />
    </LoginContainer>
    </KeyboardAvoidingView>
    
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

const Header = styled.Text`
  font-size: 42px;
  color: whitesmoke;
`

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
