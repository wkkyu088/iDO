import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerTab from './DrawerTab';

const Stack = createNativeStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="DrawerTab"
                component={DrawerTab}
                options={{headerShown: false}}
            />
        </Stack.Navigator>
    );
}

export default RootStack;