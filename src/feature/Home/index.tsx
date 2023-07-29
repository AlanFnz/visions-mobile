import React from 'react';
import { Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { logout } from '../../state/slices/authSlice';
import { firebaseSignOut } from '../../services/firebase';
import store from '../../state/store';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* FIXME: adding logout action for development purposes */}
      <TouchableOpacity
        onPress={() => {
          firebaseSignOut();
          store.dispatch(logout());
        }}
      >
        <Text>Home</Text>
      </TouchableOpacity>
    </SafeAreaView>
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
