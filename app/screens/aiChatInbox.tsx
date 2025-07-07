// screens/MyNewScreen.tsx
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomTopBar from '../components/customTopBar';

const MyNewScreen = () => {
  return (
    <View style={styles.container}>
      <CustomTopBar onTogglePress={() => console.log('Toggle pressed')} />
      <View style={styles.content}>
        <Text>This is a new screen with a custom top bar.</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 16,
  },
});

export default MyNewScreen;
