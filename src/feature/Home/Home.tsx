import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import store from '../../state/store';
import { logoutAction } from '../../state/slices/auth/auth';
import { firebaseSignOut } from '../../services/firebase';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* FIXME: adding logout action for development purposes */}
      <TouchableOpacity
        onPress={() => {
          firebaseSignOut();
          store.dispatch(logoutAction());
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
