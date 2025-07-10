import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import HeaderGreeting from '../components/HeaderGreeting';
import ProfileStatusBar from '../components/ProfileStatusBar';

import FarmerPayUPI from '../components/FarmerPayUPI';
import AIAdvisory from '../components/AIadvisory';
import SchemeSlider from '../components/schemeSliderComponent/schemeSlider';
import InsuranceSlider from '../components/insuranceSliderComponent/insuranceSlider';
import AddDetailSlider from '../components/detailsSlider/detailSlider';
import RecommendedVideoSlider from '../components/recommendedVideoCard.tsx/videoCardSlider';
import Services from '../components/ServiceCard';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <HeaderGreeting />
      <ProfileStatusBar />
      <Services/>
      <FarmerPayUPI />
      <AIAdvisory />
      <SchemeSlider />
      <InsuranceSlider />
      <AddDetailSlider />
      <RecommendedVideoSlider />

      <Image
        source={require('../assets/images/bottomImage.png')}
        style={styles.image}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

  image: {
    marginTop: 40,
    width: '100%',
    aspectRatio: 16 / 9,

    resizeMode: 'cover',
  },
});

export default HomeScreen;
