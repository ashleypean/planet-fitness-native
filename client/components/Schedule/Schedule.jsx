import React from 'react'
import styled from 'styled-components/native'
import { Divider, Button } from 'react-native-paper'
import Nav from '../Nav/Nav'
import Days from './Days'
import Tasks from './Tasks'

const Schedule = ({ navigation }) => {
  return (
    <Container>
      <Nav component="Workout Schedule" navigation={navigation} />
      <Days />
      <DividerLine />
      <ScrollView>
        {tasks.map((task) => (
          <Tasks task={task} key={task.title + Math.random()}/>
        ))}
      </ScrollView>
      <Button>Add To Schedule</Button>
    </Container>
  )
}

export default Schedule

const Container = styled.View`
  background: #242323;
  height: 100%;
  width: 100%;
  font-family: Arial;
  padding-top: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const DividerLine = styled(Divider)`
  background: gray;
  color: blue;
  width: 90%;
  margin-top: 10px;
`

const ScrollView = styled.ScrollView`
  width: 90%;
`

const tasks = [
  {
    title: 'Treadmill Warm-up',
    startTime: '0600',
    endTime: '1900',
    isCompleted: true,
  },
  {
    title: 'Treadmill Warm-up',
    startTime: '0700',
    endTime: '0700',
    isCompleted: false,
  },
  {
    title: 'Treadmill Warm-up',
    startTime: '0800',
    endTime: '0700',
    isCompleted: true,
  },
  {
    title: 'Treadmill Warm-up',
    startTime: '0900',
    endTime: '0700',
    isCompleted: false,
  },
  {
    title: 'Treadmill Warm-up',
    startTime: '1000',
    endTime: '0700',
    isCompleted: false,
  },
]