import React, { useEffect, useState } from 'react'
import styled from 'styled-components/native'

const Days = () => {
  const days = ['Sun', 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat']
  const [dayState, setDayState] = useState('Sun')

  useEffect(() => {
    const date = new Date()
    const idx = date.getDay()
    setDayState(days[idx])
  }, [])

  return (
    <DayContainer>
      {days.map((day) => (
        <DayButton
          key={day}
          active={day === dayState}
          onPress={() => setDayState(day)}
          >
          <Text active={day === dayState}>
            {day}
          </Text>
        </DayButton>
        ))}
    </DayContainer>
  )
}

export default Days

const DayContainer = styled.View`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`

const DayButton = styled.TouchableOpacity`
  margin: 0 10px;
`

const Text = styled.Text`
  color: ${(props) => props.active ? 'gold': '#FFF'};
  font-size: 16px;
`