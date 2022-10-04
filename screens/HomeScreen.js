import { ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import HomeScreenButtons from '../components/HomeScreenButtons'
import TransactionHistory from '../components/TransactionHistory'

const HomeScreen = () => {
  return (
    <SafeAreaView className='flex-1 bg-background'>
      <ScrollView className='pt-4' contentContainerStyle={{flexGrow: 1}}>
        <HomeScreenButtons />
        <TransactionHistory />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen