import React from 'react';
import { Link } from 'expo-router';
import { useState } from 'react';
import { View, Text, Image, Button, ScrollView, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Button
          title="< Voltar"
          onPress={() => {}}
          color="blue"
        />
      </View>

      {/* Título Principal */}
      <Text style={styles.mainTitle}>Ranking Capiba Mensal</Text>

      {/* Imagem e Subtítulo */}
      <View style={styles.subHeader}>
        <Image source={require('../../assets/images/elosCapiba.png')} style={styles.image} />
        <Text style={styles.subtitle}>Capi-cidadão exemplar</Text>
      </View>

      {/* ScrollView de Rankings */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.sectionTitle}>Divisão Capiba de Ouro</Text>

        {/* Ranking de Capiba de Ouro */}
        <View style={styles.rankContainer}>
          {['Jorge Capy', 'Zé Barinha', 'Luisa Gregorio'].map((name, index) => (
            <View key={index} style={styles.rankRow}>
              <Text style={styles.rankText}>{index + 1}o {name}</Text>
              <Text style={styles.rankText}>{(29900 - index * 6400)} capibas</Text>
            </View>
          ))}
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Divisão Capiba de Prata */}
        <Text style={styles.sectionTitle}>Divisão Capiba de Prata</Text>
        <View style={styles.rankContainer}>
          {['Jorge Capy', 'Zé Barinha', 'Luisa Gregorio'].map((name, index) => (
            <View key={index + 3} style={styles.rankRow}>
              <Text style={styles.rankText}>{index + 4}o {name}</Text>
              <Text style={styles.rankText}>{(29900 - (index * 6400 + 3200))} capibas</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
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
    color: 'blue',
    textAlign: 'center',
    marginVertical: 20,
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
    color: 'blue',
  },
  scrollViewContent: {
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 24,
    backgroundColor: '#1658C8',
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
    marginVertical: 16,
  },
  footerBackground: {
    marginTop: 24,
    backgroundColor: 'blue',
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
});
