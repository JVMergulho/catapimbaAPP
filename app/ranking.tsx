import React from 'react';
import { Link } from 'expo-router';
import { useState } from 'react';
import { View, Text, Image, Button, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import icons from "@/constants/icons";
import { SafeAreaView } from 'react-native-safe-area-context';
import Colors from '@/constants/Colors';
import BackButton from '@/components/BackButton';

export default function Ranking() {
  const navigation = useNavigation();

  const goldPeople = [{
    name: 'Caroleta Costa',
    capibas: 900
  }, {
    name: 'Pedro Monte',
    capibas: 880
  }, {
    name: 'Mathew Cordevile',
    capibas: 860
  }];

  const silverPeople = [{
    name: 'Jorge Capy',
    capibas: 290
  }, {
    name: 'Zé Barinha',
    capibas: 260
  },
  {
    name: 'João Mergulho',
    capibas: 240
  }];

  const bronzePeople = [{
    name: 'Cla Loura',
    capibas: 180
  }, {
    name: 'Jeff Souza',
    capibas: 180
  },
  {
    name: 'Barbara Capy',
    capibas: 160
  }];

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      
      <View style={{marginLeft: 20}}>     
        <BackButton isWhite={false} />
      </View>

      {/* Título Principal */}
      <Text style={styles.mainTitle}>Ranking Capiba Mensal</Text>

      {/* Imagem e Subtítulo */}
      <View style={styles.subHeader}>
        <Image source={require('../assets/images/elosCapiba.png')} style={styles.image} />
        <Text style={styles.subtitle}>Seja um capi-cidadão exemplar</Text>
      </View>

      {/* ScrollView de Rankings */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', gap: 8 }}>
          <Image source={icons.capiCoin} style={{ width: 26, height: 26 }}/>
          <Text style={styles.sectionTitle}>Divisão Capiba de Ouro</Text>
        </View>

        {/* Ranking de Capiba de Ouro */}
        <View style={styles.rankContainer}>
            {goldPeople.map((person, index) => (
              <View key={index} style={styles.rankRow}>
                <Text style={styles.rankText}>{index + 1}º {person.name}</Text>
                <Text style={styles.rankText}>{person.capibas} capibas</Text>
              </View>
            ))}
            <View style={styles.rankRow}>
              <Text style={[styles.rankText, { fontWeight: 'bold' }]}>10º Júlia Maya (Você)</Text>
              <Text style={[styles.rankText, { fontWeight: 'bold' }]}> 320 capibas</Text>
            </View>
            <Text style={{ fontWeight: 'bold', alignSelf: 'center', fontSize: 18, color: '#fff' }}>...</Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Divisão Capiba de Prata */}
        <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', gap: 8 }}>
          <Image source={icons.capiCoinSilver} style={{ width: 26, height: 26 }}/>
          <Text style={styles.sectionTitle}>Divisão Capiba de Prata</Text>
        </View>

        <View style={styles.rankContainer}>
            {silverPeople.map((person, index) => (
              <View key={index} style={styles.rankRow}>
                <Text style={styles.rankText}>{index + 1}º {person.name}</Text>
                <Text style={styles.rankText}>{person.capibas} capibas</Text>
              </View>
            ))}
            <Text style={{ fontWeight: 'bold', alignSelf: 'center', fontSize: 18, color: '#fff' }}>...</Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Divisão Capiba de Bronze */}
        <View style={{ flexDirection: 'row', alignContent: 'center', justifyContent: 'center', gap: 8 }}>
          <Image source={icons.capiCoinBronze} style={{ width: 26, height: 26 }}/>
          <Text style={styles.sectionTitle}>Divisão Capiba de Bronze</Text>
        </View>

        <View style={styles.rankContainer}>
            {silverPeople.map((person, index) => (
              <View key={index} style={styles.rankRow}>
                <Text style={styles.rankText}>{index + 1}º {person.name}</Text>
                <Text style={styles.rankText}>{person.capibas} capibas</Text>
              </View>
            ))}
            <Text style={{ fontWeight: 'bold', alignSelf: 'center', fontSize: 18, color: '#fff' }}>...</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 30,
    backgroundColor: '#FFFFFF'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 20,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.textBlue,
    textAlign: 'center',
    marginBottom: 20,
  },
  subHeader: {
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: '600',
    color: Colors.textBlue,
  },
  scrollViewContent: {
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: Colors.lightBlue,
    borderTopLeftRadius: 56,
    borderTopRightRadius: 56,
    overflow:'hidden'
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    marginBottom: 16,
  },
  rankContainer: {
    marginBottom: 24,
    
  },
  rankRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  rankText: {
    fontSize: 16,
    color: 'white',
  },
  divider: {
    height: 2,
    backgroundColor: 'white',
    marginBottom: 16,
  },
  footerBackground: {
    marginTop: 24,
    backgroundColor: Colors.textBlue,
    borderTopLeftRadius: 64,
    borderTopRightRadius: 64,
    paddingVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  footerText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  backButton: { 
    alignSelf: "flex-start", 
    marginBottom: 10 },
  backText: { 
    color: "#1976D2", 
    fontSize: 16, 
    flexDirection: "row", 
    alignItems: "center" },
  backIcon: { 
    width: 18, 
    height: 18, 
    marginRight: 5, 
    resizeMode: 'contain' }
});
