import React from 'react';
import { View, ScrollView, Text, StyleSheet, Image } from 'react-native';
import HeaderGreeting from '../components/HeaderGreeting';
import ProfileStatusBar from '../components/ProfileStatusBar';
import ServiceCard from '../components/ServiceCard';
import FarmerPayUPI from '../components/FarmerPayUPI';
import AIAdvisory from '../components/AIadvisory';
import SchemeSlider from '../components/schemeSliderComponent/schemeSlider';
import InsuranceSlider from '../components/insuranceSliderComponent/insuranceSlider';
import AddDetailSlider from '../components/detailsSlider/detailSlider';
import RecommendedVideoSlider from '../components/recommendedVideoCard.tsx/videoCardSlider';

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <HeaderGreeting />
      <ProfileStatusBar />
      <Text style={styles.sectionTitle}>Services</Text>

      <View style={styles.servicesGrid}>
        <ServiceCard title='Loans' icon={require('../assets/images/loans.png')} />
        <ServiceCard title='AI Advisory' icon={require('../assets/images/ai.png')} />
        <ServiceCard title='Insurance' icon={require('../assets/images/insurance.png')} />
        <ServiceCard title='Schemes' icon={require('../assets/images/schemes.png')} />
        <ServiceCard title='My Score' icon={require('../assets/images/score.png')} />
      </View>

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
    backgroundColor: '#f9f7ff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 16,
    marginVertical: 8,
  },
  servicesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    verticalAlign:'auto',
    paddingHorizontal: 12,
  
  },
  image: {
    marginTop: 40,
    width: '100%',
    aspectRatio: 16 / 9,
    borderRadius: 12,
    resizeMode: 'cover',
  },
});

export default HomeScreen;
