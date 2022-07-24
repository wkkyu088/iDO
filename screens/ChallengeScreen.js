import React, {useContext} from 'react';
import {FlatList, View, Text, StyleSheet, StatusBar} from 'react-native';
import CreateChallenge from '../components/CreateChallenge';
import ChallengeHeader from '../components/ChallengeHeader';
import ChallengeBody from '../components/ChallengeBody';
import ChallengeContext from '../contexts/ChallengeContext';

function ChallengeScreen({route}) {
    const log = route.params?.log;
    const {dones} = useContext(ChallengeContext);

    return (
        <>
            <StatusBar backgroundColor="#FAFAFA" barStyle="dark-content" />
            <View style={styles.container}>
                <FlatList
                    style={styles.block}
                    data = {dones}
                    renderItem={({item}) => <ChallengeBody log={item} color={log.color} />}
                    keyExtractor={(item) => item.id}
                    numColumns={5}
                    ListHeaderComponent={
                        <ChallengeHeader log={log} />
                    }
                    contentContainerStyle={{ paddingBottom: 100 }}
                />
            </View>
            <CreateChallenge />
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#FAFAFA',
    },
    block: {
        flex: 1,
    },
});

export default ChallengeScreen;