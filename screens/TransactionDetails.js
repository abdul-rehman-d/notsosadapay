import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ArrowIcon from '../components/ArrowIcon'
import colors from '../colors'
import { getHumanReadableDate, getHumanReadableTime, getSymbol } from '../helpers/formatters'

const TransactionDetails = ({ route, navigation }) => {
  const { transaction } = route.params
  const color = transaction.nature==='credit' ? 'secondary' : 'primary'
  const getFullDate = (date) => {
    return `${getHumanReadableDate(date.slice(0,8))} ${date.slice(0,4)}, ${getHumanReadableTime(date.slice(8))}`
  }
  return (
    <View className='flex-1 bg-[#F2F6F7]'>
      <SafeAreaView className={`h-1/2 rounded-b-3xl justify-between p-4 bg-${color}`}>
        <View className='flex-row items-center justify-between relative'>
          <View className='absolute top-0 left-0 z-10'>
            <ArrowIcon direction='left' color={colors.foreground} size={24} onPress={() => {
              navigation.goBack()
            }} />
          </View>
          <Text className='text-foreground text-lg text-center w-full'>
            {`Money ${transaction.nature==='credit' ? 'recieved' : 'sent'}`}
          </Text>
        </View>
        <View className='items-center'>
          <View className='bg-foreground rounded-3xl mb-4'>
            <ArrowIcon size={100} color={colors[color]} direction={transaction.nature === 'credit' ? 'down-left' : 'up-right'} />
          </View>
          <Text className='mt-5 text-foreground text-4xl font-bold mb-3'>{getSymbol(transaction.nature)} Rs. {transaction.amount}</Text>
          <Text className='text-foreground font-light'>From <Text className='font-normal'>{transaction.from.name}</Text></Text>
          <Text className='text-foreground font-light'>To <Text className='font-normal'>{transaction.to.name}</Text></Text>
          <Text className='text-foreground font-light my-3'>{getFullDate(transaction.time)}</Text>
        </View>
      </SafeAreaView>
      <View className='m-4 bg-white rounded-2xl p-3 divide-y divide-gray-100 shadow-md shadow-black'>
        <View>
          <View className='mb-4'>
            <Text className='text-gray-500 mb-1'>From</Text>
            <Text>{transaction.from.bank}</Text>
            <Text>{transaction.from.iban}</Text>
          </View>
          <View className='mb-4'>
            <Text className='text-gray-500 mb-1'>To</Text>
            <Text>{transaction.to.bank}</Text>
            <Text>{transaction.to.iban}</Text>
          </View>
        </View>
        <View>
        <View className='mt-4'>
            <Text className='text-gray-500 mb-1'>Reference Number</Text>
            <Text>{transaction.ref}</Text>
          </View>
        </View>
      </View>
      {
        transaction.nature === 'debit' &&
        <View className='m-4 bg-white rounded-2xl p-3 shadow-md shadow-black'>
          <Text className='text-gray-500 mb-1'>Service fee + Tax</Text>
          <Text className={transaction.serviceFee === 0 && 'text-secondary font-semibold'}>
            Rs. {transaction.serviceFee} {transaction.serviceFee === 0 && '🎉'}
          </Text>
        </View>
      }
    </View>
  )
}

export default TransactionDetails