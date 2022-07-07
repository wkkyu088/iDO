import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MainListScreen from './MainListScreen';
import PreviousListScreen from './PreviousListScreen';
import PresentListScreen from './PresentListScreen';
import SuccessListScreen from './SuccessListScreen';
import FailureListScreen from './FailureListScreen';

const Drawer = createDrawerNavigator();

function DrawerTab() {
    const header = {
        lineHeight: 30,
        fontSize: 25,
        height: 65,
    };

    return (
        <Drawer.Navigator
            initialRouteName="Main"
            drawerPosition="left"
            backBehavior="history"
        >
            <Drawer.Screen 
                name="Main" 
                component={MainListScreen} 
                options={{
                    title: '👀 전체 챌린지',
                    headerTitleStyle: {
                        lineHeight: header.lineHeight,
                        fontFamily: 'BMJUA_ttf',
                        fontSize: header.fontSize,
                        color: '#262626',
                    },
                    headerStyle: {
                        backgroundColor: '#FAFAFA',
                        height: header.height,
                    },
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                }}
            />
            <Drawer.Screen 
                name="Present" 
                component={PresentListScreen} 
                options={{
                    title: '⏳ 현재 챌린지',
                    headerTitleStyle: {
                        lineHeight: header.lineHeight,
                        fontFamily: 'BMJUA_ttf',
                        fontSize: header.fontSize,
                        color: '#262626',
                    },
                    headerStyle: {
                        backgroundColor: '#FAFAFA',
                        height: header.height,
                    },
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                }}
            />
            <Drawer.Screen 
                name="Previous" 
                component={PreviousListScreen} 
                options={{
                    title: '⌛ 지난 챌린지',
                    headerTitleStyle: {
                        lineHeight: header.lineHeight,
                        fontFamily: 'BMJUA_ttf',
                        fontSize: header.fontSize,
                        color: '#262626',
                    },
                    headerStyle: {
                        backgroundColor: '#FAFAFA',
                        height: header.height,
                    },
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                }}
            />
            <Drawer.Screen 
                name="Success" 
                component={SuccessListScreen} 
                options={{
                    title: '❗ 성공한 챌린지',
                    headerTitleStyle: {
                        lineHeight: header.lineHeight,
                        fontFamily: 'BMJUA_ttf',
                        fontSize: header.fontSize,
                        color: '#262626',
                    },
                    headerStyle: {
                        backgroundColor: '#FAFAFA',
                        height: header.height,
                    },
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                }}
            />
            <Drawer.Screen 
                name="Failure" 
                component={FailureListScreen} 
                options={{
                    title: '❓ 실패한 챌린지',
                    headerTitleStyle: {
                        lineHeight: header.lineHeight,
                        fontFamily: 'BMJUA_ttf',
                        fontSize: header.fontSize,
                        color: '#262626',
                    },
                    headerStyle: {
                        backgroundColor: '#FAFAFA',
                        height: header.height,
                    },
                    headerTitleAlign: 'center',
                    headerShadowVisible: false,
                }}
            />
        </Drawer.Navigator>
    );
}

export default DrawerTab;