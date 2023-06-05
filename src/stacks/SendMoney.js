import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EnterAmount from '../screens/SendMoney/EnterAmount';

const Stack = createNativeStackNavigator()

const SendMoneyStack = () => {
  return (
		<Stack.Navigator>
			<Stack.Screen
				name='EnterAmount'
				component={EnterAmount}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name='SelectAccount'
				component={EnterAmount}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name='NewAccount'
				component={EnterAmount}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name='Confirmation'
				component={EnterAmount}
				options={{headerShown: false}}
			/>
		</Stack.Navigator>
  );
}

export default SendMoneyStack