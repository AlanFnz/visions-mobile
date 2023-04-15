import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import store from '../../state/store';
import { logoutAction } from '../../state/slices/auth/auth';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* FIXME: adding logout action for development purposes */}
      <TouchableOpacity onPress={() => store.dispatch(logoutAction())}>
        <Text>Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default Home;
