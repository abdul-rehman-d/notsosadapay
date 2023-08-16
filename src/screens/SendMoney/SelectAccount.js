import { View, Text, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import ArrowIcon from '../../components/ArrowIcon'
import colors from '../../colors'
import { TouchableOpacity } from 'react-native-gesture-handler'

const accounts = [
  {
    logo: 'nice',
    name: 'Muhammad Hamza Munir',
    bankName: 'Sadapay',
    lastDigits: '*4732'
  },
  {
    logo: 'nice',
    name: 'Muhammad Hamza Pervez',
    bankName: 'Sadapay',
    lastDigits: '*1506'
  },
  {
    logo: 'nice',
    name: 'ABDUL REHMAN',
    bankName: 'hbl',
    lastDigits: '*4903'
  },
  {
    logo: 'nice',
    name: 'ABDUL REHMAN DANIYAL',
    bankName: 'Easypaisa',
    lastDigits: '*4062'
  },
]

const SelectAccount = ({ route, navigation }) => {
  console.log('route', route)
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
      <ScrollView
        className='pt-4'
        contentContainerStyle={{flexGrow: 1}}
      >
        <TouchableOpacity className="rounded-lg shadow-lg p-4 mb-4 flex-row gap-y-2" onPress={(e) => {
          navigation.navigate('SendMoney', { screen: 'NewAccount' })
        }}>
          <View className="rounded-full h-12 w-12 justify-center items-center bg-primaryLight">
            <ArrowIcon direction='left' color={colors.primary} />
          </View>
          <View>
            <Text className='font-bold mb-4'>New Bank Transfer</Text>
            <Text>
              Send money to any bank or wallet account in Pakistan
            </Text>
          </View>
        </TouchableOpacity>

        <Text className='uppercase'>Quick Transfers</Text>
        {accounts.map((account, idx) => (
          <View key={`account-${idx}`} className='flex-col gap-x-4 p'>
            <View className='rounded-full h-12 w-12 justify-center items-center border border-slate-500'>
              <Image
                source={require('../../assets/icon.png')}
                className='w-10 h-10'
              />
            </View>
            <View className="flex-grow">
              <Text className='font-bold mb-4'>
                {account.name}
              </Text>
              <View className='flex-col gap-x-2'>
                <Text>{account.bankName}</Text>
                <Text>{account.lastDigits}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  )
}

export default SelectAccount