import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Import our newly created screens
import LoginScreen from './src/screens/LoginScreen';
import MapHomeScreen from './src/screens/MapHomeScreen';

// Initialize the Stack Navigator
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    // NavigationContainer manages our app state and links the navigators to the app environment
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Login"
        // Global screen options for a cleaner UI
        screenOptions={{
          headerShown: false, // We hide the default header for a custom design
        }}
      >
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
        />
        <Stack.Screen 
          name="MapHome" 
          component={MapHomeScreen} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}