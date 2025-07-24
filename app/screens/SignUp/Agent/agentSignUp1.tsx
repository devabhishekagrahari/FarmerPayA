import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import ArrowBack from '../../../assets/images/ArrowBack.svg';
import BankIcon from '../../../assets/images/BankIcon.svg';
import { RouteProp, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { BASE_URL } from '../../../utils/api';

const { width, height } = Dimensions.get('window');

const AgentSignUp1 = ({ navigation , route}: any) => {

  const { user_id, mobile } = route.params;

  const [fullName, setFullName] = useState('');
  const [contact, setContact] = useState('');
  const [partnerBank, setPartnerBank] = useState('');
  const [branchCode, setBranchCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegisterAgent = async()=>{
    if (!fullName || !contact || !partnerBank || !branchCode) {
      setErrorMessage('Please fill all fields');
      return;
    }
    try{
      const response = await axios.post(`${BASE_URL}/agent/`,{
        user_id:user_id,
        full_name:fullName,
        mobile:mobile,
        partner_bank:partnerBank,
        branch_code:branchCode
      });
      console.log('Agent Registered: ', response.data);
      navigation.navigate('AgentSignUp2', { user_id, mobile });

    }catch(error:any){
      console.log('Data was:',{
        user_id:user_id,
        full_name:fullName,
        mobile:mobile,
        partner_bank:partnerBank,
        branch_code:branchCode
      });

      console.error('Error in Registeration :', error);
      setErrorMessage(error?.response?.data?.message || 'Failed to register. Please try again.');
    }
  };

  return (
    <View style={styles.container}>
      <Pressable onPress={()=>{navigation.goBack()}} style={{marginBottom:40}}>
        <ArrowBack/>
      </Pressable>

      <View style={styles.headerContainer}>
        <Text style={styles.heading}>Hello! Agent</Text>
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

                {/* Bank Name */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Enter Partner Bank</Text>
          <View style={styles.inputBox}>
            <BankIcon height={20} width={20}/>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Bank Name"
              placeholderTextColor="#C0C0C0"
              value={partnerBank}
              onChangeText={setPartnerBank}
            />
          </View>
        </View>

        {/* Branch Code */}
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Enter Branch Code</Text>
          <View style={styles.inputBox}>
            <BankIcon height={20} width={20}/>
            <TextInput
              style={styles.input}
              placeholder="Enter your Branch Code"
              placeholderTextColor="#C0C0C0"
              value={branchCode}
              onChangeText={setBranchCode}
            />
          </View>
        </View>
        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : null}
     </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton} onPress={handleRegisterAgent}>
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
    paddingTop: 40,
    flex: 1,
    backgroundColor:'#fff'
 
  },
  headerContainer: {
    marginBottom: 8,
  },
  heading: {
    fontSize: 24,
    fontWeight: '500',
    color: '#3F1976',
  },
  subheading: {
    fontSize: 14,
    color: '#4B5768',
    marginTop: 8,
  },
  formContainer: {
    gap: 24,
   marginBottom: 24,
   marginTop:24
  },
  inputGroup: {
    gap: 8,
 
  },
  label: {
    fontSize: 14,
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
    fontSize: 12,
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
    marginBottom:16
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  footerText: {
    textAlign: 'center',
    marginBottom:32,
    fontSize: 12,
    color: '#000',
    fontWeight: '300',
  },
  loginLink: {
    color: '#28a745',
    fontWeight: '500',
  },
  errorText: {
  color: 'red',
  fontSize: 12,
  marginTop: 4,
},

});

export default AgentSignUp1;
