import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert, Clipboard } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface BankDetailsCardProps {
  bankName: string;
  accountSuffix: string;
  accountType: string;
  upiId: string;
  onManage: () => void;
}

const BankDetailsCard: React.FC<BankDetailsCardProps> = ({
  bankName,
  accountSuffix,
  accountType,
  upiId,
  onManage,
}) => {
  const copyUPI = () => {
    Clipboard.setString(upiId);
    Alert.alert('Copied', 'UPI ID copied to clipboard');
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Receiving Money In</Text>

      <View style={styles.bankRow}>
        <View style={styles.bankIconCircle}>
          <Icon name="bank" size={22} color="#ffffff" />
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.bankName}>{`${bankName} - ${accountSuffix}`}</Text>
          <Text style={styles.accountType}>{accountType}</Text>
        </View>
        <TouchableOpacity style={styles.manageBtn} onPress={onManage}>
          <Text style={styles.manageText}>Manage</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.upiRow}>
        <Text style={styles.upiLabel}>My UPI ID:</Text>
        <Text style={styles.upiId}>{upiId}</Text>
        <TouchableOpacity onPress={copyUPI}>
          <Icon name="content-copy" size={16} color="#6E6E6E" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
  borderRadius: 12,
  backgroundColor: '#F8F8F8',     // light grey for card (not screen)
  borderWidth: 1,
  borderColor: '#C0C0C0',
  padding: 16,
  shadowColor: 'transparent',     // remove shadow if unwanted
  elevation: 0,                   // no Android elevation
},
  title: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 12,
    color: '#333',
  },
  bankRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  bankIconCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#1976D2',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  bankName: {
    fontSize: 15,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  accountType: {
    fontSize: 12,
    color: '#777',
  },
  manageBtn: {
    backgroundColor: '#6C00FF',
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,
  },
  manageText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: '600',
  },
  upiRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: 6,
  },
  upiLabel: {
    fontSize: 13,
    color: '#6E6E6E',
  },
  upiId: {
    fontSize: 13,
    fontWeight: '500',
    color: '#000',
  },
});

export default BankDetailsCard;
