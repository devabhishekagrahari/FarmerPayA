import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CircularProgress from './circularBar';

const ProfileStatusCard = () => {
  const progress = 70;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Onboarding</Text>

      <View style={styles.card}>
        <View style={styles.textSection}>
          <Text style={styles.statusTitle}>
            Profile Status: {progress}% Complete
          </Text>
          <Text style={styles.description}>
            Please complete your profile to gain full access to all services
          </Text>
        </View>

        <CircularProgress progress={progress} />
      </View>
    </View>
  );
};

export default ProfileStatusCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginTop: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2E0B8C',
    marginBottom: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#F8F6FD',
    borderRadius: 16,
    padding: 16,
    elevation: 1,
  },
  textSection: {
    flex: 1,
    paddingRight: 12,
  },
  statusTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#2E0B8C',
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    color: '#6B6B8C',
  },
});
