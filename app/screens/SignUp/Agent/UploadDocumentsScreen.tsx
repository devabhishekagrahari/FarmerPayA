import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import BackArrow from '../../../assets/images/back-arrow.svg';
import Upload from '../../../assets/images/Button.svg'; 

const { width } = Dimensions.get('window');

const UploadDocumentsScreen = ({ navigation }: any) => {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity  onPress={() => navigation.goBack()} style={{ marginBottom: 40 }}>
        <BackArrow color="#54219D" />
      </TouchableOpacity>

      {/* Title */}
      <Text style={styles.title}>Upload your documents</Text>
      <Text style={styles.subtitle}>Working ID proof (Govt ID, employer card, etc.)</Text>
      <Text style={styles.info}>Accept JPG/PDF ≤ 5 MB</Text>

      {/* Upload Box */}
      <TouchableOpacity style={styles.uploadBox}>
        <View style={styles.uploadContent}>
          <Upload width={100} height={50} />
          <Text style={styles.orDropText}>or Drop Files</Text>
        </View>
      </TouchableOpacity>

      {/* Save Button */}
      <TouchableOpacity style={styles.saveButton} onPress={() => navigation.navigate('Main')}>
        <Text style={styles.saveText} >Save</Text>
      </TouchableOpacity>
    </View>
  );
};

export default UploadDocumentsScreen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 40,
    flex: 1,
    backgroundColor:'#fff'
 
  },

 backButton: {
  position: 'absolute',
  top: 48,
  left: 24,
  width: 40,
  height: 40,
  borderRadius: 20,
  borderWidth: 1,
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 10,
},

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#5B2C6F',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    marginTop: 8,
  },
  info: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  uploadBox: {
  marginTop: 32,
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

  uploadIcon: {
    marginBottom: 16,
  },
  
  orDropText: {
  fontSize: 16,
  color: '#888',
  marginLeft: 0, // fallback spacing if no `gap`
},
  saveButton: {
    height: 60,
    marginTop: 'auto',
    backgroundColor: '#54219D',
    borderRadius: 48,
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',  
    width: '100%',
    marginBottom: 20,
  },
  saveText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
