import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface MessageOptionProps {
  label: string;
  onPress: () => void;
}

const MessageOption: React.FC<MessageOptionProps> = ({ label, onPress }) => {
  return (    
  <LinearGradient
      colors={['#FF0000', '#FFA500']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 2 }}
      style={styles.gradientBorder}
    >
    <TouchableOpacity style={styles.option} onPress={onPress}>
      <Text style={styles.optionText}>{label}</Text>
    </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradientBorder: {
    padding: 0.5, // thickness of the border
    borderRadius: 24,
   
    margin:4
    },
  option: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 24,
    borderWidth: 1,
    borderColor: '#FF0000',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    elevation: 2,
  },
  optionText: {
    color: '#333333',
    fontSize: 10,
  },
});

export default MessageOption;
