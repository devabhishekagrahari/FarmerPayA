import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

const ServiceCard = ({ title, icon }: { title: string; icon: any }) => (
  <TouchableOpacity style={styles.card}>
    <Image source={icon} style={styles.icon} />
    <Text style={styles.label}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    width: '45%',
    backgroundColor: '#f4efff',
    borderRadius: 12,
    padding: 16,
    margin: 8,
    alignItems: 'center',
  },
  icon: { width: 40, height: 40, marginBottom: 8 , resizeMode:'stretch'},
  label: { fontWeight: '500' },
});

export default ServiceCard;
