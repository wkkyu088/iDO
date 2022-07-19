import React from 'react';
import {Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import LinearGradient from 'react-native-linear-gradient';

function FloatingButton({onPress, bottom, icon, size}) {
    return (
        <LinearGradient 
            useAngle={true}
            angle={45}
            angleCenter={{x: 0.5, y: 0.5}}
            colors={['#7DA8FF', '#CCDCFD']} 
            style={[styles.wrapper, bottom]}>
            <Pressable
                style={styles.button}
                android_ripple={{color:'#FAFAFA'}}
                onPress={onPress}
            >
                <Icon name={icon} size={size} style={styles.icon} />
            </Pressable>
        </LinearGradient>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 30,
        left: '50%',
        transform: [
          {
            translateX: -30,
          },
        ],
        width: 60,
        height: 60,
        borderRadius: 25,
        elevation: 5,
        overflow: 'hidden',
        zIndex: 10,
    },
    button: {
        width: 60,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        color: 'white',
    },
})

export default FloatingButton;