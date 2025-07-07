// FarmerPayUPI.js
import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

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
     <Pressable key={`${item.label}-${index}`}  onPress={()=>{}} style={styles.option}>
            <Image source={item.icon} style={styles.icon} />
            <Text style={styles.label}>{item.label}</Text>
      </Pressable>
        ))}
      </View>

      {/* Seed Loan Banner */}
      <LinearGradient
        colors={['#00002E', '#2E0B8C']}
        style={styles.banner}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
      >
        <View style={styles.bannerLeft}>
          <Text style={styles.bannerTitle}>Seed Loans up to ₹10,000 ➜</Text>
          <Text style={styles.bannerSubtitle}>
            Buy seeds now, pay later with easy EMI options
          </Text>
        </View>
        <Image
          source={require('../assets/images/loans.png')}
          style={styles.bannerImage}
          resizeMode="contain"
        />
      </LinearGradient>
    </View>
  );
};

export default FarmerPayUPI;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#fff',
  },
  heading: {
    fontSize: 20,
    fontWeight: '700',
    color: '#2E0B8C',
    marginBottom: 16,
  },
  optionsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  option: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 85,
    height: 100,
    marginBottom: 16,
    padding:5,
    backgroundColor: 'rgba(69, 6, 160, 0.05)',
    borderColor: 'rgba(69, 6, 160, 0.15)',
    borderWidth: 1,
    borderRadius: 12,

  },
  icon: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  label: {
    fontSize: 12,
    textAlign: 'center',
    color: '#4506A0',
    fontWeight: '500',
  },
  banner: {
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  bannerLeft: {
    flex: 1,
  },
  bannerTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  bannerSubtitle: {
    color: '#ddd',
    fontSize: 12,
  },
  bannerImage: {
    width: 60,
    height: 60,
    marginLeft: 12,
  },
});
