import React from 'react';
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface VideoCardProps {
  image: ImageSourcePropType;
}

const VideoCard: React.FC<VideoCardProps> = ({ image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="stretch" />
    </View>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  card: {
    width: 280,
    height: 180,
    borderRadius: 16,
    margin:8,
    marginRight: 16,
    elevation: 4,
    backgroundColor: '#fff',
  },
  image: {
    width: 280,
    height: 180,
  },
});
