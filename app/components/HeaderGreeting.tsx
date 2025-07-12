import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  ImageBackground,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const { width, height } = Dimensions.get('window');

const Header = () => {
  return (
    <LinearGradient
      colors={[ '#6929C4','#4506A0']}
      start={{ x: 0.15, y: 0.5 }}
      end={{ x: 1, y: 0.5 }}
      style={styles.container}
      >
      <ImageBackground
        source={require('../assets/images/grid.png')} // use your image path
        resizeMode="cover"
        style={styles.grid}
      >
        <View style={styles.topRow}>
          <View style={styles.logoRow}>
            <Image source={require('../assets/images/smLogo.png')} style={styles.logo} />
            <Text style={styles.appName}>Farme₹Pay</Text>
          </View>
          <View style={styles.iconsRow}>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={require('../assets/images/notificationIcon.png')}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.iconButton}>
              <Image source={require('../assets/images/signIcon.png')}/>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.contentRow}>
          <View style={styles.textBlock}>
            <Text style={styles.greeting}>Namaste,</Text>
            <Text style={styles.username}>Animesh 🙏</Text>
            <Text style={styles.subText}>How can we help you today?</Text>
          </View>
          <Image
            source={require('../assets/images/farmer.png')} // illustration image
            style={styles.farmerImg}
            resizeMode="contain"
          />
        </View>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: height * 0.30,
    resizeMode:'contain'
  },
  grid: {
    flex: 1,
    paddingHorizontal: 16,
    aspectRatio:1.6,
    paddingTop: 20,

  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  appName: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginLeft: 8,
  },
  logo: {
    width: 30,
    height: 40,
    opacity:2,
    resizeMode:'contain'
  },
  iconsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 6,
  },
  contentRow: {
    flexDirection: 'row',

  },
  textBlock: {
   top:height*0.09,
   height: height*0.2,
  },
  greeting: {
    fontSize: 14,
    color: 'white',
  },
  username: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FFAB00',
    marginVertical: 2,
  },
  subText: {
    fontSize: 12,
    color: 'white',
  },
farmerImg: {
  width: width * 0.45,    // 195 out of 441px ≈ 0.44
  height: height * 0.245,  // adjust based on your design
  opacity: 1,
},

});

export default Header;
