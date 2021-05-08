import React from 'react'
import styled from 'styled-components/native'

const Quote = () => {
  return (
    <Container>
      <QuoteText>"Your body can stand almost anything. It's your mind that you have to convince"</QuoteText>
    </Container>
  )
}

export default Quote

const Container = styled.View`
  width: 75%;
  margin: 30px 0;
`

const QuoteText = styled.Text`
  color: white;
`
