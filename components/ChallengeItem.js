import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function ChallengeItem({log}) {
    const {days, title, date, backgroundColor, color} = log;

    return (
        <View style={styles.center}>
            <View style={styles.wrapper}>
                <Pressable 
                    style={[styles.card, {backgroundColor: backgroundColor}]}
                    android_ripple={{color:'#FAFAFA'}}
                >   
                    <LinearGradient 
                        useAngle={true}
                        angle={25}
                        angleCenter={{x: 0.6, y: 0.5}}
                        colors={[color, backgroundColor]} 
                        style={styles.days}>
                        <Text style={styles.days_text}>{days}</Text>
                    </LinearGradient>
                    <Text style={[styles.title, {color: color}]}>{title}</Text>
                    <Text style={styles.date}>{date}</Text>
                </Pressable>            
            </View>
        </View>
    );
}
    
const styles = StyleSheet.create({
    center: {
        marginTop: 15,
        alignItems: 'center',
    },
    wrapper: {
        width: 330,
        height: 155,
        borderRadius: 20,
        overflow: 'hidden',
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 330,
        height: 155,
    },
    days: {
        marginBottom: 14,
        paddingHorizontal: 10,
        paddingVertical: 5,
        borderRadius: 20,
    },
    days_text: {
        fontFamily: 'BMJUA_ttf',
        fontSize: 16,
        color: 'white',
    },
    title: {
        fontFamily: 'BMJUA_ttf',
        fontSize: 30,
        marginBottom: 8,
    },
    date: {
        fontFamily: 'BMJUA_ttf',
        fontSize: 16,
        color: '#9C9C9C',
    }
});

export default ChallengeItem;