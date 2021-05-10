import React, { useState, useEffect } from 'react'
import { Text } from 'react-native'
import { IconButton, Button } from 'react-native-paper'
import { BarCodeScanner } from 'expo-barcode-scanner'
import styled from 'styled-components/native'
import Nav from '../Nav/Nav'


const QR = () => {
  const [hasPermission, setHasPermission] = useState(null)
  const [scanned, setScanned] = useState(false)

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    })()
  }, [])

  // TODO - configure barcodes to register as different workouts 
  const handleBarCodeScanned = ({ type, data }) => {
    setScanned(true)
    alert(`Bar code with type ${type} and data ${data} has been scanned!`)
  }

  // return values dependent on barcode permision status
  if (hasPermission === null) {
    return (
      <Container>
        <Nav component="QR Scanner"/>
        <Text>Requesting camera permission</Text>
      </Container>
    )
  }
  if (hasPermission === false) {
    return (
      <Container>
        <Nav component="QR Scanner"/>
        <Instructions>Requesting camera permission</Instructions>
        <QRContainer>
          <IconButton 
            icon="camera-off"
            size={75}
            color="red"
            onPress={null}
          />
        </QRContainer>
        <Button mode="contained" color="purple">
          Request Camera Permission
        </Button>
      </Container>
    )
  }else return (
    <Container>
      <Nav component="QR Scanner"/>
      <Instructions>Center QR Label in Frame</Instructions>
      <QRContainer>
        <CameraView
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        />
      </QRContainer>
    </Container>
  )
}

const Container = styled.View`
  background: #242323;
  height: 100%;
  width: 100%;
  font-family: Arial;
  padding-top: 30px;
  display: flex;
  align-items: center;
`

const QRContainer = styled.View`
  margin: 50px;
  height: 255px;
  width: 255px;
  border: 5px dashed black;
  display: flex;
  align-items: center;
  justify-content: center;
  background: lightgray;
`
const CameraView = styled(BarCodeScanner)`
  height: 250px;
  width: 250px;
`

const Instructions = styled.Text`
  color: white;
  margin-top: 50px;
  font-size: 22px; 
`


export default QR
