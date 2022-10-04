import { Text } from 'react-native'
import { Feather } from '@expo/vector-icons';

const ArrowIcon = ({ direction, color, ...rest }) => {
  return (
    <Text>
        <Feather name={`arrow-${direction}`} size={32} color={color} {...rest} />
    </Text>
  )
}

export default ArrowIcon