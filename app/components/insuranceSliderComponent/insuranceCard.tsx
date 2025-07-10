import React from 'react';
import { View, Text, StyleSheet, Image , Dimensions } from 'react-native';
import { Insurance } from './insurance';
import LinearGradient from 'react-native-linear-gradient';
const{width, height}=Dimensions.get('window');
const InsuranceCard: React.FC<Insurance> = ({ title, emojiImage, bgColor1 ,bgColor2 , titleColor}) => {
  return (
    <View style={[styles.card]}>
      <LinearGradient
        colors={[bgColor1, bgColor2]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.card}
      > 
      <Text style={[styles.title, {color:titleColor || '#FFFFFF'}]}>{title}</Text>
      <Image source={emojiImage} style={styles.emoji}/></LinearGradient>
    </View>
  );
};

export default InsuranceCard;

const styles = StyleSheet.create({
  card: {
    width: (width-48)/2,
    aspectRatio:0.9303,
    borderRadius: 16,
    padding: 12,
    marginRight:6,
    flexDirection:'column',
    justifyContent: 'space-between',

  },
  title: {
    fontSize: 12,
    fontFamily:'Inter',
    fontWeight: 'bold',
  },
  emoji: {
    fontSize: 32,
    alignSelf: 'flex-end',
  },
});
