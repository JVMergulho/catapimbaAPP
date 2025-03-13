import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet, Modal, TextInput } from 'react-native';
import { useNavigation } from "@react-navigation/native";
import icons from "@/constants/icons";
import images from '@/constants/images';
import Colors from '@/constants/Colors';
import BackButton from '@/components/BackButton';

const groupChallenge = () => {
  const [desafio1, setDesafio1] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const [modal2Visible, setModal2Visible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        {/* Botão Voltar */}
        <BackButton isWhite={false} />
        <TouchableOpacity style={[styles.newChallengeButton, { marginTop: 8 }]} onPress={() => setModalVisible(true)}>
          <Text style={styles.newChallengeText}>+ Novo desafio</Text>
        </TouchableOpacity>
      </View>
      {/* Meus desafios */}
      <Text style={styles.sectionTitle}>Meus desafios</Text>
      {/* Desafio 1 */}
      <TouchableOpacity onPress={() => setDesafio1(!desafio1)} style={[styles.challengeCard, { backgroundColor: '#BC292F' }]}>
        <Image source={images.desafiofoto1} style={styles.challengeImage} />
        
        {desafio1 && (
          <View style={styles.challengeDetails}>
            <View style={styles.challengeInfo}>
              <Image source={require('../assets/images/saude.png')} style={styles.smallIcon} />
              <View>
              <View style={{ flexDirection: "row", alignItems: "flex-end"}}>
                <Text style={styles.challengeTitle}>
                  15 DIAS DE TREINO NO RECIFE{"\n"}CROSS MACAXEIRA (+10{" "}
                </Text>
                <Image source={icons.capiCoin} style={[styles.coinIcon, { marginTop: 2, marginLeft:-30}]} />
                <Text style={styles.challengeTitle}>)</Text>
              </View>
                <Text style={styles.challengeSubtitle}>Concluído por Pedro, Carolyne e Clara</Text>
              </View>
            </View>
          </View>
        )}

        <View style={styles.challengeFooter}>
          <Text style={styles.challengeName}>Os fitness da Macaxeira</Text>
          {!desafio1 && <Image source={images.pessoas1} style={styles.peopleIcon} />}
          {desafio1 && <Text style={styles.challengeTitle}>Capibas</Text>}
        </View>
        {/* Participantes */}
        {desafio1 && (
          <View style={styles.participants}>
            {[
              { name: 'Pedro', level: 'Nível Bronze', coins: 158, image: images.pessoa1 },
              { name: 'João', level: 'Nível Ouro', coins: 770, image: images.pessoa2 },
              { name: 'Carolyne', level: 'Nível Prata', coins: 554, image: images.pessoa3 },
              { name: 'Clara', level: 'Nível Ouro', coins: 897, image: images.pessoa4 },
              { name: 'Júlio', level: 'Nível Café com leite', coins: 20, image: images.pessoa5 },
            ].map((person, index) => (
              <View key={index} style={styles.participantRow}>
                <View style={styles.participantInfo}>
                  <Image source={person.image} style={styles.smallIcon} />
                  <View>
                    <Text style={styles.participantName}>{person.name}</Text>
                    <Text style={styles.participantLevel}>{person.level}</Text>
                  </View>
                </View>
                <View style={styles.coinContainer}>
                  <Text style={styles.coinText}>{person.coins}</Text>
                  <Image source={icons.capiCoin} style={styles.coinIcon} />
                </View>
              </View>
            ))}
          </View>
        )}
      </TouchableOpacity>
      {/* Desafio 2 */}
      <View style={[styles.challengeCard, { backgroundColor: '#F48609' }]}>
        <Image source={images.desafiofoto2} style={styles.challengeImage} />
        <View style={styles.challengeFooter}>
          <Text style={styles.challengeName}>Turisteiros Cults</Text>
          <Image source={images.pessoas2} style={styles.peopleIcon} />
        </View>
      </View>
      {/* Desafio 3 */}
      <View style={[styles.challengeCard, { backgroundColor: '#44982A' }]}>
        <Image source={images.desafiofoto3} style={styles.challengeImage} />
        <View style={styles.challengeFooter}>
          <Text style={styles.challengeName}>Desafios de Reciclar</Text>
          <Image source={images.pessoas3} style={styles.peopleIcon} />
        </View>
      </View>
        {/* MODAL DE CRIAÇÃO DE DESAFIO */}
        <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
  <View style={{
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  }}>
    <View style={{
      width: '85%',
      backgroundColor: '#FFF',
      borderRadius: 12,
      padding: 20,
      alignItems: 'center'
    }}>
      {/* Botão de Fechar */}
      <TouchableOpacity 
        style={{
          alignSelf: 'flex-end',
          padding: 10
        }} 
        onPress={() => setModalVisible(false)}
      >
        <Text style={{ fontSize: 18, fontWeight: 'bold' }}>X</Text>
      </TouchableOpacity>

      <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>Criar novo desafio</Text>
      
      <TextInput 
        style={{
          width: '100%',
          borderWidth: 1,
          borderColor: '#CCC',
          borderRadius: 8,
          padding: 10,
          marginBottom: 15,
          fontSize: 16
        }} 
        placeholder="Título..." 
        placeholderTextColor="#AAA" 
      />

      <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 10 }}>Selecione modelo do desafio</Text>
      
      {["Academia da cidade", "Reciclagem", "Pontos turísticos (Visitação)", "Bicicletas"].map((item, index) => (
        <TouchableOpacity
          key={index}
          style={{
            width: '100%',
            padding: 12,
            borderRadius: 8,
            backgroundColor: selectedOption === item ? '#4A90E2' : '#F1F1F1',
            marginBottom: 10,
            alignItems: 'center'
          }}
          // onPress={() => setSelectedOption(item)}
        >
          <Text style={{ fontSize: 16, color: selectedOption === item ? 'white' : 'black' }}>
            {item}
          </Text>
        </TouchableOpacity>
      ))}

      <TouchableOpacity style={{
        width: '100%',
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#E1E1E1',
        alignItems: 'center',
        marginBottom: 10
      }}>
        <Text style={{ fontSize: 16 }}>Adicionar imagem de capa</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{
        width: '100%',
        padding: 12,
        borderRadius: 8,
        backgroundColor: '#4A90E2',
        alignItems: 'center'
      }}>
        <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold' }}>Criar</Text>
      </TouchableOpacity>
    </View>
  </View>
