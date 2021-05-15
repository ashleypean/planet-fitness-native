import React, { useState } from 'react'
import { Button, Divider, Text } from 'react-native-paper'
import styled from 'styled-components/native'

const Tasks = ({ task }) => {
  return (
    <>
      <Container>
        <TaskButton
          icon="check"
          color={task?.isCompleted ? 'purple': 'gray'}
          onPress={() => task.isCompleted = !task?.isCompleted }
        />

        <TaskContent>
          <TaskText>{task?.title || ' '}</TaskText>
          <TaskTime>{`${task?.startTime || ' '} to ${task?.endTime || ''}`}</TaskTime>
        </TaskContent>

        <TaskButton
          mode="contained"
          color="purple"
          compact={true}
        >
          View
        </TaskButton>
      </Container>

      <TaskDivider />
    </>
  )
}

export default Tasks

const Container = styled.View`
  margin: 10px 0;
  height: 75px;
  margin: 0;
  padding: 0;
  width: 90%;
  font-family: Arial;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const TaskButton = styled(Button)`
  margin: 0;
  padding: 0;
`

const TaskContent = styled.View`
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const TaskText = styled(Text)`
  color: white;
`

const TaskTime = styled(Text)`
  color: white;
  font-size: 12px;
`

const TaskDivider = styled(Divider)`
  background: yellow;
  color: blue;
  width: 90%;
  margin: auto;
`