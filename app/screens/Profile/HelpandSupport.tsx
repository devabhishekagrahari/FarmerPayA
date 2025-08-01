import React from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// SVGs
import AddQuery from '../../assets/images/Profile/addquery.svg';
import AccountKYC from '../../assets/images/Profile/accountkyc.svg';
import UPI from '../../assets/images/Profile/upi.svg';
import MoneyTransfer from '../../assets/images/Profile/moneytransfer.svg';
import RechargeBills from '../../assets/images/Profile/rechargebills.svg';
import TrackBank from '../../assets/images/Profile/trackbank.svg';
import Insurance from '../../assets/images/Profile/insurance.svg';
import BBPS from '../../assets/images/Profile/bbps.svg';
import Merchant from '../../assets/images/Profile/merchant.svg';
import Fastag from '../../assets/images/Profile/fastag.svg';
import CreditCard from '../../assets/images/Profile/creditcard.svg';
import LoanEMI from '../../assets/images/Profile/loanemi.svg';

const screenWidth = Dimensions.get('window').width;

const categories = [
  { label: 'Add New Query', Icon: AddQuery },
  { label: 'My Account & KYC', Icon: AccountKYC },
  { label: 'UPI', Icon: UPI },
  { label: 'Money Transfer', Icon: MoneyTransfer },
  { label: 'Recharge & Bills', Icon: RechargeBills },
  { label: 'Track Bank Account', Icon: TrackBank },
  { label: 'Insurance', Icon: Insurance },
  { label: 'BBPS', Icon: BBPS },
  { label: 'Merchant Payments', Icon: Merchant },
  { label: 'Fastag', Icon: Fastag },
  { label: 'Credit Cards', Icon: CreditCard },
  { label: 'Loan EMI', Icon: LoanEMI },
];

const HelpAndSupport = () => {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerText}>Help and Support</Text>
        <TouchableOpacity>
          <Icon name="dots-vertical" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.card}>
          {/* Search Bar */}
          <TextInput
            style={styles.searchInput}
            placeholder="Search category"
            placeholderTextColor="#888"
          />

          {/* Grid */}
          <View style={styles.grid}>
            {categories.map((item, index) => {
              const SvgIcon = item.Icon;
              return (
                <TouchableOpacity key={index} style={styles.tile}>
                  <SvgIcon width={40} height={40} />
                  <Text style={styles.tileText}>{item.label}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default HelpAndSupport;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFE6F0',
  },
  header: {
    backgroundColor: '#6a1b9a',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  scrollContent: {
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  searchInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  tile: {
    width: (screenWidth - 64) / 3,
    alignItems: 'center',
    marginBottom: 20,
  },
  tileText: {
    marginTop: 8,
    textAlign: 'center',
    fontSize: 12,
    color: '#333',
  },
});
