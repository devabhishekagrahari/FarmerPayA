import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import SchemeCard from './schemeCard';
import { Scheme } from './scheme';

const schemes: Scheme[] = [
  {
    title: 'Have You Got Your Kisan Credit Card (KCC) Yet?',
    subtitle: 'Instant access to low-interest farm loans & subsidies.',
    image: require('../../assets/images/kcc.png'),
    buttonText: 'Check Now',
  },
  {
    title: 'Get Zero-Interest Crop Loans!',
    subtitle: 'Special seasonal credit for small and marginal farmers.',
    image: require('../../assets/images/kcc.png'),
    buttonText: 'Apply',
  },
  // More cards can be added here
];

const SchemeSlider: React.FC = () => {
  const renderSchemeCard = ({ item, index }: { item: Scheme; index: number }) => {
    const isFirst = index === 0;
    const isLast = index === schemes.length - 1;
    
    return (
      <View style={[
        styles.cardContainer,
        isFirst && styles.firstCard,
        isLast && styles.lastCard
      ]}>
        <SchemeCard {...item} />
      </View>
    );
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.heading}>Find Schemes for you</Text>

      <FlatList
        data={schemes}
        keyExtractor={(_, index) => index.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={renderSchemeCard}
      />
    </View>
  );
};

export default SchemeSlider;

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
  },
  heading: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2E0B8C',
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  cardContainer: {
    // Base container for each card
  },
  firstCard: {
    paddingLeft: 16,
  },
  lastCard: {
    paddingRight: 16,
  },
});