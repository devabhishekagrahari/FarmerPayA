import React from 'react';
import { View, Image, StyleSheet, ImageSourcePropType } from 'react-native';

interface VideoCardProps {
  image: ImageSourcePropType;
}

const VideoCard: React.FC<VideoCardProps> = ({ image }) => {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} resizeMode="cover" />
    </View>
  );
};

export default VideoCard;

const styles = StyleSheet.create({
  card: {
    width: 280,
    height: 160,
    borderRadius: 16,
    overflow: 'hidden',
    marginRight: 16,
    elevation: 4,
    backgroundColor: '#fff',
  },
  image: {
    width: '100%',
    height: '100%',
  },
});
