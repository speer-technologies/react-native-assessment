import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../home';
import ProfileScreen from '../profile';

const Stack = createStackNavigator();

function Routes() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerTitle: 'HOME',
        }}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerTitle: 'PROFILE',
        }}
      />
    </Stack.Navigator>
  );
}

export default Routes;
