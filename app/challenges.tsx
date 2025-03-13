import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image } from 'react-native';
import React, { useState } from 'react';
import { ChallengeButton } from '@/components/ChallengeButton';
import Colors from '@/constants/Colors';
import challengeData from '@/constants/ChallengeData';
import icons from "@/constants/icons";
import { useNavigation } from "@react-navigation/native";
import BackButton from '@/components/BackButton';

// Opções de filtros disponíveis
const filterOptions = ['Todos', 'Para a turma', 'Ambiente', 'Saúde', 'Cidadania'];

const Challenges = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('Todos');
  const navigation = useNavigation();

  const filteredChallenges = challengeData.filter((challenge: any) => {
    if (selectedFilter === 'Todos') return true;
    if (selectedFilter === 'Para a turma') return challenge.collective;
    return challenge.type.toLowerCase() === selectedFilter.toLowerCase();
  });

  return (
    <View style={styles.container}>
      <BackButton isWhite={false} />

      <Text style={styles.title}>Desafios Pendentes</Text>

      {/* Filtros */}
      <View style={styles.filterContainer}>
        {filterOptions.map((filter) => (
          <TouchableOpacity 
            key={filter} 
            style={[styles.capsule, selectedFilter === filter && styles.capsuleSelected]}
            onPress={() => setSelectedFilter(filter)}
          >
            <Text style={[styles.capsuleText, selectedFilter === filter && styles.capsuleTextSelected]}>
              {filter}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Lista de Desafios */}
      <FlatList 
        data={filteredChallenges}
        renderItem={({ item }) => <ChallengeButton title={item.title} subtitle={item.subtitle} type={item.type} value={item.value}/>}
        keyExtractor={(item, index) => `${item.title}-${index}`}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
};

export default Challenges;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  filterContainer: {
    flexDirection: "row",
    flexWrap: "wrap", 
    justifyContent: "center",
    gap: 10,
    marginBottom: 20,
  },
  capsule: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    borderColor: Colors.darkBlue,
    borderWidth: 1,
    flexDirection: "row",
    alignItems: "center", 
    justifyContent: "center", 
  },
  capsuleSelected: {
    backgroundColor: Colors.darkBlue, // Cor ativa
  },
  capsuleText: {
    fontSize: 14,
    color: Colors.darkBlue,
    alignSelf: "center",
  },
  capsuleTextSelected: {
    color: "#FFF",
    fontWeight: "bold",
  },
  backText: { 
    color: "#1976D2", 
    fontSize: 16, 
    flexDirection: "row", 
    alignItems: "center" },
  backIcon: { 
    width: 18, 
    height: 18, 
    marginRight: 5, 
    resizeMode: 'contain' },
    backButton: { 
      alignSelf: "flex-start", 
      marginBottom: 10 },
});