</Modal>

      {/* MODAL DE COMPARTILHAMENTO DE DESAFIO */}
        <Modal animationType="slide" transparent={true} visible={modalVisible} onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={styles.modalContainer}>
            {/* Botão de Fechar */}
            <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.closeButtonText}>X</Text>
            </TouchableOpacity>

            <Text style={styles.modalTitle}>Criar novo desafio</Text>
            
            <TextInput style={styles.input} placeholder="Título..." placeholderTextColor="#AAA" />

            <Text style={styles.modalSubtitle}>Selecione modelo do desafio</Text>
            
            {["Academia da cidade", "Reciclagem", "Pontos turísticos (Visitação)", "Bicicletas"].map((item, index) => (
              <TouchableOpacity key={index} style={styles.option}>
                <Text style={styles.optionText}>{item}</Text>
              </TouchableOpacity>
            ))}

            <TouchableOpacity style={styles.imageButton}>
              <Text style={styles.imageButtonText}>Adicionar imagem de capa</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.createButton}>
              <Text style={styles.createButtonText}>Criar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
    backgroundColor: Colors.lightBlue,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 24,
  },
  newChallengeText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  sectionTitle: {
    color: Colors.lightBlue,
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 10,
  },
  challengeCard: {
    paddingBottom: 16,
    borderRadius: 12,
    marginBottom: 10,
    width: 340,
  },
  challengeImage: {
    width: '100%',
    height: 100,
    borderRadius: 12,
    "resizeMode": "cover",
  },
  challengeFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    paddingHorizontal:16,
    alignItems: 'center',
  },
  challengeName: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
  },
  peopleIcon: {
    width: 60,
    height: 25,
    resizeMode: "contain",
    marginLeft: 10,
  },
  challengeDetails: {
    marginVertical: 10,
  },
  challengeInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal:16,
    paddingVertical: 8,
  },
  challengeTitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '700',
  },
  challengeSubtitle: {
    color: 'white',
    fontSize: 14,
    fontWeight: '400',
    marginTop: 4,

  },
  participants: {
    marginTop: 18, 
    paddingHorizontal:20,
  },
  participantRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  participantInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  smallIcon: {
    width: 32,
    height: 32,
    resizeMode: "contain",
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
    "resizeMode": "contain",
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
   },
   modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    backgroundColor: 'white',
    width: '50%',
    padding: 20,
    borderRadius: 12,
  },
  closeButton: {
    alignSelf: 'flex-end',
  },
  closeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  modalSubtitle: {
    fontSize: 14,
    fontWeight: '600',
    marginVertical: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#CCC',
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  option: {
    backgroundColor: '#F4F4F4',
    padding: 10,
    borderRadius: 8,
    marginBottom: 5,
  },
  optionText: {
    color: '#333',
  },
  imageButton: {
    backgroundColor: '#888',
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
    width: '50%',
    alignSelf: 'center',
  },
  imageButtonText: {
    color: 'white',
  },
  createButton: {
    backgroundColor: '#4A90E2',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    width: '50%',
    alignSelf: 'flex-end',
  },
  createButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default groupChallenge;
