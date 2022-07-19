import React, { useContext } from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import ChallengeList from '../components/ChallengeList';
import LogContext from '../contexts/LogContext';
import CreateChallenge from '../components/CreateChallenge';

function SuccessListScreen() {
    const {logs} = useContext(LogContext);
    return (
        <>
            <StatusBar backgroundColor="#FAFAFA" barStyle="dark-content" />
            <View style={styles.block}>
                <ChallengeList logs={logs} />
                <CreateChallenge />
            </View>
        </>
    );
}
    
const styles = StyleSheet.create({
    block: {
        flex: 1,
        backgroundColor: '#FAFAFA',
    },
});
    
export default SuccessListScreen;