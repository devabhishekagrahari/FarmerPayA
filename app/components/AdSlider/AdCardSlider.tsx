// AdSlider.tsx
import React, { useRef, useState } from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import LoanCard from './AdCard';
import { AdCardProps } from './Ad';

const { width } = Dimensions.get('window');

const ads: AdCardProps[] = [
  {
    title: 'Seed Loans up to ₹10,000 ➜',
    subtitle: 'Buy seeds now, pay later with easy EMI options',
    image: require('../../assets/images/loan.png'),
  },
  {
       title: 'Seed Loans up to ₹10,000 ➜',
    subtitle: 'Buy seeds now, pay later with easy EMI options',
    image: require('../../assets/images/loan.png'),
  },
  {
        title: 'Seed Loans up to ₹10,000 ➜',
    subtitle: 'Buy seeds now, pay later with easy EMI options',
    image: require('../../assets/images/loan.png'),
  },
];

const AdSlider = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatRef = useRef(null);

  return (
    <FlatList
      data={ads}
      ref={flatRef}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, index) => `ad-${index}`}
      onMomentumScrollEnd={(event) => {
        const index = Math.round(event.nativeEvent.contentOffset.x / width);
        setActiveIndex(index);
      }}
      renderItem={({ item, index }) => (
        <LoanCard
          title={item.title}
          subtitle={item.subtitle}
          image={item.image}
          onPress={() => {}}
          isActive={index === activeIndex}
          index={index}
          total={ads.length}
        />
      )}
    />
  );
};

export default AdSlider;
