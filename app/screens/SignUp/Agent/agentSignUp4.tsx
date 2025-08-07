import React, { useEffect, useRef, useState } from 'react';
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
  Dimensions,
  Animated,
  Image,
} from 'react-native';
import VillageIcon from '../../../assets/images/VillageIcon.svg';
import BankIcon from '../../../assets/images/BankIcon.svg';
import ArrowBack from '../../../assets/images/ArrowBack.svg';
import UserIcon from '../../../assets/images/agentSignUp/UserIcon.svg';
import Upload from '../../../assets/images/Button.svg'; 
import { pick, types } from '@react-native-documents/picker';
import DeleteIcon from '../../../assets/images/agentSignUp/DeleteIcon.svg';
import RefreshIcon from '../../../assets/images/agentSignUp/refreshIcon.svg';
import * as Progress from 'react-native-progress';
import { useRoute } from '@react-navigation/native';
import LargeButton from '../../../utils/customs/LargeButton';

const {width , height}= Dimensions.get('window');


interface FormData {
  houseNo?: string;
  villageName?: string;
  city?: string;
  state?: string;
  pincode?: string;
}

const AgentSignUp4 = ({ navigation }: any) => {

const [file2, setFile2] = useState<any>(null);
 const [progress2, setProgress2] = useState(0);
 const [uploadSpeed2, setUploadSpeed2] = useState('');
 const [isUploading2, setIsUploading2] = useState(false);
 const translateX2 = useRef(new Animated.Value(-width)).current;
    const [ formData , setFormData ] = useState({
          houseNo: '',
          villageName: '',
          city: '',
          state: '',
          pincode: '',
    })



  const simulateUpload = (
    fileSize: number,
    setProgressFn: (val: number) => void,
    setSpeedFn: (val: string) => void,
    setUploadingFn: (val: boolean) => void
  ) => {
    setUploadingFn(true);
    setProgressFn(0);
    setSpeedFn('');
    const start = Date.now();
    let uploaded = 0;
    const chunk = 50 * 1024;

    const timer = setInterval(() => {
      if (uploaded >= fileSize) {
        clearInterval(timer);
        setProgressFn(1);
        setSpeedFn('Upload complete!');
        setUploadingFn(false);
        return;
      }
      uploaded += chunk;
      const pct = uploaded / fileSize;
      setProgressFn(pct > 1 ? 1 : pct);

      const elapsed = (Date.now() - start) / 1000;
      const speed = ((uploaded / 1024) / elapsed).toFixed(2);
      setSpeedFn(`${speed} KB/s`);
    }, 500);
  };

    const pickAndSimulateUpload2 = async () => {
      try {
        const [res] = await pick({ type: [types.allFiles] });
        setFile2(res);
        simulateUpload(res.size ?? 100 * 1024, setProgress2, setUploadSpeed2, setIsUploading2);
      } catch (err: any) {
        if (err.name !== 'Cancel') {
          console.warn('Picker error:', err);
        }
      }
    };

      useEffect(() => {
        if (file2 && !isUploading2) {
          translateX2.setValue(-width); // reset before animating
          Animated.timing(translateX2, {
            toValue: 0,
            duration: 500,
            useNativeDriver: true,
          }).start();
        }
      }, [file2, isUploading2]);
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

            {/* <View style={styles.formGroup}>
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
            </View> */}
 
        {/* Upload 2 */}


        <View style={{height:height*0.25 ,backgroundColor:'#fff'}}>
          <View style={styles.formGroup}>
        <Text style={styles.label}>Upload Cancelled Check</Text> 
        {file2 && <View style={styles.pillBox}>
        <View style={styles.pill}>
          <Text style={styles.pillText}>Uploaded documents</Text>
        </View></View>} 

        {!file2 &&(<View>
        <TouchableOpacity style={styles.uploadBox} onPress={pickAndSimulateUpload2}>
          <Upload width={130} height={100} />

        </TouchableOpacity></View>)}

        {isUploading2 && (
          <View style={styles.progressContainer}>
            <Progress.Bar
              progress={progress2}
              width={width * 0.8}
              height={10}
              color="green"
              borderRadius={5}
              borderWidth={0}
              unfilledColor="#e0e0e0"
            />
            <Text style={styles.speedText}>{uploadSpeed2}</Text>
          </View>
        )}

        {file2 && !isUploading2 && (
          <Animated.View style={{ transform: [{ translateX:translateX2 }] }}> 
          <View style={styles.fileCard}>
            <Image source={{ uri: file2.uri }} style={styles.preview} resizeMode="cover" />
            <View style={{ flex: 1, backgroundColor:'#fff',marginLeft: 12 }}>
              <View style={{flexDirection:'row' ,alignItems:'center',justifyContent:'space-between'}}>
                <Text style={styles.fileName}>Canceled Check</Text>  
                <View style={{flexDirection:'row', alignItems:'center',gap:4}}>
                <TouchableOpacity onPress={pickAndSimulateUpload2}>
                <RefreshIcon height={20}/> </TouchableOpacity>         
                <TouchableOpacity onPress={() => setFile2(null)} style={styles.crossIcon}>
                  <DeleteIcon/>
                </TouchableOpacity>
                
               
                </View>
              </View>
              <Text style={styles.sizeText}>Size - {(file2.size / (1024 * 1024)).toFixed(2)}MB</Text>
              <Text style={styles.successText}>Successful</Text>
            </View>
          </View>
          </Animated.View>
        )}
        </View>
      </View>

            <View style={{ gap: 16 }}>
              
               <LargeButton title="Sign Up" onPress={() => navigation.navigate('BankApproval')} />
              <View style={{justifyContent:'center',flexDirection:'column'}}>
               <Text style={{textAlign:'center', fontSize:10}}>We collect basic personal and performance info to track your sales, calculate payouts, and deliver rewards. Your data stays secure and is used only as described in our 
               </Text>
               <Text style={{textAlign:'center' ,fontSize:10 ,color:'#54219D'}}>Privacy Policy</Text>
              </View>
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
    backgroundColor: '#6929C4',
    borderRadius: 48,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
  },
  buttonText: {
    fontSize: 16,
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
  padding: 8,
  //backgroundColor: '#F9F9F9',
  alignItems: 'center',
  justifyContent:'center'

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
},  pillBox:{    
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'center',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#54219D',
    borderRadius: 4,
    marginBottom: 16,
    backgroundColor:'#FFFFFF'},
  pill: {
    alignSelf: 'center',
    borderWidth: 1,
    backgroundColor:'#54219D',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 4,
    marginVertical: 16,
  },
  pillText: {
    fontSize: 12,
    color: '#fff',
    fontWeight: '600',
  },progressContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  speedText: {
    fontSize: 12,
    marginTop: 6,
  },
  fileCard: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  preview: {
    width: 60,
    height: 60,
    borderRadius: 6,
    backgroundColor: '#eee',
  },
  fileName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  sizeText: {
    fontSize: 12,
    color: '#656F77',
  },
  successText: {
    fontSize: 12,
    color: 'green',
    fontWeight: '600',
    marginTop: 4,
  },
  crossIcon: {
    padding: 4,
  },

});
