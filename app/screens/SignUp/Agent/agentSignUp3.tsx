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
  Alert,
} from 'react-native';
import VillageIcon from '../../../assets/images/VillageIcon.svg';
import StateIcon from '../../../assets/images/StateIcon.svg';
import ArrowBack from '../../../assets/images/ArrowBack.svg';
import HomeIcon from '../../../assets/images/HomeIcon.svg';
import { useRoute } from '@react-navigation/native';
import axios from 'axios';
import { BASE_URL } from '../../../utils/api';
import { KeyboardTypeOptions } from 'react-native';

const AgentSignUp3 = ({ navigation }: any) => {
    const route = useRoute<any>();
    const {
      user_id,
      mobile,
      house_no,
      village_or_town,
      city_or_district,
      pincode,
      state,
      same_as_permanent 
    } = route.params;

    const [ formData , setFormData ] = useState({
          houseNo: '',
          villageName: '',
          city: '',
          state: '',
          pincode: '',
    })
    const [checked, setChecked] = useState(false);
    //const route = useRoute<any>();

    useEffect(() => {
      if (same_as_permanent) {
        setChecked(true);
        setFormData({
          houseNo: house_no,
          villageName: village_or_town,
          city: city_or_district,
          state: state,
          pincode: pincode,
        });
      } 
    }, []);

  const handleSubmit = async () => {
    const { houseNo, villageName, city, state, pincode } = formData;

    if (!houseNo || !villageName || !city || !state || !pincode) {
      Alert.alert('Error', 'Please fill all the fields.');
      return;
    }

    try {
      const payload = {
        user_id,
        house_no: houseNo,
        village_or_town: villageName,
        city_or_district: city,
        pincode,
        state,
      };

      console.log('Sending /corraddress:', payload);

      const response = await axios.post(`${BASE_URL}/agent/corraddress`, payload);

      console.log('Correspondence address submitted:', response.data);

      navigation.navigate('UploadDocumentsScreen', { user_id, mobile });
    } catch (error: any) {
      console.error('Failed to submit corr address:', error);
      Alert.alert('Error', error?.response?.data?.message || 'Something went wrong.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, paddingTop: 40, backgroundColor: '#fff' }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={60}
    >
      <Pressable onPress={() => navigation.goBack()} style={{ marginHorizontal: 24 }}>
        <ArrowBack />
      </Pressable>

      <Text style={styles.label0}>CORRESPONDENCE ADDRESS</Text>

            {/* Checkbox */}


      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.scrollContainer} keyboardShouldPersistTaps="handled">
          <View style={styles.container}>
            {/* Input Fields */}
            {[
              { label: 'Enter House Number', key: 'houseNo', icon: <HomeIcon height={20} width={20} /> },
              { label: 'Enter Village', key: 'villageName', icon: <VillageIcon height={25} width={25} /> },
              { label: 'Enter City/District Name', key: 'city', icon: <VillageIcon height={25} width={25} /> },
              { label: 'Enter Pincode', key: 'pincode', icon: <VillageIcon height={25} width={25} />, keyboardType: 'number-pad' },
              { label: 'Enter State', key: 'state', icon: <StateIcon height={25} width={25} /> },
            ].map(({ label, key, icon, keyboardType }) => (
              <View style={styles.formGroup} key={key}>
                <Text style={styles.label}>{label}</Text>
                <View style={styles.inputBox}>
                  {icon}
                  <TextInput
                    placeholder={label}
                    placeholderTextColor="#C0C0C0"
                    style={styles.input}
                    value={formData[key as keyof typeof formData]}
                    onChangeText={(text) => setFormData({ ...formData, [key]: text })}
                    keyboardType={keyboardType as KeyboardTypeOptions || 'default'}
                    maxLength={key === 'pincode' ? 6 : undefined}
                  />
                </View>
              </View>
              ))}

            

            <View style={{ gap: 16 }}>
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Continue</Text>
              </TouchableOpacity>
              {/*
              <Text style={styles.footerText}>
                Already have an account?{' '}
                <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
                  Log in
                </Text>
              </Text>
              */}
            </View>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default AgentSignUp3;

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    paddingTop: 24,
    padding: 24,
  },
  label0: {
    marginHorizontal: 22,
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
  checkboxText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#797979',
  },
});
