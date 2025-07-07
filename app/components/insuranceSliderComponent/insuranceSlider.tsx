import React from 'react';
import { View, Text, StyleSheet, FlatList, Dimensions } from 'react-native';
import InsuranceCard from './insuranceCard';
import { Insurance } from './insurance';

const insurances: Insurance[] = [
  {
    title: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)',
    emoji: '☂️✅',
    bgColor: '#F44336',
  },
  {
    title: 'Weather-Based Crop Insurance Scheme (WBCIS)',
    emoji: '🌧️🛡️',
    bgColor: '#9C27B0',
  },
  {
    title: 'Unified Package Insurance Scheme (UPIS)',
    emoji: '👨‍🌾🐄',
    bgColor: '#3F51B5',
  },
  {
    title: 'Find More\nInsurances of your need',
    emoji: '➡️',
    bgColor: '#F5F5F5',
  },
  {
    title: 'NEW Pradhan Mantri Fasal Bima Yojana (PMFBY)',
    emoji: '☂️✅',
    bgColor: '#F44336',
  },
  {
    title: 'NEW Weather-Based Crop Insurance Scheme (WBCIS)',
    emoji: '🌧️🛡️',
    bgColor: '#9C27B0',
  },
  {
    title: 'NEW Unified Package Insurance Scheme (UPIS)',
    emoji: '👨‍🌾🐄',
    bgColor: '#3F51B5',
  },
  {
    title: 'NEW Find More\nInsurances of your need',
    emoji: '➡️',
    bgColor: '#F5F5F5',
  },
];

// Helper to chunk into groups of 4
const chunkArray = <T,>(arr: T[], size: number): T[][] => {
  const result: T[][] = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const { width } = Dimensions.get('window');
const PAGE_WIDTH = width - 32;

const InsuranceSlider: React.FC = () => {
  const grouped = chunkArray(insurances, 4); // 4 cards per page (2 rows x 2 cols)

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Featured Insurances</Text>

      <FlatList
        data={grouped}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => `page-${index}`}
        renderItem={({ item }) => (
          <View style={styles.page}>
            <View style={styles.row}>
              {item.slice(0, 2).map((card, idx) => (
                <View key={`top-${idx}`} style={styles.cardWrapper}>
                  <InsuranceCard {...card} />
                </View>
              ))}
            </View>
            <View style={styles.row}>
              {item.slice(2, 4).map((card, idx) => (
                <View key={`bottom-${idx}`} style={styles.cardWrapper}>
                  <InsuranceCard {...card} />
                </View>
              ))}
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default InsuranceSlider;

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
  page: {
    width: PAGE_WIDTH,
    marginRight: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  cardWrapper: {
    width: '48%',
  },
});
