import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import ClockIcon from '../../assets/images/clock.svg'; // use your clock icon SVG

const updatesData = [
  {
    id: '1',
    date: 'TODAY',
    image: require('../../assets/images/promo1.svg'), // Replace with your actual image path
    title: 'Complete your profile and unlock loans up to ₹10,000—no paperwork, instant approval',
    time: '11:00 AM',
  },
  {
    id: '2',
    date: 'YESTERDAY',
    image: require('../../assets/images/promo2.svg'), // Replace with your actual image path
    title: 'Update your details to receive personalized advice and higher credit offers!',
    time: '11:00 AM',
  },
];

export default function Updates() {
  const groupedData = {
    TODAY: updatesData.filter(item => item.date === 'TODAY'),
    YESTERDAY: updatesData.filter(item => item.date === 'YESTERDAY'),
  };

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <View style={styles.cardContent}>
        <Image source={item.image} style={styles.cardImage} />
        <View style={styles.textContainer}>
          <Text style={styles.cardTitle}>{item.title}</Text>
          <View style={styles.timeRow}>
            <ClockIcon width={12} height={12} />
            <Text style={styles.timeText}>{item.time}</Text>
          </View>
        </View>
      </View>
      <TouchableOpacity style={styles.ctaButton}>
        <Text style={styles.ctaText}>Hurry Up! Apply Now</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={{ flex: 1 }}>
      {Object.entries(groupedData).map(([label, items]) => (
        <View key={label}>
          <Text style={styles.sectionLabel}>{label}</Text>
          <FlatList
            data={items}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            scrollEnabled={false}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  sectionLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#999999',
    marginBottom: 8,
    marginTop: 20,
    paddingHorizontal: 16,
  },
  card: {
    backgroundColor: '#F8F8F8',
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 12,
  },
  cardContent: {
    flexDirection: 'row',
  },
  cardImage: {
    width: 64,
    height: 64,
    borderRadius: 8,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
    justifyContent: 'space-between',
  },
  cardTitle: {
    fontSize: 13,
    fontWeight: '500',
    color: '#333333',
    marginBottom: 8,
  },
  timeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  timeText: {
    fontSize: 12,
    color: '#999',
  },
  ctaButton: {
    alignSelf: 'flex-end',
    marginTop: 12,
    borderColor: '#54219D',
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 16,
  },
  ctaText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#54219D',
  },
});
