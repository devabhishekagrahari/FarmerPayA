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

import FarmerCard from '../../components/profile/FarmerCard';
import LivelihoodScoreCard from '../../components/profile/LivelihoodScoreCard';
import BankDetailsCard from '../../components/profile/BankDetailsCard';

const ProfileScreen = ({ navigation }: any) => {
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
        {/* <FarmerCard
          name="ABC Kumar"
          role="Crop Farmer"
          location="Nashik"
          id="FX - 1000256"
          onAddDetails={() => console.log('Navigate to add details')}
        /> */}

        <LivelihoodScoreCard />

        <BankDetailsCard
          bankName="State Bank of India"
          accountSuffix="1000"
          accountType="Savings Account"
          upiId="animesh@ybl"
          onManage={() => console.log('Manage bank account')}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding:16,gap:20 // <-- pure white screen background
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 14,
    paddingBottom: 8,
    backgroundColor: '#FFFFFF', // <-- match background
    borderBottomWidth: 1,       // optional: subtle border like Figma
    borderBottomColor: '#FFFFFF',
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
    paddingBottom: 20,
    paddingTop: 10,
    backgroundColor: '#FFFFFF', // <-- ensure scroll area is also white
  },
});

export default ProfileScreen;
