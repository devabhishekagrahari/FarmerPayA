import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { DetailCardProps }  from './detail';

const{width,height}=Dimensions.get('window')

const DetailCard: React.FC<DetailCardProps> = ({ title, subtitle, buttonLabel, image, onPress }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>

      <View style={{height:'75%' , flexDirection: 'row'}}>
      <View style={{width:'65%'}}>
      <Text style={styles.subtitle}>{subtitle}</Text>

      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{buttonLabel}</Text>
      </TouchableOpacity>
      </View> 
      <View style={{width:'40%', alignItems: 'flex-end',justifyContent: 'center'}}>    
      <Image source={image} style={styles.image} />
      </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: width*0.7,
    aspectRatio:1.5,
    backgroundColor: '#FFFDFC',
    borderRadius: 16,
    padding: 16,
    paddingBottom:4,
    marginRight: 16,
    shadowColor: '#FFFDFC',
    elevation:4,
    flexDirection: 'column',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1F077A',
    height:'15%'
  },
  subtitle: {
    flex:1,
    fontSize: 12,
    width:'100%',
    color: '#1F077A99',
    marginVertical: 8,
  },
  image: {
    width: 105,
    height: 115,
    resizeMode: 'contain',
  },
  button: {
    backgroundColor: '#1F077A',
    width:'auto',
    padding:6,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',

  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize:12
  },
});

export default DetailCard;
