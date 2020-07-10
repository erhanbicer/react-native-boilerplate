import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { NavigationContainer } from '@react-navigation/native';

const RootStack = createStackNavigator();

function RootNavigator() {
   return (
      <NavigationContainer>
         <RootStack.Navigator>
            <RootStack.Screen name="Home" component={Home} />
         </RootStack.Navigator>
      </NavigationContainer>
   );
}

export default RootNavigator;
