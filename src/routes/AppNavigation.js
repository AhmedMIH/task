import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import ProductListScreen from '../screens/ProductListScreen'
import constant from '../common/constant'
import ProductDetailsScreen from '../screens/ProductDestailsScreen'

const AppNavigation = () => {
    const Stack = createNativeStackNavigator()
  return (
    <NavigationContainer>

        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen  component={ProductListScreen} name={constant.ProductListScreen}/>
            <Stack.Screen component={ProductDetailsScreen} name={constant.ProductDetailsScreen}/>

        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigation