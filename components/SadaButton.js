import React, { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'

const SadaButton = ({ text, Icon, disabled }) => {
	return (
		<TouchableOpacity className={`${disabled ? 'bg-transBlack' : 'bg-black'} rounded-xl px-8 py-4
			flex-row justify-between items-center
			absolute bottom-10 left-4 right-4`}
		>
			<Text className='text-lg text-foreground font-bold p-0 m-0'>{text}</Text>
			<Icon />
		</TouchableOpacity>
	)
}

export default SadaButton