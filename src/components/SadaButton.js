import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const SadaButton = ({ text, Icon, disabled, absolute=true, onPress }) => {
	return (
		<TouchableOpacity className={`${disabled ? 'bg-transBlack' : 'bg-black shadow-md'} rounded-xl px-8 py-4
			flex-row justify-between items-center
			${absolute ? 'absolute bottom-10 left-4 right-4' : 'w-full'}`}
			onPress={() => {
				if (!disabled && typeof onPress === "function") onPress()
			}}
			disabled={disabled}
		>
			<Text className='text-lg text-foreground font-bold p-0 m-0'>{text}</Text>
			<Icon />
		</TouchableOpacity>
	)
}

export default SadaButton