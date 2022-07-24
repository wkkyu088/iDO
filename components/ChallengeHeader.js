import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

function ChallengeHeader({log}) {
    const {days, title, date, color} = log;

    return (
        <View style={[styles.center, styles.card]}>
            <LinearGradient 
                useAngle={true}
                angle={25}
                angleCenter={{x: 0.6, y: 0.5}}
                colors={[color, color+'1A']} 
                style={styles.days}>
                <Text style={styles.days_text}>{days}일</Text>
            </LinearGradient>
            <Text style={[styles.title, {color: color}]}>{title}</Text>
            <Text style={styles.date}>{date}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    center: {
        alignItems: 'center',
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        // borderColor: 'lightgray',
        // borderWidth: 1,
        paddingTop: 10,
        paddingBottom: 30,
        backgroundColor: '#FAFAFA',
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
        fontSize: 34,
        marginBottom: 8,
    },
    date: {
        fontFamily: 'BMJUA_ttf',
        fontSize: 18,
        color: '#9C9C9C',
    }
});

export default ChallengeHeader;