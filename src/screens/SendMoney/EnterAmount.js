import { View, Text } from 'react-native'
import React, { useState, useCallback } from 'react'
// custom
import NumKeyPad from '../../components/NumKeyPad'
import ArrowIcon from '../../components/ArrowIcon'
import colors from '../../colors'
import SadaButton from '../../components/SadaButton'

const EnterAmount = ({ navigation }) => {
  const [ amount, setAmount ] = useState(0)
  const [ showError, setShowError ] = useState(false)

  const push = useCallback((key) => {
    if (amount === 0) {
      setAmount(key)
    } else {
      setAmount(parseInt(amount.toString() + key))
    }
  }, [amount])
  const pop = useCallback(() => {
    if (amount <= 0) return
  
    if (amount.toString().length === 1) {
      setAmount(0)
    } else {
      setAmount(parseInt(amount.toString().slice(0, -1)))
    }
  }, [amount])
	
  return (
    <View className="flex-1 bg-primary p-4 pt-16 items-center">
      <View className='flex-row items-center justify-center relative'>
				<View className='absolute top-0 left-0 z-10'>
					<ArrowIcon direction='left' color={colors.foreground} size={24} onPress={() => {
						navigation.goBack()
					}} />
				</View>
        <View className="flex-grow">
          <Text className='text-foreground text-base text-center w-full font-light'>
            Current Balance
          </Text>
          <Text className='text-foreground text-base text-center w-full font-bold'>
            Rs. 1,456,799
          </Text>
        </View>
			</View>
      <View className='justify-center items-center flex-1'>
        <View className='flex-row gap-x-4 items-center'>
          <Text className='text-foreground text-6xl font-bold'>
            {'Rs. ' + amount}
          </Text>
        </View>
        { showError ?
          <Text className='text-foreground mt-4'>Wrong PIN</Text>
        :
          <></>
        }
      </View>
      <NumKeyPad
        push={push}
        pop={pop}
      />
      <SadaButton
        text={'Continue'}
        Icon={() => <ArrowIcon color={colors.foreground} direction='right' />}
        disabled={amount === 0}
        absolute={false}
        onPress={() => {
          navigation.navigate('HomeTabs')
          // , {
          //   screen: 'SelectAccount',
          //   params: {
          //     amount
          //   }
          // })
        }}
      />
    </View>
  )
}

export default EnterAmount