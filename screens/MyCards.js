import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ArrowIcon from '../components/ArrowIcon'
import colors from '../colors'

function Button ({ onPress, children }) {
	return (
		<TouchableOpacity
			className='bg-gray-500 py-3 rounded-3xl w-[48%] items-center'
			onPress={onPress}
		>
			<Text className='text-white font-bold text-lg'>
				{children}
			</Text>
		</TouchableOpacity>
	)
}

function CardNumber ({ cardNo, view }) {
	return (
		<View className='flex-col mb-16'>
			{
				cardNo.split(' ').map((item, index) => {
					return (
						<Text className='text-2xl font-bold text-gray-400 tracking-widest' key={`card-number-row-${index}`}>{
							(index === 3 || view)
							? item
							: '• • • •'
						}</Text>
					)
				})
			}
		</View>
	)
}

function Card ({ type, cardNo, expDate, cvc }) {
	const [ view, setView ] = useState(false)

	return (
		<View className='rounded-2xl bg-[#F2F6F7] p-6 shadow-black shadow-md w-64'>
			<View className='flex-row justify-between'>
				<View className='items-center'>
					<Image
						source={require('../assets/icon.png')}
						className='w-10 h-10 aspect-square mb-2'
						resizeMode='contain'
					/>
					{
						type === 'virtual' &&
						<Text className='font-light text-gray-500'>Virtual</Text>
					}
				</View>
				<View className='items-end'>
					<CardNumber cardNo={cardNo} view={view} />
					<View className='mb-16 flex-row'>
						<View className='mr-2 items-end'>
							<Text className='text-lg text-gray-400'>Exp Date</Text>
							<Text className='text-lg text-gray-400'>CVC</Text>
						</View>
						<View className='items-end w-12'>
							<Text className={'text-gray-400 ' + (view ? 'text-lg' : 'text-xl')}>
								{view ? expDate : '• • / • •'}
							</Text>
							<Text className={'text-gray-400 ' + (view ? 'text-lg' : 'text-xl')}>
								{view ? cvc : '• • •'}
							</Text>
						</View>
					</View>
				</View>
			</View>
			<View className='flex-row justify-between'>
				<Button onPress={() => setView(curr => !curr)}>
					{view ? 'Hide' : 'View'}
				</Button>
				<Button onPress={() => {}}>Copy</Button>
			</View>
		</View>
	)
}

const MyCards = ({ navigation }) => {
	const [ tabSelected, setTabSelected ] = useState('virtual')

	const cards = {
		virtual: {
			cardNo: '1234 5678 1234 2811',
			expDate: '30 / 23',
			cvc: '990'
		},
		physical: {
			cardNo: '1234 5678 1234 2811',
			expDate: '30 / 23',
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
				<Card type={tabSelected} {...cards[tabSelected]} />
			</View>
		</SafeAreaView>
	)
}

export default MyCards