import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { TouchableOpacity, View } from 'react-native'
import HomeScreen from './HomeScreen'
import PaymentScreen from './PaymentScreen'
import MoreScreen from './MoreScreen'
import colors from '../colors'
import { Entypo, FontAwesome5 } from '@expo/vector-icons';
import { CommonActions } from '@react-navigation/native';
import BottomSheet from '@gorhom/bottom-sheet'
import { useRef } from 'react'

const Tab = createBottomTabNavigator()

const HomeTabs = ({ navigation }) => {
  
  // Remove the pin route from the stack
  // navigation.dispatch(state => {
  //   const routes = state.routes.filter(r => r.name !== 'Pin');
  //   return CommonActions.reset({
  //     ...state,
  //     routes,
  //     index: routes.length - 1,
  //   });
  // });

  // const bottomSheetRef = useRef()

  return (<HomeScreen />)

  return (
    <>
      <Tab.Navigator
        backBehavior='history'
        screenOptions={{
          tabBarActiveTintColor: colors.primary,
          tabBarStyle: {paddingBottom: 2}
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Home',
            tabBarLabelStyle: {fontSize: 11},
            tabBarIcon: ({ color, size }) => (
              <Entypo name="home" color={color} size={size} />
            ),
            tabBarButton: props => <TouchableOpacity {...props} />
          }}
        />
        <Tab.Screen
          name="Payments"
          component={PaymentScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'Payments',
            tabBarLabelStyle: {fontSize: 11},
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="money-bill" color={color} size={size} />
            ),
            tabBarButton: props => <TouchableOpacity {...props} />
          }}
        />
        <Tab.Screen
          name="More"
          component={MoreScreen}
          options={{
            headerShown: false,
            tabBarLabel: 'More',
            tabBarLabelStyle: {fontSize: 11},
            tabBarIcon: ({ color, size }) => (
              <FontAwesome5 name="bars" color={color} size={size} />
            ),
            tabBarButton: props => <TouchableOpacity {...props} />
          }}
        />
      </Tab.Navigator>
  </>
  )
}

export default HomeTabs