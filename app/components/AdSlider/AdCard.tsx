import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { AdCardProps } from './Ad';

const { width } = Dimensions.get('window');

type Props = AdCardProps & {
  isActive: boolean;
  index: number;
  total: number;
};

const LoanCard: React.FC<Props> = ({ title, subtitle, image, onPress, isActive, index, total }) => {
  const renderDots = () => (
    <View style={styles.dotsContainer}>
      {Array.from({ length: total }).map((_, i) => (
        <View
          key={i}
          style={i === index ? styles.activeDot : styles.inactiveDot}
        />
      ))}
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subtitle}>{subtitle}</Text>
        </View>



        <Image
          source={image}
          style={styles.image}
          resizeMode="contain"
        />
      </View>

      {renderDots()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginTop: 20,
    marginRight:20,
  },
  card: {
    flexDirection: 'row',
    backgroundColor: '#020852',
    width: width * 0.9,
    borderRadius: 14,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  title: {
    fontFamily: 'Inter-SemiBold',
    fontSize: 16,
    color: '#fff',
    letterSpacing: -0.66,
  },
  subtitle: {
    fontFamily: 'Inter-Regular',
    fontSize: 14,
    color: 'rgba(255,255,255,0.9)',
    marginTop: 4,
    letterSpacing: -0.56,
  },
  arrowWrapper: {
    position: 'absolute',
    right: 100,
    top: 16,
  },
  arrowCircle: {
    backgroundColor: '#fff',
    width: 18,
    height: 18,
    borderRadius: 9,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    marginLeft: 10,
  },
  dotsContainer: {
    flexDirection: 'row',
    marginTop: 10,
    gap: 6,
  },
  activeDot: {
    width: 27,
    height: 9,
    backgroundColor: '#4506A0',
    borderRadius: 20,
  },
  inactiveDot: {
    width: 9,
    height: 9,
    backgroundColor: '#DEDEDE',
    borderRadius: 4.5,
  },
});

export default LoanCard;
