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
import StateIcon from '../../../assets/images/StateIcon.svg';
import ArrowBack from '../../../assets/images/ArrowBack.svg';
import HomeIcon from '../../../assets/images/HomeIcon.svg';
import { useRoute } from '@react-navigation/native';

interface FormData {
  houseNo?: string;
  villageName?: string;
  city?: string;
  state?: string;
  pincode?: string;
}

const AgentSignUp3 = ({ navigation }: any) => {
    const [ formData , setFormData ] = useState({
          houseNo: '',
          villageName: '',
          city: '',
          state: '',
          pincode: '',
    })
  const [checked, setChecked] = useState(false);
const route = useRoute<any>();

useEffect(() => {
  if (checked && route?.params?.formData) {
    setFormData(route.params.formData);
  }
  if(!checked){
    setFormData({          houseNo: '',
          villageName: '',
          city: '',
          state: '',
          pincode: '',});
  }
}, [checked]);

  
  return (
    <KeyboardAvoidingView
      style={{ flex: 1, paddingTop: 40, backgroundColor: '#fff' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={60}
    >
      <Pressable onPress={() => navigation.goBack()} style={{ marginHorizontal: 24 }}>
        <ArrowBack />
      </Pressable>

      <Text style={styles.label0}>CORRESPONDANCE ADDRESS</Text>

            {/* Checkbox */}
            <Pressable style={styles.checkboxRow} onPress={() => setChecked(!checked)}>
              <View style={[styles.checkbox, checked && styles.checked]}>
                {checked && <View style={styles.innerTick} />}
              </View>
              <Text style={{    fontSize: 12,fontWeight: '500',color: '#797979',}}>SAME AS PERMANENT ADDRESS</Text>
            </Pressable>

      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          <View style={styles.container}>

            {/* Inputs */}
            <View style={styles.formGroup}>
              <Text style={styles.label}>Enter House Number</Text>
              <View style={styles.inputBox}>
                <HomeIcon height={20} width={20} color={'#A0A0A0'} />
                <TextInput
                  placeholder="Enter your house, flat, apartment no."
                  style={styles.input}
                  placeholderTextColor="#C0C0C0"
                  value={formData.houseNo}
                />
              </View>
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Enter Village</Text>
              <View style={styles.inputBox}>
                <VillageIcon height={25} width={25} color={'#A0A0A0'} />
                <TextInput
                  placeholder="Enter your village/town name"
                  style={styles.input}
                  placeholderTextColor="#C0C0C0"
                  value={formData.villageName}
                />
              </View>
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Enter City/District Name</Text>
              <View style={styles.inputBox}>
                <VillageIcon height={25} width={25} fill="#A0A0A0" />
                <TextInput
                  placeholder="Choose your city"
                  style={styles.input}
                  placeholderTextColor="#C0C0C0"
                  value={formData.city}
                />
              </View>
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Enter City/District PINCODE</Text>
              <View style={styles.inputBox}>
                <VillageIcon height={25} width={25} fill="#A0A0A0" />
                <TextInput
                  placeholder="Turn on gps to drop precise pin"
                  style={styles.input}
                  placeholderTextColor="#C0C0C0"
                  value={formData.pincode}
                />
              </View>
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Enter State</Text>
              <View style={styles.inputBox}>
                <StateIcon height={25} width={25} />
                <TextInput
                  placeholder="Choose your state"
                  style={styles.input}
                  placeholderTextColor="#C0C0C0"
                  value={formData.state} 
                />
              </View>
            </View>

            <View style={{ gap: 16 }}>
              <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('primaryRole')}
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
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingTop: 24,
    padding: 24,
  },
  label0: {
    marginHorizontal: 32,
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

  checkboxRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop:6,
    marginHorizontal:32,
    gap: 8,
  },
  checkbox: {
    width: 15,
    height: 15,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#54219D',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checked: {
    backgroundColor: '#54219D',
  },
  innerTick: {
    width: 10,
    height: 10,
    backgroundColor: '#fff',
    borderRadius: 2,
  },
});

export default AgentSignUp3;
