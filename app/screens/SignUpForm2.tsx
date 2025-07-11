import React from 'react';
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
  Image,
  Alert,
} from 'react-native';


const SignUpFormScreen2 = ({ navigation }: any) => {
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 ,paddingTop:64,backgroundColor:'#fff'}}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={60}
    >
        <Pressable onPress={()=>{navigation.goBack()}} style={{marginHorizontal:24}}><Image source={require('../assets/images/arrowButton.png')}/></Pressable>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.container}>
            <View style={styles.formGroup}>
              <Text style={styles.label}>Enter House Number</Text>
              <TextInput
                placeholder="Enter your house, flat, apartment no."
                style={styles.input}
                placeholderTextColor="#C0C0C0"
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Enter Village</Text>
              <TextInput
                placeholder="Enter your village/town name"
                style={styles.input}
                placeholderTextColor="#C0C0C0"
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Enter City/District Name</Text>
              <TextInput
                placeholder="Choose your city"
                style={styles.input}
                placeholderTextColor="#C0C0C0"
              />
            </View>

            <View style={styles.formGroup}>
              <Text style={styles.label}>Enter State</Text>
              <TextInput
                placeholder="Choose your state"
                style={styles.input}
                placeholderTextColor="#C0C0C0"
              />
            </View>

            <TouchableOpacity style={styles.button} onPress={()=>{Alert.alert("SignUp Successfull... Now Login !!");  navigation.navigate('Login')}}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>

            <Text style={styles.footerText}>
              Already have an account?{' '}
              <Text style={styles.loginLink} onPress={() => navigation.navigate('Login')}>
                Log in
              </Text>
            </Text>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
    
  },
  container: {
    flex: 1,
    gap: 24,
  },
  formGroup: {
    gap: 8,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: 'rgba(18, 18, 18, 0.87)',
  },
  input: {
    height: 48,
    backgroundColor: '#FFFFFF',
    borderWidth: 2,
    borderColor: '#f2f2f2',
    borderRadius: 8,
    paddingHorizontal: 16,
    fontSize: 14,
    color: '#121212',
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
    fontSize: 20,
    color: '#FFFFFF',
  },
  footerText: {
    fontSize: 16,
    fontWeight: '300',
    textAlign: 'center',
    color: '#000000',
    marginTop: 16,
  },
  loginLink: {
    color: '#79BBA8',
    fontWeight: '400',
  },
});

export default SignUpFormScreen2;
