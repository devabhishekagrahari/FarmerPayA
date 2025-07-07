import React from 'react';
import {
  View,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface ChatInputBarProps {
  value: string;
  onChangeText?: (text: string) => void;
  onMicPress?: () => void;
  onGalleryPress?: () => void;
}

const ChatInputBar: React.FC<ChatInputBarProps> = ({
  value,
  onChangeText,
  onMicPress,
  onGalleryPress,
}) => {
  return (
    <View style={styles.inputWrapper}>
      <LinearGradient
        colors={['#FF0000', '#FFA500']}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientBorder}
      >
        <View style={styles.inputBar}>
          <TouchableOpacity onPress={onGalleryPress}>
            <Image
              source={require('../../assets/images/gallery-add.png')}
              style={styles.iconImg}
            />
          </TouchableOpacity>
          <TextInput
            style={styles.input}
            placeholder="Ask something..."
            placeholderTextColor="#888"
            value={value}
            onChangeText={onChangeText}
          />
          <TouchableOpacity onPress={onMicPress}>
            <ImageBackground
              source={require('../../assets/images/micBG1.png')}
              style={{ padding: 4 }}
            >
              <Image
                source={require('../../assets/images/mic.png')}
                style={styles.icon}
              />
            </ImageBackground>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    position: 'absolute',
    bottom: 20,
    left: 4,
    right: 4,
  },
  gradientBorder: {
    padding: 2,
    borderRadius: 30,
  },
  inputBar: {
    backgroundColor: '#fff',
    borderRadius: 28,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  input: {
    flex: 1,
    fontSize: 14,
    color: '#000',
    marginHorizontal: 12,
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: '#fff',
  },
  iconImg: {
    width: 24,
    height: 24,
    tintColor: '#979C9E',
  },
});

export default ChatInputBar;
