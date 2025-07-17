import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import BackArrow from '../assets/images/back-arrow.svg';
import Updates from '../components/NotificationScreen/Updates';
import Transactions from '../components/NotificationScreen/Transactions';

export default function NotificationScreen({ navigation }: any) {
  const [activeTab, setActiveTab] = useState<'updates' | 'transactions'>('updates');

  return (
    <View style={styles.container}>
      {/* Header */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <BackArrow color="#54219D" />
      </TouchableOpacity>
      <Text style={styles.header}>Notifications</Text>

      {/* Tabs */}
      <View style={styles.tabs}>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'updates' && styles.activeTab]}
          onPress={() => setActiveTab('updates')}
        >
          <Text style={[styles.tabText, activeTab === 'updates' && styles.activeText]}>Updates</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, activeTab === 'transactions' && styles.activeTab]}
          onPress={() => setActiveTab('transactions')}
        >
          <Text style={[styles.tabText, activeTab === 'transactions' && styles.activeText]}>Transactions</Text>
        </TouchableOpacity>
      </View>

      {/* Content */}
      {activeTab === 'updates' ? <Updates /> : <Transactions />}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#FFF' },
  backButton: { marginBottom: 16 },
  header: { fontSize: 20, fontWeight: 'bold', color: '#3F1976', marginBottom: 16 },
  tabs: {
    flexDirection: 'row',
    backgroundColor: '#F3F3F3',
    borderRadius: 10,
    marginBottom: 16,
  },
  tab: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 10,
  },
  activeTab: {
    backgroundColor: '#EDE5FF',
  },
  tabText: {
    fontSize: 14,
    color: '#999',
  },
  activeText: {
    color: '#54219D',
    fontWeight: 'bold',
  },
});
