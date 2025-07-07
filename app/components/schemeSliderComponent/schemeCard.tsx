import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { Scheme } from './scheme';

interface Props extends Scheme {}

const SchemeCard: React.FC<Props> = ({ title, subtitle, image, buttonText }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <View style={styles.textSection}>
          <Text style={styles.cardTitle}>{title}</Text>
          <Text style={styles.cardSubtitle}>{subtitle}</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>

        <Image source={image} style={styles.cardImage} resizeMode="contain" />
      </View>
    </View>
  );
};

export default SchemeCard;

const styles = StyleSheet.create({
  card: {
    width: 320,
    borderRadius: 16,
    backgroundColor: '#153D2B',
    padding: 16,
    marginRight: 12,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSection: {
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#D3D3D3',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#285C45',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 14,
  },
  cardImage: {
    width: 80,
    height: 80,
    marginLeft: 12,
  },
});
