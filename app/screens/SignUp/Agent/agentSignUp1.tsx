import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  Pressable,
  ScrollView,
} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from 'react-native-vector-icons/Feather';
import ArrowBack from '../../../assets/images/ArrowBack.svg';
import CardIcon from '../../../assets/images/agentSignUp/CardIcon.svg';
import BankIcon from '../../../assets/images/BankIcon.svg';
import { RouteProp, useRoute } from '@react-navigation/native';
import axios from 'axios';
import { BASE_URL } from '../../../utils/api';

const { width, height } = Dimensions.get('window');

const AgentSignUp1 = ({ navigation , route}: any) => {

  const { user_id, mobile } = route.params;

  const [fullName, setFullName] = useState('');
  const [contact, setContact] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [partnerBank, setPartnerBank] = useState('');
  const [branchCode, setBranchCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ];
  const ageOptions = [
    { label: '18-29', value: '18-29' },
    { label: '29-55', value: '29-55' },
    { label: '55+', value: '55+' },
  ];
  
  // Replace fatherName with gender in your state:
  const [gender, setGender] = useState('');
  const [age, setAge] = useState('');
  const [checked, setChecked] = useState({
    bankSakhi: false,
    shg: false,
    csc:false,
    vittaSakhi: false,
    Adathiya:false
  });
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
    <ScrollView>
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
        <Text style={{color:'#FF0000'}}>* Indicates Required</Text>
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Enter Full Name <Text style={{color:'#FF0000'}}>*</Text></Text>
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
        <View style={styles.inputGroup}>
          <Text style={styles.label}>Enter Age <Text style={{color:'#FF0000'}}>*</Text></Text>
          <View style={styles.inputBox}>
          <RNPickerSelect
            onValueChange={setAge}
            value={age}
            placeholder={{ label: 'Select your Age group', value: null }}
            items={ageOptions}
            useNativeAndroidPickerStyle={false}
            style={{
              inputAndroid: styles.pickerInput,
              inputIOS: styles.pickerInput,
              placeholder: {
                color: '#C0C0C0',
              },
            }}
            Icon={() => (
              <Icon
                name="chevron-down"
                size={20}
                color="#C0C0C0"
                style={styles.pickerIcon}
              />
            )}
          />
          </View>
        </View>

            
      
                        {/* Gender Drop Down */}
                        <View style={styles.inputGroup}>
          <Text style={styles.label}>Enter Gender <Text style={{color:'#FF0000'}}>*</Text></Text>
          <View style={styles.pickerContainer}>
          <RNPickerSelect
            onValueChange={setGender}
            value={gender}
            placeholder={{ label: 'Select your Gender', value: null }}
            items={genderOptions}
            useNativeAndroidPickerStyle={false}
            style={{
              inputAndroid: styles.pickerInput,
              inputIOS: styles.pickerInput,
              placeholder: {
                color: '#C0C0C0',
              },
            }}
            Icon={() => (
              <Icon
                name="chevron-down"
                size={20}
                color="#C0C0C0"
                style={styles.pickerIcon}
              />
            )}
    />
          </View>
        </View>
        {/* Designation Options */}
        <View style={{gap:8, flexDirection:'row',justifyContent:'space-between'}}>
          <View style={{flexDirection:'column',justifyContent:'space-between',alignItems:'flex-start'}}>
        <TouchableOpacity onPress={()=>{setChecked({...checked,bankSakhi:!checked.bankSakhi});}} style={styles.checkItem}> 
          {checked.bankSakhi?<View style={styles.checkedCircle}/>:
        <View style={[styles.circleCheck]}/>}
        <Text> Bank Sakhi</Text>
        </TouchableOpacity> 

                <TouchableOpacity onPress={()=>{setChecked({...checked,shg:!checked.shg});}} style={styles.checkItem}> 
          {checked.shg?<View style={styles.checkedCircle}/>:
        <View style={[styles.circleCheck]}/>}
        <Text> Self Help Group</Text>
        </TouchableOpacity> 

                <TouchableOpacity onPress={()=>{setChecked({...checked,csc:!checked.csc});}} style={styles.checkItem}> 
          {checked.csc?<View style={styles.checkedCircle}/>:
        <View style={[styles.circleCheck]}/>}
        <Text> CSC</Text>
        </TouchableOpacity> 

        </View>
        <View style={{flexDirection:'column', alignItems:'flex-start'}}>
                <TouchableOpacity onPress={()=>{setChecked({...checked,vittaSakhi:!checked.vittaSakhi});}} style={styles.checkItem}> 
          {checked.vittaSakhi?<View style={styles.checkedCircle}/>:
        <View style={[styles.circleCheck]}/>}
        <Text> Vitta Sakhi</Text>
        </TouchableOpacity> 

                <TouchableOpacity onPress={()=>{setChecked({...checked,Adathiya:!checked.Adathiya});}} style={styles.checkItem}> 
          {checked.Adathiya?<View style={styles.checkedCircle}/>:
        <View style={[styles.circleCheck]}/>}
        <Text> Adathiya</Text>
        </TouchableOpacity> 

       </View>
     
        </View>

        <View style={styles.inputGroup}>
         <Text style={styles.label}>Enter Adhaar Card Number <Text style={{color:'#FF0000'}}>*</Text></Text>
          <View style={styles.inputBox}>
            <CardIcon height={20} width={20}/>
            <TextInput
              style={styles.input}
              placeholder="Enter 12 digits of your Adhaar Card"
              placeholderTextColor="#C0C0C0"
              value={fatherName}
              onChangeText={setFatherName}
            />
          </View>
        </View>

        {/* Father's Name */}
        <View style={styles.inputGroup}>
        <Text style={styles.label}>Enter PAN Card Number <Text style={{color:'#FF0000'}}>*</Text></Text>
          <View style={styles.inputBox}>
            <CardIcon height={20} width={20}/>
            <TextInput
              style={styles.input}
              placeholder="Enter 10-character alphanumeric code "
              placeholderTextColor="#C0C0C0"
              value={fatherName}
              onChangeText={setFatherName}
            />
          </View>
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
        <Text style={styles.label}>Enter PAN Card Number <Text style={{color:'#FF0000'}}>*</Text></Text>
          <View style={styles.inputBox}>
            <CardIcon height={20} width={20}/>
            <TextInput
              style={styles.input}
              placeholder="Enter 10-character alphanumeric code "
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
    </ScrollView>
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
  pickerContainer: {
  borderWidth: 2,
  borderColor: '#f2f2f2',
  borderRadius: 8,
  backgroundColor: '#fff',
  height: 48,
  justifyContent: 'center',
  paddingHorizontal: 16,
  position: 'relative',
},
pickerInput: {
  fontSize: 12,
  color: '#000',
},
pickerIcon: {
  position: 'absolute',
  right:16,
  top: 14,
},
circleCheck:{
  borderRadius:16,
  width: 20, 
  height: 20, 
  borderColor:'#97EAD2',
  borderWidth:2
},
checkedCircle:{

    borderRadius:16,
  width: 20, 
  height: 20, 
  borderColor:'#97EAD2',
  borderWidth:6
},
checkItem:{
  flexDirection:'row',
  alignItems:'center', 
  justifyContent:'center',
  paddingTop:8,
  gap:8,
}
  errorText: {
  color: 'red',
  fontSize: 12,
  marginTop: 4,
},
}
);

export default AgentSignUp1;
