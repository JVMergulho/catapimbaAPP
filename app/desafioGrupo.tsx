import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import icons from "@/constants/icons";

const DesafioGrupo = () => {
  const [desafio1, setDesafio1] = useState(false);

    const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        {/* Botão Voltar */}
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Image source={icons.backWhite} style={styles.backIcon}/>
            <Text style={styles.backText}>Voltar</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.newChallengeButton}>
          <Text style={styles.newChallengeText}>+ Novo desafio</Text>
        </TouchableOpacity>
      </View>

      {/* Meus desafios */}
      <Text style={styles.sectionTitle}>Meus desafios</Text>

      {/* Desafio 1 */}
      <TouchableOpacity onPress={() => setDesafio1(!desafio1)} style={[styles.challengeCard, { backgroundColor: 'red' }]}>
        <Image source={require('../assets/images/desafiofoto1.png')} style={styles.challengeImage} />
        
        {desafio1 && (
          <View style={styles.challengeDetails}>
            <View style={styles.challengeInfo}>
              <Image source={require('../assets/images/saude.png')} style={styles.smallIcon} />
              <View>
                <Text style={styles.challengeTitle}>15 DIAS DE TREINO NO RECIFE CROSS MACAXEIRA (+10)</Text>
                <Text style={styles.challengeSubtitle}>Concluído por Pedro, Carolyne e Clara</Text>
              </View>
            </View>
          </View>
        )}

        <View style={styles.challengeFooter}>
          <Text style={styles.challengeName}>Os fitness da Macaxeira</Text>
          {!desafio1 && <Image source={require('../assets/images/pessoas1.png')} style={styles.peopleIcon} />}
          {desafio1 && <Text style={styles.challengeCapibas}>Capibas</Text>}
        </View>

        {/* Participantes */}
        {desafio1 && (
          <View style={styles.participants}>
            {[
              { name: 'Pedro', level: 'nível Bronze', coins: 158, image: 'pessoa1.png' },
              { name: 'João', level: 'nível Ouro', coins: 770, image: 'pessoa2.png' },
              { name: 'Carolyne', level: 'nível Prata', coins: 554, image: 'pessoa3.png' },
              { name: 'Clara', level: 'nível Ouro', coins: 897, image: 'pessoa4.png' },
              { name: 'Júlio', level: 'nível Café com leite', coins: 20, image: 'pessoa5.png' },
            ].map((person, index) => (
              <View key={index} style={styles.participantRow}>
                <View style={styles.participantInfo}>
                  <Image source={require(`../assets/images/${person.image}`)} style={styles.smallIcon} />
                  <View>
                    <Text style={styles.participantName}>{person.name}</Text>
                    <Text style={styles.participantLevel}>{person.level}</Text>
                  </View>
                </View>
                <View style={styles.coinContainer}>
                  <Text style={styles.coinText}>{person.coins}</Text>
                  <Image source={require('../assets/images/moeda.png')} style={styles.coinIcon} />
                </View>
              </View>
            ))}
          </View>
        )}
      </TouchableOpacity>

      {/* Desafio 2 */}
      <View style={[styles.challengeCard, { backgroundColor: 'orange' }]}>
        <Image source={require('./assets/desafiofoto2.png')} style={styles.challengeImage} />
        <View style={styles.challengeFooter}>
          <Text style={styles.challengeName}>Turisteiros Cults</Text>
          <Image source={require('./assets/pessoas2.png')} style={styles.peopleIcon} />
        </View>
      </View>

      {/* Desafio 3 */}
      <View style={[styles.challengeCard, { backgroundColor: 'green' }]}>
        <Image source={require('./assets/desafiofoto3.png')} style={styles.challengeImage} />
        <View style={styles.challengeFooter}>
          <Text style={styles.challengeName}>Desafios de Reciclar</Text>
          <Image source={require('./assets/pessoas3.png')} style={styles.peopleIcon} />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 24,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  icon: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  newChallengeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'blue',
    padding: 8,
    borderRadius: 24,
  },
  newChallengeText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  sectionTitle: {
    color: 'blue',
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
  },
  challengeCard: {
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
    width: 340,
  },
  challengeImage: {
    width: '100%',
    height: 150,
    borderRadius: 12,
  },
  challengeFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  challengeName: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
  },
  peopleIcon: {
    width: 50,
    height: 20,
  },
  challengeDetails: {
    marginVertical: 10,
  },
  challengeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  challengeTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
  },
  challengeSubtitle: {
    color: 'white',
    fontSize: 12,
  },
  participants: {
    marginTop: 10,
  },
  participantRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  participantInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  smallIcon: {
    width: 24,
    height: 24,
  },
  participantName: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
  },
  participantLevel: {
    color: 'white',
    fontSize: 12,
  },
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  coinText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
  },
  coinIcon: {
    width: 16,
    height: 16,
  },
  backButton: { 
    alignSelf: "flex-start", 
    marginBottom: 10 },
  backText: { 
    color: "white", 
    fontSize: 16, 
    flexDirection: "row", 
    alignItems: "center" },
  backIcon: { 
    width: 18, 
    height: 18, 
    marginRight: 5, 
    resizeMode: 'contain',
    color: 'white'
   }
});

export default DesafioGrupo;
