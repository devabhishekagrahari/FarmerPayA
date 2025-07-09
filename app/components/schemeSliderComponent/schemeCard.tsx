import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { Scheme } from './scheme';

interface Props extends Scheme {}

const SchemeCard: React.FC<Props> = ({ title, subtitle, image, buttonText }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardContent}>    
        <View style={{height:'30%',width:'70%'}}>     
        <Text style={styles.cardTitle}>{title}</Text>
      </View> 
      <View style={{flexDirection:'row',flex:1,position:'relative',alignItems:'center'}}>       
         <View style={styles.textSection}>
          <Text style={styles.cardSubtitle}>{subtitle}</Text>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>{buttonText}</Text>
          </TouchableOpacity>
        </View>
       <View style={{width:'30%' , position:'relative',right:40,alignItems:'center'}}>
        <Image source={image} style={styles.cardImage} resizeMode="contain" />
        </View>
      </View>
      </View>
    </View>
  );
};

export default SchemeCard;

const styles = StyleSheet.create({
  card: {
    width: 355,
    height:220,
    borderRadius: 16,
    backgroundColor: '#1F3E29',
padding:6,
    marginRight: 5,
  },
  cardContent: {
    flexDirection: 'column',
    width:340,
    height:200,
    margin:10
  },
  textSection: {
    flex: 1,
    width:'50%',
    paddingRight: 12,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 8,
    lineHeight:20
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#F7F7F7',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#2B603A',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    alignSelf: 'flex-start',
  },
  buttonText: {
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
  cardImage: {
    width: 193,
    height: 132,
  },
});
