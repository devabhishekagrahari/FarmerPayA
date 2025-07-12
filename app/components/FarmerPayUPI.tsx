import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Dimensions,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AdSlider from './AdSlider/AdCardSlider';

const { width } = Dimensions.get('window');

const UPI_OPTIONS = [
  { label: 'My QR', icon: require('../assets/images/qr.png') },
  { label: 'Recharge', icon: require('../assets/images/recharge.png') },
  { label: 'Electricity', icon: require('../assets/images/electricity.png') },
  { label: 'Bill Pay', icon: require('../assets/images/billPay.png') },
];

const FarmerPayUPI = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>FarmerPay UPI</Text>

      <View style={styles.optionsRow}>
        {UPI_OPTIONS.map((item, index) => (
          <Pressable key={index}  onPress={() => {}}>
            <Image source={item.icon} style={styles.optionBox} resizeMode="contain" />
            <Text style={styles.label}>{item.label}</Text>
          </Pressable>
        ))}
      </View>    
      <AdSlider/>
    </View>
  );
};

export default FarmerPayUPI;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    backgroundColor: '#fff',
    marginBottom:24,
    flex: 1,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 8,
    color:'#1F077A',
    marginBottom: 12,
  },
  optionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
    marginBottom: 4,
  },
  optionBox: {
    width: width * 0.42 ,
    height: 60,
    aspectRatio: 1.1,
    backgroundColor: '#4506A00D',
    borderColor: '#4506A026',
    borderWidth: 1,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  label: {
    fontSize: 10,
    textAlign: 'center',
    color: '#4506A0',
    fontWeight: '500',
    marginTop:6
  },
  banner: {
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    width: '100%',
  },
  bannerLeft: {
    flex: 1,
    paddingRight: 12,
  },
  bannerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  bannerSubtitle: {
    color: '#ddd',
    fontSize: 13,
  },
  bannerImage: {
    width: 70,
    height: 70,
  },
});
