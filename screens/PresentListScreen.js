import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ChallengeList from '../components/ChallengeList';

function PresentListScreen() {
    return (
        <ChallengeList />
    );
}
    
const styles = StyleSheet.create({
    block: {
    },
});
    
export default PresentListScreen;