import React from 'react'
import {NavigationContainer} from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from './Pages/App';
import SecondScreen from './Pages/SecondScreen';

const Stack = createNativeStackNavigator();
export default function Router() {

  const headerTitle = 'Android Telefon Öğretici'
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={App} options={{title: headerTitle, headerTitleStyle:{fontSize: 30}}}/>
            <Stack.Screen name='SecondScreen' component={SecondScreen} options={{title: null}}/>
        </Stack.Navigator>
    </NavigationContainer>
  )
}