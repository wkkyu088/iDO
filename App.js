import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

function App() {
  return (
    <View style={styles.block}>
      <Text style={styles.text}>Start Now 🤩</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontFamily: 'BMJUA_ttf',
    fontSize: 25,
    color: '#7DA8FF',
  },
});

export default App;