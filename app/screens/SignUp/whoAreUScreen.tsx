// ChoosePersonaScreen.tsx
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Dimensions,
} from 'react-native';


import BankFarmer from '../../assets/images/BankFarmer.svg'


const WhoAreUScreen = ({navigation}:any) => {


  return (
    <SafeAreaView style={styles.container}>
      {/* SVG Icons */}
      <View style={styles.iconContainer}>
        <BankFarmer/>
      </View>
    
      {/* Heading */}
      <View style={styles.textBox}>
        <Text style={styles.title}>Get Started with FarmerPay</Text>
        <Text style={styles.subtitle}>Please select your user type to continue. </Text>
      </View>

      {/* Buttons */}
      <TouchableOpacity style={styles.primaryButton} onPress={()=>{navigation.navigate('AgentSignUp1')}}>
        <Text style={styles.primaryText}>I’m a Bank / CSC Agent</Text>
      </TouchableOpacity>

      <Text style={styles.orText}>OR</Text>

      <TouchableOpacity style={styles.secondaryButton} onPress={()=>{navigation.navigate('SignUpForm1')}}>
        <Text style={styles.secondaryText}>I’m a Farmer</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default WhoAreUScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFDFD',
    paddingHorizontal: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  textBox: {
    
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    paddingRight:12,
    fontWeight: '700',
    color: '#3F1976',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 14,
    fontWeight: '500',
    color: '#4B5768',
    marginTop: 12,
    textAlign: 'left',
  },
  primaryButton: {
    width: '90%',
    height: 60,
    backgroundColor: '#6929C4',
    borderRadius: 32,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 70,
  },
  primaryText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '500',
  },
  orText: {
    fontSize: 20,
    marginVertical: 12,
    fontWeight: '500',
    color: '#000',
  },
  secondaryButton: {
    width: '90%',
    height: 60,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: '#54219D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  secondaryText: {
    fontSize: 16,
    color: '#54219D',
    fontWeight: '500',
  },
});
