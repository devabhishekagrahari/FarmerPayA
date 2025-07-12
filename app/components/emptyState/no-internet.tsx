import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

export default function NoInternetScreen() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  const handleTryAgain = () => {
    setLoading(true);
    // Simulate check (replace with real internet check logic)
    setTimeout(() => {
      setLoading(false);
      // Possibly navigate or update state based on connectivity
    }, 1500);
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
              <Icon name="arrow-back" size={24} color="#54219D" />
            </TouchableOpacity>

      <Image
        source={require('../../assets/images/selection/check-internet.png')} // Replace with actual path
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.subtitle}>Please check your internet connection!</Text>

      <TouchableOpacity style={styles.retryButton} onPress={handleTryAgain}>
        {loading ? (
          <ActivityIndicator color="#000" />
        ) : (
          <Text style={styles.retryText}>Try Again</Text>
        )}
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    padding: 24,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
    zIndex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    color: '#4B320D',
    marginBottom: 24,
    marginTop: -40,
  },
  image: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20,
  },
  retryButton: {
    backgroundColor: '#F2F2F2',
    paddingVertical: 10,
    paddingHorizontal: 28,
    borderRadius: 20,
  },
  retryText: {
    fontSize: 16,
    color: '#000',
  },
});
