import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Dimensions,
} from 'react-native';
const{width,height}=Dimensions.get('window');
const LoginScreen = ({navigation}:any) => {
  const [phoneNumber, setPhoneNumber] = useState('');

  const handleGetOtp = () => {
    const isValid = /^[6-9]\d{9}$/.test(phoneNumber);
    if (!isValid) {
      Alert.alert('Invalid Number', 'Please enter a valid 10-digit Indian mobile number.');
      return;
    }
    else{
        navigation.navigate('OtpScreen');
    }
    
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Top illustration */}
      <Image
        source={require('../assets/images/farm-cow.png')} // Replace with your own image
        style={styles.image}
        resizeMode="contain"
      />

      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.formContainer}
      >
        {/* Heading */}
        <View style={styles.header}>
          <Text style={styles.title}>Log In</Text>
          <Text style={styles.subtitle}>Welcome back to the app</Text>
          <View style={styles.horizontalLine} />
        </View>
        


        {/* Phone Input */}
        <View style={styles.inputBlock}>
          <Text style={styles.label}>Enter Contact Number</Text>
          <TextInput
            placeholder="Enter your mobile number"
            placeholderTextColor="#C0C0C0"
            style={styles.input}
            keyboardType="phone-pad"
            maxLength={10}
            onChangeText={setPhoneNumber}
            value={phoneNumber}
          />
          <Text style={styles.helperText}>We will send you an OTP on this number</Text>
        </View>

        {/* Get OTP Button */}
        <TouchableOpacity style={styles.button} onPress={handleGetOtp}>
          <Text style={styles.buttonText}>Get OTP</Text>
        </TouchableOpacity>

        {/* Terms */}
        <TouchableOpacity>
          <Text style={styles.termsText}>
            By proceeding you are agreeing to farmerpay’s{' '} </Text>
            <Text style={styles.link}>Terms & Conditions</Text>
         
        </TouchableOpacity>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#FDFDFD',
    alignItems: 'center',
  },
  image: {
    width: width*0.7,
    aspectRatio:1,
    marginTop: 16,
  },
  formContainer: {
    width: '100%',
    paddingHorizontal: 24,
    alignItems: 'center',
  },
  header: {
    width: '80%',
    marginBottom: 16,
    flexDirection:'row',
    flexWrap:'wrap',
    alignSelf:'flex-start'
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#3F1976',
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    backgroundColor: '#D3D3D3', // light grey
    marginTop: 16, // space above & below the line
    },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#4B5768',
    marginTop: 4,
  },
  inputBlock: {
    width: '100%',
    marginBottom: 24,
  },
  label: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 8,
    color: 'rgba(18, 18, 18, 0.87)',
  },
  input: {
    borderWidth: 2,
    borderColor: '#F2F2F2',
    borderRadius: 8,
    paddingHorizontal: 16,
    height: 48,
    fontSize: 16,
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },
  helperText: {
    fontSize: 12,
    color: '#A2A2A2',
    alignSelf:'flex-start',
    marginTop: 8,
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#54219D',
    borderRadius: 48,
    height: 60,
    minWidth: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '400',
  },
  termsText: {
    fontSize: 12,
    color: '#000000',
    textAlign: 'center',
  },
  link: {
    color: '#54219D',
    textAlign:'center',
    textDecorationLine: 'underline',
  },
});
