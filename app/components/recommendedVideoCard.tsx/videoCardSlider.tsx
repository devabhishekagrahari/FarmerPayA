import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import VideoCard from './videoCard';


const videoData = [
  {
    id: '1',
    image: require('../../assets/images/vc1.png'),
  },
  {
    id: '2',
    image: require('../../assets/images/vc1.png'),
  },
  // Add more video thumbnails here
];

const RecommendedVideoSlider: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recommended Videos for you</Text>
      <FlatList
        data={videoData}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <VideoCard image={item.image} />}
      />
    </View>
  );
};

export default RecommendedVideoSlider;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#2E0B8C',
    marginBottom: 12,
  },
});
