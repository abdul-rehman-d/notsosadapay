import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PinScreen from '../screens/PinScreen';
import HomeTabs from '../screens/HomeTabs';
import TransactionDetails from '../screens/TransactionDetails';
import LoadMoney from '../screens/LoadMoney';
import MyCards from '../screens/MyCards';
import SendMoneyStack from '../stacks/SendMoney';

const Stack = createNativeStackNavigator()

const MainStack = () => {
  return (
		<Stack.Navigator>
			<Stack.Screen
				name='Pin'
				component={PinScreen}
				options={{headerShown: false, presentation: 'fullScreenModal'}}
			/>
			<Stack.Screen
				name='HomeTabs'
				component={HomeTabs}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name='TransactionDetails'
				component={TransactionDetails}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name='MyCards'
				component={MyCards}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name='LoadMoney'
				component={LoadMoney}
				options={{headerShown: false}}
			/>
			<Stack.Screen
				name='SendMoney'
				component={SendMoneyStack}
				options={{headerShown: false}}
			/>
		</Stack.Navigator>
  );
}

export default MainStack