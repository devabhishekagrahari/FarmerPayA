import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import DetailCard from './detailCard';

const AddDetailSlider = () => {
  const detailsData = [
    {
      id: '1',
      title: "Add Your Farm",
      subtitle: "Add farm details for advisory and schemes.",
      buttonLabel: "Add Farm",
      image: require('../../assets/images/farm.png'),
      onPress: () => console.log('Add Farm'),
    },
    {
      id: '2',
      title: "Add Your Livestock",
      subtitle: "Manage livestock for insurance & health benefits.",
      buttonLabel: "Add Livestock",
      image: require('../../assets/images/liveStock.png'),
      onPress: () => console.log('Add Livestock'),
    },
  ];

  const renderDetailCard = ({ item, index }) => {
    const isFirst = index === 0;
    const isLast = index === detailsData.length - 1;
    
    return (
      <View style={[
        styles.cardContainer,
        isFirst && styles.firstCard,
        isLast && styles.lastCard
      ]}>
        <DetailCard
          title={item.title}
          subtitle={item.subtitle}
          buttonLabel={item.buttonLabel}
          image={item.image}
          onPress={item.onPress}
        />
      </View>
    );
  };

  return (
    <View>
      <ImageBackground
        source={require('../../assets/images/Union.png')}
        style={styles.container}
      >
        <Text style={styles.heading}>Add your details</Text>

        <FlatList
          data={detailsData}
          renderItem={renderDetailCard}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 24,
    paddingBottom: 48,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1F077A',
    marginBottom: 14,
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

export default AddDetailSlider;