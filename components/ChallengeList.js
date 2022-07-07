import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ChallengeItem from '../components/ChallengeItem';

function ChallengeList({logs}) {
    return (
        <FlatList 
            data={logs}
            style={styles.block}
            renderItem={({item}) => <ChallengeItem log={item} />}
            contentContainerStyle={{ paddingBottom: 20 }}
        >
        </FlatList>
    );
}
    
const styles = StyleSheet.create({
    block: {
        flex: 1,
    },
});


export default ChallengeList;