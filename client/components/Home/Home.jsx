import React from 'react'
import { View, Text } from 'react-native'
import { useStateValue } from '../../State/context'

export default function Home() {
  const [{ firstName, lastName, email }, __] = useStateValue()

  return (
    <View>
      <Text>{firstName, lastName, email}</Text>
    </View>
  )
}
