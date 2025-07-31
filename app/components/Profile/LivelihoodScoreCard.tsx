import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import * as Progress from 'react-native-progress';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Productivity from '../../assets/images/Profile/productivity.svg';
import Financial from '../../assets/images/Profile/rupee.svg';
import Risk from '../../assets/images/Profile/risk.svg';
import Engagement from '../../assets/images/Profile/engagement.svg';
import Sound from '../../assets/images/Profile/sound.svg';

interface ScoreSection {
  label: string;
  icon: React.ReactNode;
  value: number;
  total: number;
  color: string;
}

const scoreSections: ScoreSection[] = [
  { label: 'Productivity', icon: <Productivity width={16} height={16} />, value: 30, total: 40, color: '#6929C4' },
  { label: 'Financial Health', icon: <Financial width={16} height={16} />, value: 20, total: 30, color: '#1FC16B' },
  { label: 'Risk Exposure', icon: <Risk width={16} height={16} />, value: 15, total: 20, color: '#FB3748' },
  { label: 'Engagement', icon: <Engagement width={16} height={16} />, value: 8, total: 10, color: '#FFDB43' },
];


const LivelihoodScoreCard: React.FC = () => {
  const totalScore = 75;
  const maxScore = 100;

  return (
    <View style={styles.card}>
      <Text style={styles.title}>My Livelihood Score</Text>

      <View style={styles.scoreWrapper}>
        <Progress.Circle
          size={90}
          progress={totalScore / maxScore}
          showsText
          formatText={() => `${totalScore}/100`}
          color="#FBC02D"
          borderWidth={0}
          thickness={6}
          textStyle={{ fontWeight: 'bold', fontSize: 16 }}
          unfilledColor="#E0E0E0"
        />
        <Icon name="medal-outline" size={24} color="#FBC02D" style={styles.medalIcon} />
      </View>

      {scoreSections.map((section, index) => (
        <View style={styles.sectionRow} key={index}>
          <View style={styles.sectionHeader}>
  {section.icon}
  <Text style={styles.sectionLabel}>{section.label}</Text>
</View>
        <View style={styles.sectionFooter}>
            <Text style={styles.scoreText}>{section.value}/{section.total}</Text>
            <Sound width={16} height={16} />
          </View>
          <Progress.Bar
            progress={section.value / section.total}
            width={null}
            height={6}
            color={section.color}
            unfilledColor="#E0E0E0"
            borderWidth={0}
            style={styles.progressBar}
          />
          
        </View>
      ))}

      <Text style={styles.lastUpdated}>Last Updated: 30 June, 2025</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
  borderRadius: 12,
  backgroundColor: '#F8F8F8',     // light grey for card (not screen)
  borderWidth: 1,
  borderColor: '#C0C0C0',
  padding: 16,
  marginVertical: 10,
  marginHorizontal: 20,
  shadowColor: 'transparent',     // remove shadow if unwanted
  elevation: 0,                   // no Android elevation
},
  title: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 12,
  },
  scoreWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    position: 'relative',
  },
  medalIcon: {
    position: 'absolute',
    bottom: 6,
    alignSelf: 'center',
  },
  sectionRow: {
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
    gap: 6,
  },
  sectionLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#333',
  },
  progressBar: {
    borderRadius: 4,
    marginBottom: 4,
  },
  sectionFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 12,
    color: '#555',
  },
  lastUpdated: {
    fontSize: 11,
    color: '#999',
    textAlign: 'center',
    marginTop: 8,
  },
});

export default LivelihoodScoreCard;
