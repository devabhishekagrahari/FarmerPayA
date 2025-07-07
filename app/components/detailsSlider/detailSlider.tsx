import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';
import DetailCard from './detailCard';

const AddDetailSlider = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Add your details</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <DetailCard
          title="Add Your Farm"
          subtitle="Add farm details for advisory and schemes."
          buttonLabel="Add Farm"
          image={require('../../assets/images/farm.png')}
          onPress={() => console.log('Add Farm')}
        />
        <DetailCard
          title="Add Your Livestock"
          subtitle="Manage livestock for insurance & health benefits."
          buttonLabel="Add Livestock"
          image={require('../../assets/images/liveStock.png')}
          onPress={() => console.log('Add Livestock')}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#E9DFFB',
    flex: 1,
    paddingTop: 24,
    paddingHorizontal: 16,
    paddingBottom:14
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#24025E',
    marginBottom: 16,
  },
});

export default AddDetailSlider;
