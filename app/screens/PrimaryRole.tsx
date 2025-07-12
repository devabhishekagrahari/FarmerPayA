import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

type Role = {
  id: string;
  title: string;
  image: any;
};

const roles: Role[] = [
  { id: '1', title: 'Agricultural Farmer', image: require('../assets/images/selection/agricultural-farmer.jpg') },
  { id: '2', title: 'Dairy Farmer', image: require('../assets/images/selection/dairy-farmer.jpg') },
  { id: '3', title: 'Fisherman', image: require('../assets/images/selection/fisherman.jpg') },
  { id: '4', title: 'Beekeeper', image: require('../assets/images/selection/beekeeper.png') },
  { id: '5', title: 'Forest Gatherer', image: require('../assets/images/selection/forest-gatherer.png') },
  { id: '6', title: 'Floriculturist', image: require('../assets/images/selection/floriculturist.jpg') },
];

export default function PrimaryRoleScreen({ navigation }: any) {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const renderItem = ({ item }: { item: Role }) => {
    const isSelected = selectedId === item.id;
    return (
      <TouchableOpacity
        style={[styles.card, isSelected && styles.selectedCard]}
        onPress={() => setSelectedId(item.id)}
      >
        <View style={styles.imageContainer}>
            <Image source={item.image} style={styles.image} />
        </View>

        <Text style={styles.cardText}>{item.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.backButton}>
        <Icon name="arrow-back" size={24} color="#54219D" />
      </TouchableOpacity>

      {/* Progress Line */}
      <View style={styles.progressContainer}>
        <View style={styles.progressLineActive} />
        <View style={styles.progressLineInactive} />
      </View>

      <Text style={styles.title}>Who are you?</Text>
      <Text style={styles.subtitle}>Let us know about your primary role</Text>

      <FlatList
        data={roles}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
        contentContainerStyle={styles.grid}
        columnWrapperStyle={{ justifyContent: 'space-between' }}
      />

      <View style={styles.bottomContainer}>
        <TouchableOpacity style={styles.micWrapper}>
            <View style={styles.micOuterCircle}>
                <View style={styles.micInnerCircle}>
                    <Icon name="mic" size={28} color="#FFFFFF" />
                </View>
            </View>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.nextButton}
          onPress={() => navigation.navigate('secondaryRole')}
        >
          <Text style={styles.nextText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#FFFFFF' },
  backButton: {
    width: 40, height: 40, borderRadius: 20, borderWidth: 1,
    borderColor: '#54219D', justifyContent: 'center', alignItems: 'center', marginBottom: 8,
  },
  progressContainer: {
    flexDirection: 'row',
    alignSelf: 'center',
    gap: 6,
    marginBottom: 12,
  },
  progressLineActive: {
    width: 30,
    height: 4,
    backgroundColor: '#54219D',
    borderRadius: 2,
  },
  progressLineInactive: {
    width: 30,
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
  },
  title: { fontSize: 24, fontWeight: '700', color: '#3F1976', marginBottom: 4 },
  subtitle: { fontSize: 14, color: '#666', marginBottom: 20 },
  grid: { paddingBottom: 20 },
  card: {
    alignItems: 'center',
    width: '48%',
    marginVertical: 10,
    paddingVertical: 10,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
  },
  selectedCard: {
    borderColor: '#54219D',
    borderWidth: 2,
    backgroundColor: '#F3E8FF',
  },
  imageContainer: {
  width: 75,
  height: 75,
  borderRadius: 75 / 2,
  borderWidth: 2,
  borderColor: '#A2A2A2', // grey-500
  justifyContent: 'center',
  alignItems: 'center',
  overflow: 'hidden',
},
image: {
  width: 65,
  height: 65,
  borderRadius: 65 / 2,
},


  cardText: { fontSize: 13, textAlign: 'center' },
  bottomContainer: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',
  },
 micWrapper: {
  justifyContent: 'center',
  alignItems: 'center',
},

micOuterCircle: {
  width: 64,
  height: 64,
  borderRadius: 32,
  backgroundColor: '#865DFF4D', // outer glow at 30%
  justifyContent: 'center',
  alignItems: 'center',
},

micInnerCircle: {
  width: 48,
  height: 48,
  borderRadius: 24,
  backgroundColor: '#865DFF', // solid purple inner
  justifyContent: 'center',
  alignItems: 'center',
},


  nextButton: {
    flex: 1, marginLeft: 16, backgroundColor: '#54219D',
    paddingVertical: 14, borderRadius: 25, alignItems: 'center',
  },
  nextText: { color: '#fff', fontWeight: 'bold' },
});
