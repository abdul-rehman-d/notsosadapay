import { View, Text, Image } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
// custom
import createDummyArray from '../helpers/createDummyArray'
import NumKeyPad from '../components/NumKeyPad'
import { SignInContext } from '../context/SignInContext'
import { useNavigation } from '@react-navigation/native'

const PinScreen = ({ navigation }) => {

  // const nav = useNavigation()

  // const { setSignedIn } = useContext(SignInContext)

  const correctPin = '1234'
  const MAX_PIN_LENGTH = 4
  const [ pin, setPin ] = useState('')
  const [ showError, setShowError ] = useState(false)

  // useEffect(() => {
  //   return navigation.addEventListener('focus', () => {
  //     setPin('')
  //   })
  // }, [navigation])
  
  useEffect(() => {
    if (pin.length === MAX_PIN_LENGTH) {
      if (pin === correctPin) navigation.navigate('HomeTabs')
      else {
        setPin('')
        setShowError(true)
        setTimeout(() => {
          setShowError(false)
        }, 2000);
      }
    }
}, [pin])
	
  return (
    <View className="flex-1 bg-primary pt-16 items-center">
      <Image
        source={require('../assets/logo.png')}
        className='w-64 mb-8 '
        resizeMode='contain'
      />
      <View className='h-12 mb-8 justify-end items-center'>
        <View className='flex-row gap-x-4 items-center h-5'>
          {
            createDummyArray(MAX_PIN_LENGTH).map((index) => (
              <Text className={`w-5 ${!pin.charAt(index) ? "h-1 bg-slate-200 rounded-sm" : 'h-5 bg-white rounded-full'}`} />
            ))
          }
        </View>
        { showError ?
          <Text className='text-foreground mt-4'>Wrong PIN</Text>
        :
          <></>
        }
      </View>
      <NumKeyPad
        push={(key) => setPin(prev => prev.concat(key))}
        pop={() => (pin.length && setPin(prev => prev.slice(0, -1)))}
      />
    </View>
  )
}

export default PinScreen