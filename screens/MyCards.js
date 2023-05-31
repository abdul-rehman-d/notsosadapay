import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import ArrowIcon from '../components/ArrowIcon'
import colors from '../colors'

function Button ({ onPress, children, color }) {
	return (
		<TouchableOpacity
			className={color + 'py-3 rounded-3xl w-[48%] items-center'}
			onPress={onPress}
		>
			<Text className='text-white font-bold text-lg'>
				{children}
			</Text>
		</TouchableOpacity>
	)
}

function CardNumber ({ cardNo, view, textColor }) {
	return (
		<View className='flex-col mb-16'>
			{
				cardNo.split(' ').map((item, index) => {
					return (
						<Text
							className={textColor + 'text-2xl font-bold tracking-widest'}
							key={`card-number-row-${index}`
						}>{
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

	const textColor = type === 'virtual' ? 'text-gray-400 ' : 'text-foreground '
	const bgColor = type === 'virtual' ? 'bg-[#F2F6F7] ' : 'bg-secondary '
	const buttonColor = type === 'virtual' ? 'bg-gray-500 ' : 'bg-secondaryDark '
	const icon = type === 'virtual' ? require('../assets/icon.png') : require('../assets/icon_mono.png')

	return (
		<View className={bgColor + 'rounded-2xl p-6 shadow-black shadow-md w-64'}>
			<View className='flex-row justify-between'>
				<View className='items-center'>
					<Image
						source={icon}
						className='w-10 h-10 aspect-square mb-2'
						resizeMode='contain'
					/>
					{
						type === 'virtual' &&
						<Text className={textColor + 'font-light'}>Virtual</Text>
					}
				</View>
				<View className='items-end'>
					<CardNumber cardNo={cardNo} view={view} textColor={textColor} />
					<View className='mb-16 flex-row'>
						<View className='mr-2 items-end'>
							<Text className={textColor + 'text-lg'}>Exp Date</Text>
							<Text className={textColor + 'text-lg'}>CVC</Text>
						</View>
						<View className='items-end w-12'>
							<Text className={textColor + (view ? 'text-lg' : 'text-xl')}>
								{view ? expDate : '• • / • •'}
							</Text>
							<Text className={textColor + (view ? 'text-lg' : 'text-xl')}>
								{view ? cvc : '• • •'}
							</Text>
						</View>
					</View>
				</View>
			</View>
			<View className='flex-row justify-between'>
				<Button
					onPress={() => setView(curr => !curr)}
					color={buttonColor}
					>
					{view ? 'Hide' : 'View'}
				</Button>
				<Button
					onPress={() => {}}
					color={buttonColor}
				>Copy</Button>
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
			cardNo: '1234 5678 1234 2812',
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
				<Text className='text-black text-lg text-center w-full font-bold'>
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