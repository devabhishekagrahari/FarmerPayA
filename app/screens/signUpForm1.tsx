import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const { width, height } = Dimensions.get('window');

const SignUpFormScreen1 = ({ navigation }: any) => {
  const [fullName, setFullName] = useState('');
  const [contact, setContact] = useState('');
  const [fatherName, setFatherName] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Sign Up</Text>
        <Text style={styles.subheading}>Create your account to continue</Text>
      </View>

      <View style={styles.formContainer}>
        {/* Full Name */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Enter Full Name</Text>
          <View style={styles.inputBox}>
            <Icon name="user" size={20} color="#C0C0C0" />
            <TextInput
              style={styles.input}
              placeholder="Enter your full name"
              placeholderTextColor="#C0C0C0"
              value={fullName}
              onChangeText={setFullName}
            />
          </View>
        </View>

        {/* Contact Number */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Enter Contact Number</Text>
          <View style={styles.inputBox}>
            <Icon name="phone" size={20} color="#C0C0C0" />
            <TextInput
              style={styles.input}
              placeholder="Enter your mobile number"
              placeholderTextColor="#C0C0C0"
              keyboardType="phone-pad"
              value={contact}
              onChangeText={setContact}
            />
          </View>
        </View>

        {/* Father's Name */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Enter Father’s Name</Text>
          <View style={styles.inputBox}>
            <Icon name="user-check" size={20} color="#C0C0C0" />
            <TextInput
              style={styles.input}
              placeholder="Enter your father's name"
              placeholderTextColor="#C0C0C0"
              value={fatherName}
              onChangeText={setFatherName}
            />
          </View>
        </View>
     </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={()=>{navigation.navigate('SignUpForm2')}}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>

      {/* Log In Footer */}
      <Text style={styles.footerText}>
        Already have an account?{' '}
        <Text
          style={styles.loginLink}
          onPress={() => navigation.navigate('Login')}
        >
          Log in
        </Text>
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 16,
    flex: 1,
    justifyContent:'space-evenly',
    backgroundColor:'#fff'
 
  },
  headerContainer: {
    marginBottom: 8,
  },
  heading: {
    fontSize: 32,
    fontWeight: '700',
    color: '#3F1976',
  },
  subheading: {
    fontSize: 16,
    color: '#4B5768',
    marginTop: 8,
  },
  formContainer: {
    gap: 24,
   marginBottom: 8,
  },
  inputGroup: {
    gap: 8,
 
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    color: 'rgba(18, 18, 18, 0.87)',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    height: 48,
    borderWidth: 2,
    borderColor: '#f2f2f2',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  input: {
    flex: 1,
    fontSize: 14,
    marginLeft: 8,
    color: '#000',
  },
  continueButton: {
    backgroundColor: '#54219D',
    height: 60,
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  footerText: {
    textAlign: 'center',
    marginBottom:32,
    fontSize: 16,
    color: '#000',
    fontWeight: '300',
  },
  loginLink: {
    color: '#28a745',
    fontWeight: '500',
  },
});

export default SignUpFormScreen1;
