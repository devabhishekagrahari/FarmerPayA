import React, { useRef, useEffect, useState } from 'react';
import {
  Animated,
  View,
  Text,
  StyleSheet,
  Dimensions,
  Easing,
} from 'react-native';

const { height: screenHeight } = Dimensions.get('window');

const AutoScrollingText = () => {
  const scrollAnim = useRef(new Animated.Value(0)).current;
  const [textHeight, setTextHeight] = useState(0);
  const CONTAINER_HEIGHT = screenHeight * 0.3;

  useEffect(() => {
    if (textHeight === 0) return;

    scrollAnim.setValue(0);
    Animated.loop(
      Animated.timing(scrollAnim, {
        toValue: 1,
        duration: 15000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [textHeight]);

  const translateY = scrollAnim.interpolate({
    inputRange: [0, 1],
    outputRange: [0, -textHeight],
  });

  const content = (
    <>
      <Text style={styles.titleText}>
        Empowering Farmers, One Tap at a Time.{"\n"}
        Your Harvest, Your Story, Your Price.{"\n"}
        Grow Smarter, Earn More.{"\n"}
      </Text>
    </>
  );

  return (
    <View style={styles.centerTextContainer}>
      <Animated.View
        style={{
          transform: [{ translateY }],
        }}
      >
        <View
          onLayout={(event) => {
            setTextHeight(event.nativeEvent.layout.height);
          }}
        >
          {content}
        </View>
        {/* Duplicate for seamless looping */}
        {content}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  centerTextContainer: {
    marginTop: screenHeight * 0.1,
    height: screenHeight * 0.3,
    overflow: 'hidden',
    paddingHorizontal: 24,
  },
  titleText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#54219D',
    textAlign: 'center',
    lineHeight: 32,
  },
});

export default AutoScrollingText;
