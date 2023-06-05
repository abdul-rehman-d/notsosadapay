import { View, Text, TouchableOpacity, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import ArrowIcon from './ArrowIcon'
import colors from '../colors'
import { useNavigation } from '@react-navigation/native'

const HomeScreenButtons = () => {
	const navigation = useNavigation()
  return (
    <View className='flex-row px-4 h-72 w-full'>
        {/* left col */}
        <TouchableOpacity className='mr-3 basis-7/12 rounded-2xl' onPress={() => navigation.navigate('MyCards')}>
        <LinearGradient
            className='px-3 py-4 rounded-2xl h-full justify-between'
            colors={[colors.secondaryMedium, colors.secondary]}
        >
            <View>
            <Text className='text-foreground'>Current Balance</Text>
            <Text className='text-foreground text-3xl pt-1 font-bold tracking-widest'>Rs 1,456,799</Text>
            </View>
            <View className='flex-row justify-between items-center'>
            <View className='w-12 h-8'>
                <Image
                source={require('../assets/mastercard.png')}
                className='w-full h-full'
                resizeMode='contain'
                />
            </View>
            <ArrowIcon direction='right' color={colors.foreground} />
            </View>
        </LinearGradient>
        </TouchableOpacity>
        {/* right col */}
        <View className='flex-1 justify-between'>
        {/* load button */}
        <TouchableOpacity className='rounded-2xl relative' style={{flexBasis: '48%'}} onPress={() => navigation.navigate('LoadMoney')}>
            <LinearGradient
            className='p-3 rounded-2xl h-full justify-between'
            colors={[colors.accentMedium, colors.accent]}
            >
            <ArrowIcon direction='down' color={colors.foreground} />
            <Text className='text-foreground text-xl leading-5 font-semibold pr-8'>Load Money</Text>
            </LinearGradient>
        </TouchableOpacity>
        {/* send button */}
        <TouchableOpacity className='rounded-2xl relative' style={{flexBasis: '48%'}} onPress={() => navigation.navigate('SendMoney', { screen: 'EnterAmount' })}>
            <LinearGradient
            className='p-3 rounded-2xl h-full justify-between'
            colors={[colors.primaryMedium, colors.primary]}
            >
            <View className='items-end'>
                <ArrowIcon direction='up-right' color={colors.foreground} />
            </View>
            <Text className='text-foreground text-xl leading-5 font-semibold pr-8'>Send Money</Text>
            </LinearGradient>
        </TouchableOpacity>
        </View>
    </View>
  )
}

export default HomeScreenButtons