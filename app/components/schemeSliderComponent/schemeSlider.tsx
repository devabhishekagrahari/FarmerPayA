import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SchemeCard from './schemeCard';
import { Scheme } from './scheme';

const schemes: Scheme[] = [
  {
    title: 'Have You Got Your Kisan\nCredit Card (KCC) Yet?',
    subtitle: 'Instant access to low-interest\nfarm loans & subsidies.',
    image: require('../../assets/images/kcc.png'),
    buttonText: 'Check Now',
  },
  {
    title: 'Get Zero-Interest Crop Loans!',
    subtitle: 'Special seasonal credit for\nsmall and marginal farmers.',
    image: require('../../assets/images/kcc.png'),
    buttonText: 'Apply',
  },
  // More cards can be added here
];

const SchemeSlider: React.FC = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Find Schemes for you</Text>

      <FlatList
        data={schemes}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <SchemeCard {...item} />}
        contentContainerStyle={styles.slider}
      />
    </View>
  );
};

export default SchemeSlider;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  heading: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2E0B8C',
    marginBottom: 12,
  },
  slider: {
    paddingRight: 16,
  },
});
