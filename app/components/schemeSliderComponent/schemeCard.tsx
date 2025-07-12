import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageSourcePropType, Dimensions } from 'react-native';
import { Scheme } from './scheme';
const {width,height}=Dimensions.get('window');
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
       <View style={{width:'30%' , position:'relative',right:30,alignItems:'center'}}>
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
    width: width*0.9,
    aspectRatio:1.62,
    borderRadius: 16,
    backgroundColor: '#1F3E29',
padding:6,
    marginRight: 5,
  },
  cardContent: {
    flexDirection: 'column',
    width:"100%",
    height:"100%",
    padding:10
  },
  textSection: {
    flex: 1,
    width:'40%',
    paddingRight: 14,
  },
  cardTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#ffffff',
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
    width: 180,
    height: 130,
    resizeMode:'contain',
    alignSelf:'center'
  },
});
