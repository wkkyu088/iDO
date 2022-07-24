import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import DrawerTab from './DrawerTab';
import ChallengeScreen from './ChallengeScreen';

const Stack = createNativeStackNavigator();

function RootStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="DrawerTab"
                component={DrawerTab}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Challenge"
                component={ChallengeScreen}
                options={{
                    title: '',
                    headerTitleStyle: {
                        lineHeight: 50,
                    },
                    headerStyle: {
                        backgroundColor: '#FAFAFA',
                        height: 70,
                    },
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                }}
            />
        </Stack.Navigator>
    );
}

export default RootStack;