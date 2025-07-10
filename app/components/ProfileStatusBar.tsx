import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CircularProgress from './circularBar';
import LinearGradient from 'react-native-linear-gradient';

const ProfileStatusCard = () => {
  const progress = 70;

  return (

    <View style={styles.container}>
      <Text style={styles.title}>Onboarding</Text>
      
          <LinearGradient
            colors={['#E9EBFC', '#F5F4FA', '#E9EBFC']}
            locations={[0, 0.5029, 1]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.card}
          >

        <View style={styles.textSection}>
          <Text style={styles.statusTitle}>
            Profile Status: {progress}% Complete
          </Text>
          <Text style={styles.description}>
            Please complete your profile to gain full access to all services
          </Text>
        </View>

        <CircularProgress progress={progress} />
 
      </LinearGradient>
    </View>
    
  );
};

export default ProfileStatusCard;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  title: { 
    fontWeight:'600' ,
    fontSize: 20,
    color: '#1F077A', 
    marginBottom: 12,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    aspectRatio:3.5090,
    justifyContent: 'space-between',
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
    color: '#1F077A',
    marginBottom: 4,
  },
  description: {
    fontSize: 12,
    color: '#1F077AB2',
  },
});
