import React, { useState } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import ArrowIcon from '../components/ArrowIcon'
import SadaButton from '../components/SadaButton'
import colors from '../colors';

import * as Clipboard from 'expo-clipboard';

const LoadMoney = ({ navigation }) => {
  const limit = 180001
  const iban = '03132674062'
  const ibanEx = 'PK45 SADA 0000 0031 3267 4062'

  const [ copied, setCopied ] = useState(false)

  const copyToClipboard = async (text) => {
    await Clipboard.setStringAsync(text)
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000);
  }

  return (
    <SafeAreaView className='flex-1 p-4'>
        <View>
            <ArrowIcon direction='left' color='black' size={24} onPress={() => {
              navigation.goBack()
            }} />
        </View>
        <Text className='text-3xl font-bold text-gray-800 mt-8 mb-4'>
          Load Money
        </Text>
        <Text className='text-gray-500'>
          <Text className='text-primary font-semibold'>Rs. {limit} </Text>
          incoming limit left this month
        </Text>
        <View className='my-4'>
          <Text className='font-bold text-lg mb-2'>
            Receive local transfers
          </Text>
          <TouchableOpacity
            className='border border-gray-300 rounded-xl p-4'
            onPress={() => copyToClipboard(iban)}
          >
            <Text className='text-gray-500 mb-2'>My SadaPay account number</Text>
            <Text className='text-black mb-3'>{iban}</Text>
            <View className='flex-row'>
              <FontAwesome5 name="copy" size={24} color={colors.primary} />
              <Text className='text-primary text-lg font-semibold ml-4'>Copy</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View className='my-4'>
          <Text className='font-bold text-lg mb-2'>
            Receive international transfers
          </Text>
          <TouchableOpacity
            className='border border-gray-300 rounded-xl p-4'
            onPress={() => copyToClipboard(ibanEx)}
          >
            <Text className='text-gray-500 mb-2'>My SadaPay IBAN number</Text>
            <Text className='text-black mb-3'>{ibanEx}</Text>
            <View className='flex-row'>
              <FontAwesome5 name="copy" size={24} color={colors.primary} />
              <Text className='text-primary text-lg font-semibold ml-4'>Copy</Text>
            </View>
          </TouchableOpacity>
        </View>
        {
          copied &&
          <SadaButton
            Icon={() => (<Entypo name="check" size={24} color={colors.foreground} />)}
            text='Copied'
          />
        }
    </SafeAreaView>
  )
}

export default LoadMoney