import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function ChallengeBody({log, color}) {
    const {count, done, today, upcoming} = log;

    const onPress = () => {

    };

    return (
        <View style={styles.wrapper}>
            {
                upcoming ?
                <View style={[styles.circle, styles.upcoming]}>
                    <Text style={[styles.text, {color: '#BFBFBF'}]}>{count}</Text>
                </View>
                : today ? 
                <Pressable 
                    android_ripple={{color:'#D6D6D6'}}
                    onPress={onPress}
                    style={[styles.circle, styles.today, {borderColor: color,}]}>
                    <Text style={[styles.text, {color: color}]}>{count}</Text>
                </Pressable>
                : done ?
                <LinearGradient 
                    useAngle={true}
                    angle={25}
                    angleCenter={{x: 0.6, y: 0.5}}
                    colors={[color, color+'1A']} 
                    style={styles.circle}>
                </LinearGradient>
                :
                <LinearGradient 
                    useAngle={true}
                    angle={25}
                    angleCenter={{x: 0.6, y: 0.5}}
                    colors={['#AEAEAE', '#DFDFDF']} 
                    style={styles.circle}>
                    <Text style={styles.text}>{count}</Text>
                </LinearGradient>
            }
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        width: 55,
        height: 55,
        borderRadius: 30,
        margin: 5,
        overflow: 'hidden'
    },
    circle: {
        width: 55,
        height: 55,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    upcoming: {
        backgroundColor: '#F0F0F0',
    },
    today: {
        backgroundColor: '#FAFAFA',
        borderWidth: 1,
        borderStyle: 'dashed',
    },
    text: {
        fontFamily: 'BMJUA_ttf',
        fontSize: 22,
        color: '#FAFAFA',
    },
});

export default ChallengeBody;