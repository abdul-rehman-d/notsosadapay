import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import {getFormattedDate, getHumanReadableDate, getHumanReadableTime, getSymbol} from '../helpers/formatters'
import ArrowIcon from './ArrowIcon'
import colors from '../colors'
import { useNavigation } from '@react-navigation/native'

const TransactionHistory = () => {
  const navigation = useNavigation()
  const transactions = [
    {
      date: '20220918',
      total: 0,
      nature: 'nuetral',
      transactions: [
        {
          id: 0,
          nature: 'credit',
          medium: 'app',
          to: {
            iban: 3132674062,
            name: 'Abdul Rehman',
            bank: 'HBL'
          },
          from: {
            iban: 3132674062,
            name: 'Abdul Rehman',
            bank: 'Sadapay'
          },
          amount: 1000,
          ref: 988989,
          serviceFee: 0,
          time: '202209180123'
        },
        {
          id: 0,
          nature: 'debit',
          medium: 'app',
          to: {
            iban: 3132674062,
            name: 'Abdul Rehman',
            bank: 'HBL'
          },
          from: {
            iban: 3132674062,
            name: 'Abdul Rehman',
            bank: 'Sadapay'
          },
          amount: 1000,
          ref: 988989,
          serviceFee: 0,
          time: '202209180020'
        },
      ]
    },
    {
      date: '20220917',
      total: 1000,
      nature: 'credit',
      transactions: [
        {
          id: 0,
          nature: 'credit',
          medium: 'app',
          to: {
            iban: 3132674062,
            name: 'Abdul Rehman',
            bank: 'HBL'
          },
          from: {
            iban: 3132674062,
            name: 'Abdul Rehman',
            bank: 'Sadapay'
          },
          amount: 1000,
          ref: 988989,
          serviceFee: 0,
          time: '202209171523'
          // 2 0 2 2 0 9 1 7 1 5  2  3
          // 0 1 2 3 4 5 6 7 8 9 10 11
        },
      ]
    }
  ]

  const getPersonName = ({ nature, to, from }) => {
    switch (nature) {
      case 'credit':
        return to.name
      case 'debit':
        return from.name
      default:
        break;
    }
  }

  const today = getFormattedDate(new Date())

  return (
    <View className='bg-white rounded-t-3xl flex-1 self-stretch py-4 px-3 mt-5'>
      {transactions.map((transaction, index) => (
        <View key={index}>
          {/* header */}
          <View className='flex-row justify-between items-end mb-6'>
            <Text className={index===0?'text-3xl font-bold':'text-gray-400'}>{transaction.date === today ? 'Today' : getHumanReadableDate(transaction.date)}</Text>
            <Text className='text-gray-400'>{getSymbol(transaction.nature)} Rs. {transaction.total}</Text>
          </View>
          {/* body */}
          <View className='mb-6'>
            {transaction.transactions.map((transaction, index) => (
              <TouchableOpacity
                className='flex-row mb-6'
                key={index}
                onPress={() => navigation.navigate('TransactionDetails', {
                  transaction
                })}
              >
                <View
                  className={`rounded-2xl p-2 ${transaction.nature==='credit' ? 'bg-secondaryLight' : 'bg-primaryLight'}`}
                >
                  <ArrowIcon
                    color={transaction.nature==='credit' ? colors.secondary : colors.primary}
                    direction={transaction.nature==='credit' ? 'down-left' : 'up-right'}
                  />
                </View>
                <View className='flex-1 px-4'>
                  <Text className='font-bold uppercase text-lg'>{getPersonName(transaction)}</Text>
                  <Text className='text-gray-400'>{getHumanReadableTime(transaction.time.slice(8))}</Text>
                </View>
                <Text
                  className={`text-lg font-bold ${transaction.nature==='credit' && 'text-secondary'}`}
                >
                  {getSymbol(transaction.nature)} Rs. {transaction.amount}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      ))}
    </View>
  )
}

export default TransactionHistory