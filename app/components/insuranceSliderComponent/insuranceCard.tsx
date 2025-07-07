import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Insurance } from './insurance';

const InsuranceCard: React.FC<Insurance> = ({ title, emoji, bgColor }) => {
  return (
    <View style={[styles.card, { backgroundColor: bgColor }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.emoji}>{emoji}</Text>
    </View>
  );
};

export default InsuranceCard;

const styles = StyleSheet.create({
  card: {
    width: 150,
    height: 200,
    borderRadius: 16,
    padding: 12,
    justifyContent: 'space-between',
    margin: 6,
  },
  title: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  emoji: {
    fontSize: 32,
    alignSelf: 'flex-end',
  },
});
