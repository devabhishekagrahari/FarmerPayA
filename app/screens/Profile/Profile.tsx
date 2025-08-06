import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FarmerCard from '../../components/Profile/FarmerCard';
import LivelihoodScoreCard from '../../components/Profile/LivelihoodScoreCard';
import BankDetailsCard from '../../components/Profile/BankDetailsCard';
import CheckBalanceCard from '../../components/Profile/checkBalance';
import SettingsCompo from '../../components/Profile/settings';

const ProfileScreenz = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />

      {/* Top Bar */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Profile</Text>
        <TouchableOpacity style={styles.helpIcon}>
          <Icon name="help-circle-outline" size={24} color="#250E45" />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <FarmerCard
          name="ABC Kumar"
          role="Crop Farmer"
          location="Nashik"
          id="FX - 1000256"
          onAddDetails={() => console.log('Navigate to add details')}
        />

        <LivelihoodScoreCard />

        <BankDetailsCard
          bankName="State Bank of India"
          accountSuffix="1000"
          accountType="Savings Account"
          upiId="animesh@ybl"
          onManage={() => console.log('Manage bank account')}
        />
        
        <CheckBalanceCard/>
        <SettingsCompo/>
        <Text style={{fontSize:30, fontWeight:600,color:'#D1BDED'}}>Built with ❤️ for Indian Agriculture</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection:'column',
    backgroundColor: '#FFFFFF',
    padding:16,
    paddingTop:8
    },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
    //backgroundColor: '#FFFFFF', // <-- match background
    // optional: subtle border like Figma
    //elevation:2
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#1A1A1A',
  },
  helpIcon: {
    padding: 6,
  },
  scrollContainer: {
    bottom:20,
    paddingBottom:100,
    paddingTop:25,
    flexDirection:'column',
    gap:20,
    backgroundColor: '#FFFFFF', // <-- ensure scroll area is also white
  },
});

export default ProfileScreenz;
