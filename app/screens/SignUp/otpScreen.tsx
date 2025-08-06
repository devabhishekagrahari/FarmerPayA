import React, { useState, useRef, useEffect } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
} from 'react-native';

export default function LoginOtpVerification({ navigation }: any) {
  const onBackPress = () => {
    navigation.goBack();
  };

  return <OtpVerification onBackPress={onBackPress} navigation={navigation} />;
}

const OtpVerification = ({
  onBackPress,
  navigation,
}: {
  onBackPress: () => void;
  navigation: any;
}) => {
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(30);
  const [error, setError] = useState('');
  const [activeIndex, setActiveIndex] = useState(0);

  const inputsRef = useRef<Array<TextInput | null>>([]);

  // Countdown Timer
  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  // Handle OTP Input Change
  const handleOtpChange = (text: string, index: number) => {
    if (/^\d$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);
      setActiveIndex(index + 1);
      if (index < 5) {
        inputsRef.current[index + 1]?.focus();
      } else {
        inputsRef.current[index]?.blur();
      }
    }
  };

  const handleKeyPress = ({ nativeEvent }: any, index: number) => {
    if (nativeEvent.key === 'Backspace') {
      if (otp[index] === '') {
        if (index > 0) {
          inputsRef.current[index - 1]?.focus();
          const newOtp = [...otp];
          newOtp[index - 1] = '';
          setOtp(newOtp);
          setActiveIndex(index - 1);
        }
      } else {
        const newOtp = [...otp];
        newOtp[index] = '';
        setOtp(newOtp);
        setActiveIndex(index);
      }
    }
  };

  const handleVerify = () => {
    const enteredOtp = otp.join('');
    if (enteredOtp !== '123456') {
      setError('Incorrect OTP. Please try again.');
    } else {
      setError('');
      navigation.replace('WhoAreU');
    }
  };

  const handleResend = () => {
    setOtp(['', '', '', '', '', '']);
    setTimer(30);
    setError('');
    setActiveIndex(0);
    inputsRef.current[0]?.focus();
    Alert.alert('OTP Resent', 'Check your messages');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
        <Image source={require('../../assets/images/arrowButton.png')}/>
      </TouchableOpacity>

      <Text style={styles.label}>Enter the 6 digit code sent to your number</Text>

      <View style={styles.otpContainer}>
        {otp.map((digit, index) => {
          const isActive = index === activeIndex;
          const isError = !!error;

          return (
            <TextInput
              key={index}
              ref={(ref) => {inputsRef.current[index] = ref;}}
              style={[
                styles.otpBox,
                isError ? styles.otpBoxError : isActive ? styles.otpBoxActive : styles.otpBoxInactive,
              ]}
              maxLength={1}
              keyboardType="numeric"
              value={digit}
              onChangeText={(text) => handleOtpChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              autoFocus={index === 0}
            />
          );
        })}
      </View>

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      {timer > 0 ? (
        <Text style={styles.resendText}>
          If you did not receive the OTP, <Text style={{color:'#D00416'}}>Resend in {timer}s</Text> 
        </Text>
      ) : (
        <TouchableOpacity onPress={handleResend}>
          <Text style={[styles.resendText, { color: '#79BBA8' }]}>Resend OTP</Text>
        </TouchableOpacity>
      )}

      <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
        <Text style={styles.verifyText}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  backButton: {
    alignSelf: 'flex-start',
    marginBottom: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#121212',
    marginTop:40,
    marginBottom: 40,
    textAlign: 'left',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 8,
    marginBottom: 16,
  },
  otpBox: {
    width: 48,
    height: 70,
    borderRadius: 8,
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '500',
    color: '#797979',
    borderWidth:2,
  },
  otpBoxActive: {
    borderWidth: 2,
    borderColor: '#4CAF50', // Green
  },
  otpBoxInactive: {
    borderWidth: 1,
    borderColor: '#A2A2A2',
  },
  otpBoxError: {
    borderWidth: 2,
    borderColor: '#D00416', // Red
  },
  resendText: {
    fontSize: 12,
    color: '#0F1B38',
    textAlign: 'right',
    marginBottom: 16,
    fontWeight:'500'
  },
  errorText: {
    fontSize: 14,
    color: '#D00416',
    marginBottom: 8,
  },
  verifyButton: {
    backgroundColor: '#54219D',
    height: 60,
    borderRadius: 48,
    width: '90%',
    justifyContent: 'center',
    alignSelf:'center',
    alignItems: 'center',
    marginTop:40,
  },
  verifyText: {
    color: '#FFFFFF',
    fontSize: 18,
  },
});