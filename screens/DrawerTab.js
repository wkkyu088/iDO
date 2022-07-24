import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import {createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from '@react-navigation/drawer';
import MainListScreen from './MainListScreen';
import PreviousListScreen from './PreviousListScreen';
import PresentListScreen from './PresentListScreen';
import SuccessListScreen from './SuccessListScreen';
import FailureListScreen from './FailureListScreen';
import SettingScreen from './SettingScreen';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Drawer = createDrawerNavigator();

const CustomDrawer = props => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <Pressable
                    style={{
                        padding: 10,
                        marginTop: 5,
                    }}
                    onPress={() => props.navigation.navigate('Setting')}
                >
                    <Icon name="settings" size={25} color="#262626" />
                </Pressable>
                <View
                    style={{
                      padding: 20,
                      marginTop: 5,
                    }}
                >
                    <Text 
                        style={{
                            fontFamily:'BMJUA_ttf', 
                            fontSize: 32,
                            color: '#93B4F5',
                        }}
                    >규진</Text>
                    <Text
                        style={{
                            fontFamily:'BMJUA_ttf', 
                            fontSize: 32,
                            color: '#262626',
                            lineHeight: 45
                        }}
                    >나도할수있다 😎</Text>
                </View>
                <Pressable 
                    style={styles.drawerItem}
                    onPress={() => props.navigation.navigate('Main')}>
                    <Text style={styles.drawerTitle}>👀 전체 챌린지</Text>
                </Pressable>
                <Pressable 
                    style={styles.drawerItem}
                    onPress={() => props.navigation.navigate('Present')}>
                    <Text style={styles.drawerTitle}>⏳ 현재 챌린지</Text>
                </Pressable>
                <Pressable 
                    style={styles.drawerItem}
                    onPress={() => props.navigation.navigate('Previous')}>
                    <Text style={styles.drawerTitle}>⌛ 지난 챌린지</Text>
                </Pressable>
                <Pressable 
                    style={styles.drawerItem}
                    onPress={() => props.navigation.navigate('Success')}>
                    <Text style={styles.drawerTitle}>❗ 성공한 챌린지</Text>
                </Pressable>
                <Pressable 
                    style={styles.drawerItem}
                    onPress={() => props.navigation.navigate('Failure')}>
                    <Text style={styles.drawerTitle}>❓ 실패한 챌린지</Text>
                </Pressable>
            </DrawerContentScrollView>
        </View>
    );
};

function DrawerTab() {
    const header = {
        lineHeight: 50,
        fontSize: 28,
        height: 70,
    };

    return (
        <Drawer.Navigator
            initialRouteName="Main"
            drawerPosition="left"
            backBehavior="history"
            drawerContent={props => <CustomDrawer {...props} /> }
            screenOptions={{
                drawerStyle: {
                  backgroundColor: '#FDFDFD',
                  width: 255,
                },
            }}
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
            <Drawer.Screen 
                name="Setting" 
                component={SettingScreen} 
                options={{
                    title: '설정',
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

const styles = StyleSheet.create({
    drawerItem: {
        marginHorizontal: 20,
        paddingVertical: 13,
        borderTopColor: '#BFBFBF',
        borderTopWidth: 0.6,
        borderStyle: 'dotted'
    },
    drawerTitle: {
        color: '#262626',
        fontFamily: 'BMJUA_ttf',
        fontSize: 23,
        lineHeight: 35,
        marginHorizontal: 5,
    }
})

export default DrawerTab;