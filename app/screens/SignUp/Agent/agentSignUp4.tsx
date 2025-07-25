import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  TouchableOpacity,
  Pressable,
} from 'react-native';

import VillageIcon from '../../../assets/images/VillageIcon.svg';
import BankIcon from '../../../assets/images/BankIcon.svg';
import ArrowBack from '../../../assets/images/ArrowBack.svg';
import UserIcon from '../../../assets/images/agentSignUp/UserIcon.svg';
import Upload from '../../../assets/images/Button.svg'; 
import { useRoute } from '@react-navigation/native';

interface FormData {
  houseNo?: string;
  villageName?: string;
  city?: string;
  state?: string;
  pincode?: string;
}

const AgentSignUp4 = ({ navigation }: any) => {
    const [ formData , setFormData ] = useState({
          houseNo: '',
          villageName: '',
          city: '',
          state: '',
          pincode: '',
    })
  
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, paddingTop: 40, backgroundColor: '#fff' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={60}
    >
      <Pressable onPress={() => navigation.goBack()} style={{ marginHorizontal: 24 }}>
        <ArrowBack />
      </Pressable>

      <Text style={styles.label0}>Bank Details<Text style={{color:'#FF0000'}}> *</Text></Text>

            {/* Checkbox */}



        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          <View style={styles.container}>

            {/* Inputs */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Account-holder Name</Text>
              <View style={styles.inputBox}>
                <UserIcon height={20} width={20} color={'#A0A0A0'} />
                <TextInput
                  placeholder="Enter your Account Holder Name"
                  style={styles.input}
                  placeholderTextColor="#C0C0C0"
                  value={formData.houseNo}
                  onChangeText={(Text)=>{setFormData({...formData,houseNo:Text})}}
                 
                />
              </View>
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Bank Account Number</Text>
              <View style={styles.inputBox}>
                 <BankIcon height={25} width={25}  />
                <TextInput
                  placeholder="Enter your Bank Account Number"
                  style={styles.input}
                  placeholderTextColor="#C0C0C0"
                  value={formData.villageName}
                />
              </View>
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Confirm Bank Account Number</Text>
              <View style={styles.inputBox}>
                 <BankIcon height={25} width={25}  />
                <TextInput
                  placeholder="Enter Your Bank Account Number"
                  style={styles.input}
                  placeholderTextColor="#C0C0C0"
                  value={formData.city}
                />
              </View>
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>IFSC Code</Text>
              <View style={styles.inputBox}>
                <BankIcon height={25} width={25}  />
                <TextInput
                  placeholder="Enter 11-character alphanumeric code"
                  style={styles.input}
                  placeholderTextColor="#C0C0C0"
                  value={formData.pincode}
                />
              </View>
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Enter Partner Bank Name</Text>
              <View style={styles.inputBox}>
                <BankIcon height={25} width={25} />
                <TextInput
                  placeholder="Enter your partner bank name"
                  style={styles.input}
                  placeholderTextColor="#C0C0C0"
                  value={formData.state} 
                />
              </View>
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Enter Partner Bank's Branch Code</Text>
              <View style={styles.inputBox}>
                <BankIcon height={25} width={25} />
                <TextInput
                  placeholder="Enter your Partner Bank's Branch Code"
                  style={styles.input}
                  placeholderTextColor="#C0C0C0"
                  value={formData.state} 
                />
              </View>
            </View>
 
            <View style={styles.formGroup}>
                <Text style={styles.label}>Upload your Cancel Check</Text>
                      {/* Upload Box */}
                      <TouchableOpacity style={styles.uploadBox}>
                        <View style={styles.uploadContent}>
                          <Upload width={100} height={50} />
                          <Text style={styles.orDropText}>or Drop Files</Text>
                        </View>
                      </TouchableOpacity>
            </View>

            <View style={{ gap: 16 }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('BankApproval')}
              >
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>

              <Text style={styles.footerText}>
                Already have an account?{' '}
                <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
                  Log in
                </Text>
              </Text>
            </View>
          </View>
        </ScrollView>

    </KeyboardAvoidingView>
  );
};
export default AgentSignUp4;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingTop: 24,
    padding: 24,
  },
  label0: {
    marginHorizontal: 24,
    color: '#797979',
    paddingTop: 40,
    fontSize: 14,
  },
  container: {
    flex: 1,
    gap: 24,
  },
  formGroup: {
    gap: 8,
  },
  label: {
    fontSize: 12,
    fontWeight: '500',
    color: 'rgba(18, 18, 18, 0.87)',
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 16,
    height: 48,
    borderWidth: 2,
    borderColor: '#f2f2f2',
    borderRadius: 8,
    backgroundColor: '#FFFFFF',
  },
  input: {
    flex: 1,
    fontSize: 10,
    marginLeft: 8,
    color: '#000',
  },
  button: {
    height: 60,
    backgroundColor: '#54219D',
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
  footerText: {
    fontSize: 12,
    fontWeight: '300',
    textAlign: 'center',
    color: '#000000',
  },
  loginLink: {
    color: '#79BBA8',
    fontWeight: '500',
  },
uploadBox: {
  marginTop: 16,
  borderWidth: 1,
  borderColor: '#DDD',
  borderStyle: 'dashed',
  borderRadius: 8,
  padding: 20,
  //backgroundColor: '#F9F9F9',
  alignItems: 'flex-start',
},
uploadContent: {
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: 12, // if your React Native version supports it
  // Or use marginLeft below if gap not supported:
  // paddingHorizontal: 10,
},
  orDropText: {
  fontSize: 12,
  color: '#888',
  marginLeft: 0, // fallback spacing if no `gap`
},

});
