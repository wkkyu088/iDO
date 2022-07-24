import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';

function SettingScreen() {
    return (
        <View style={styles.block}>
            <Text>텅</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flex: 1,
        backgroundColor: '#FAFAFA',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default SettingScreen;