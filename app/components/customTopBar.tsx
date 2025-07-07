// components/CustomTopBar.tsx
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

const CustomTopBar = ({ onTogglePress }: { onTogglePress?: () => void }) => {
  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Image
          source={require('../assets/images/Logo.png')}
          style={styles.logo}
        />
        <Text style={styles.title}>Farme₹Pay</Text>
      </View>
      <TouchableOpacity onPress={onTogglePress}>
        <Image
          source={require('../assets/images/toggleIcon.png')} // Replace with your toggle icon path
          style={styles.toggleIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 56,
    paddingHorizontal: 16,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 4,
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
    marginRight: 8,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  toggleIcon: {
    width: 24,
    height: 24,
    tintColor: '#000',
  },
});

export default CustomTopBar;
