import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';

function ChallengeItem({log}) {
    const {days, title, date} = log;

    return (
        <View style={styles.center}>
            <View style={styles.wrapper}>
                <Pressable 
                    style={styles.card}
                    android_ripple={{color:'#FAFAFA'}}
                >
                    <Text style={styles.days}>{days}</Text>
                    <Text style={styles.title}>{title}</Text>
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
        height: 150,
        borderRadius: 16,
        overflow: 'hidden',
    },
    card: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FBEBF1',
        width: 330,
        height: 150,
        borderRadius: 16,
    },
    days: {
        fontFamily: 'BMJUA_ttf',
        fontSize: 16,
        color: 'white',
        backgroundColor: '#FF6699',
        marginBottom: 10,
        paddingHorizontal: 10,
        paddingVertical: 4,
        borderRadius: 20,
    },
    title: {
        fontFamily: 'BMJUA_ttf',
        fontSize: 30,
        color: '#FF6699',
        marginBottom: 5,
    },
    date: {
        fontFamily: 'BMJUA_ttf',
        fontSize: 16,
        color: '#A6A6A6',
    }
});

export default ChallengeItem;