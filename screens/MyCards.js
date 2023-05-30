import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ArrowIcon from '../components/ArrowIcon'
import colors from '../colors'

const MyCards = ({ navigation }) => {
	const [ tabSelected, setTabSelected ] = useState('virtual')

	const cards = {
		virtual: {
			cardNo: '1234 5678 1234 2811',
			expDate: '30-23',
			cvc: '990'
		},
		physical: {
			cardNo: '1234 5678 1234 2811',
			expDate: '30-23',
			cvc: '990'
		}
	}

	return (
		<SafeAreaView className='flex-1 p-4'>
			<View className='flex-row items-center justify-between relative'>
				<View className='absolute top-0 left-0 z-10'>
					<ArrowIcon direction='left' color={colors.black} size={24} onPress={() => {
						navigation.goBack()
					}} />
				</View>
				<Text className='text-black text-lg text-center w-full'>
					My Cards
				</Text>
			</View>

			<View className='flex-row mt-5 rounded-3xl bg-gray-300 p-1'>
				<Text
					className={'w-1/2 p-2 bg-transparent text-center text-gray-600 rounded-3xl font-bold' + (tabSelected === 'virtual' && ' bg-white text-gray-800')}
					onPress={() => {
						if (tabSelected !== 'virtual') setTabSelected('virtual')
					}}
				>Virtual</Text>
				<Text
					className={'w-1/2 p-2 bg-transparent text-center text-gray-600 rounded-3xl font-bold' + (tabSelected === 'physical' && ' bg-white text-gray-800')}
					onPress={() => {
						if (tabSelected !== 'physical') setTabSelected('physical')
					}}
				>Physical</Text>
			</View>

			<View className='items-center p-8'>
				<View className='rounded-2xl bg-[#F2F6F7] p-6 shadow-black shadow-md'>
					<View className='flex-row'>
						<View>
							<Image
								source={require('../assets/logo.png')}
								className='w-full h-full aspect-square'
								resizeMode='contain'
							/>
							{
								tabSelected === 'virtual' &&
								<Text className='font-light text-gray-300'>Virtual</Text>
							}
						</View>
						<View className='items-end'>
						</View>
					</View>
				</View>
			</View>
		</SafeAreaView>
	)
}

export default MyCards