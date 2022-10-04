import { View, Text, TouchableOpacity } from 'react-native'
import { Feather } from '@expo/vector-icons';
import colors from "../colors";

const NumKeyPad = ({ push, pop }) => {
	const keys = [1,2,3,4,5,6,7,8,9,null,0]
	return (
		<View className='flex-row flex-wrap w-80 gap-x-0 justify-between'>
			{ keys.map((key) => (
				key === null ?
					<Text className='w-24 h-24' />
				:
					<TouchableOpacity
						className={`w-24 h-24 rounded-full
						active:bg-transBlack
						items-center justify-center`}
						onPress={() => (push(key))}
					>
						<Text className='text-foreground text-2xl font-bold'>{key}</Text>
					</TouchableOpacity>
			))}
			<TouchableOpacity
				className={`w-24 h-24 rounded-full
				items-center justify-center`}
				onPress={pop}
			>
				{/* <Ionicons name='fa-delete-left' size={20} color='white' /> */}
				<Feather name="delete" size={24} color={colors.foreground} />
			</TouchableOpacity>
		</View>
	)
}

export default NumKeyPad