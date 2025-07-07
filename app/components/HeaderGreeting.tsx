import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  ImageBackground,
  Dimensions
} from 'react-native';

const { width } = Dimensions.get('window');

const HeaderGreeting = () => (
  <ImageBackground style={styles.container} source={require('../assets/images/bg.png')}>
    <View style={styles.topRow}>
      <View style={styles.headerTitleContainer}>
        <Image source={require('../assets/images/plant.png')} style={styles.icon} />
        <Text style={styles.appName}>FarmerPay</Text>
      </View>

      <View style={styles.headerRightContainer}>
        <TouchableOpacity style={styles.box} onPress={() => console.log('Notifications')}>
          <Image source={require('../assets/images/notification.png')} style={styles.iconButton} />
        </TouchableOpacity>

        <Pressable style={styles.box} onPress={() => console.log('Change Language')}>
          <Image source={require('../assets/images/Vector.png')} style={styles.iconButton} />
        </Pressable>
      </View>
    </View>

    <View style={styles.greetRow}>
      <View style={styles.greetColumn} >
        <Text style={styles.welcomeText}>Namaste,</Text>
        <Text style={styles.username}>Animesh 🙏</Text>
        <Text style={styles.subtitle}>How can we help you today?</Text>
      </View>
      <Image source={require('../assets/images/farmer.png')} style={styles.image}  />
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
    padding: 16,
    overflow: 'hidden',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  headerTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerRightContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 28,
    height: 80,
    resizeMode: 'contain',
    marginRight: 8,
  },
  appName: {
    fontSize: 18,
    color: '#fff',
    fontWeight: 'bold',
  },
  box: {
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    marginLeft: 8,
  },
  iconButton: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  greetRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  greetColumn: {
    flex: 1,
    flexDirection: 'column',
  },
  welcomeText: {
    fontSize: 20,
    color: '#fff',
  },
  username: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFD700',
  },
  subtitle: {
    fontSize: 14,
    marginTop: 4,
    color: '#f2f2f2',
  },
  image: {
    width: 120,
    height: 170,
    marginBottom:50,
  },
});

export default HeaderGreeting;
