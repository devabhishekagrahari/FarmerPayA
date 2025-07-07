import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { DetailCardProps }  from './detail';


const DetailCard: React.FC<DetailCardProps> = ({ title, subtitle, buttonLabel, image, onPress }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <Image source={image} style={styles.image} />
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: 220,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginRight: 16,
    elevation: 4,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#24025E',
  },
  subtitle: {
    fontSize: 13,
    color: '#555',
    marginVertical: 8,
  },
  image: {
    width: 60,
    height: 60,
    alignSelf: 'center',
    marginVertical: 12,
  },
  button: {
    backgroundColor: '#24025E',
    paddingVertical: 8,
    borderRadius: 8,
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});

export default DetailCard;
