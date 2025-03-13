import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import {ChallengeButton} from '@/components/ChallengeButton';
import icons from '@/constants/icons';
import images from '@/constants/images';
import colors from '@/constants/Colors';
import * as Progress from 'react-native-progress';
import { serviceType, ServiceType } from '@/constants/serviceType';
import { Link } from 'expo-router';
import challengeData from '@/constants/ChallengeData';
import BackButton from '@/components/BackButton';

const CapibaScreen = () => {
  return (
    <ScrollView style={styles.container}>

      {/* Botão Voltar */}
      <BackButton isWhite={false} />

      {/* Cabeçalho */}
      <View style={{flexDirection: 'row', marginBottom: 20, justifyContent: 'space-between'}}>
        <Text style={styles.greeting}>Olá, Fred Oslon!</Text>

        <Link href="../ranking" style={[styles.capsuleButton, {justifyContent: 'center', paddingHorizontal:12, paddingVertical:6}]}> 
          <Image style={{width: 18, height: 15, marginRight: 6}} source={icons.crown} />
          <Text style ={{fontWeight: 'bold', fontSize: 14, color: '#F48609'}}>
             Ranking Capiba
          </Text>
        </Link>

      </View>

      <View style={styles.balanceCard}>
        <View >

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={icons.capiCoin} style={{ width: 28, height: 28 }} />
            <Text style={styles.balanceText}> 320 </Text>
            <Text style={{ color: '#FFF', fontSize: 16 }} > Capibas </Text>
          </View>

          <TouchableOpacity style={styles.button}>
              <Text style={{ color: '#fff', fontSize: 12 }}>Ver extrato →</Text>
          </TouchableOpacity>

        </View>

        <Image source={images.capiCupom} style={styles.capivaraImage} />
      </View>

      {/* Metas Mensais */}
      <Text style={styles.sectionTitle}>Suas metas mensais</Text>
      <View style={styles.progressContainer}>

      <CircularProgressWithImage progress={0.6} type='ambiente' />

      <CircularProgressWithImage progress={0.8} type='saúde' />

      <CircularProgressWithImage progress={0.2} type='cidadania' />

      </View>

      {/* Desafios Pendentes */}
      <View style={ styles.challengeTitleContainer}>
        <Text style={{fontSize: 16, color: colors.textBlue, fontWeight: 'semibold'}}>Desafios pendentes</Text>
        <Link href="/challenges">
          <Text style={{ color: colors.textBlue, textDecorationLine: "underline" }}> 
            Ver todos os desafios
          </Text>
        </Link>
      </View>

      <View style={styles.challengeList}>
        <ChallengeButton title={challengeData[0].title} subtitle={challengeData[0].subtitle} value={challengeData[0].value} type={challengeData[0].type} />
        <ChallengeButton title={challengeData[1].title} subtitle={challengeData[1].subtitle} value={challengeData[1].value} type={challengeData[1].type} />
      </View>

      <Text style={styles.sectionTitle}>Feirinha Capiba</Text>

      <Link href="../feirinha" style = {styles.feiraCard}>
        <View style = {styles.feiraCard}>
          <Image source={images.cupom} style={{ width: 80, height: 80, marginRight: 14 }} />
          <View style={{ width: 175,  marginRight: 14  }}>
            <Text style={{ color: '#FFF', fontSize: 14, fontWeight: 'bold', marginBottom: 4 }}>Troque suas capibas por prêmios!</Text>
            <Text style={{ color: '#FFF', fontSize: 12 }}>Com os maiores parceiros em linha reta do mundo.</Text>
          </View>
          <Image source={images.gift} style={{ width: 80, height: 80, resizeMode: 'contain' }} />
        </View>
      </Link>
      

      <Text style={styles.sectionTitle}>Capi-amigos</Text>

      <View style={styles.friendsCard}>
        <Text style={styles.title}>Convide amigos para participar de desafios.</Text>
        <View style={{ flexDirection: 'row', marginLeft: 28 }}>
          <Text style={styles.subtitle}>Tudo fica mais legal com a galera.</Text>
          <Image source={images.capiFriends} style={styles.image} />
        </View>
      </View>

    </ScrollView>
  );
};

const CircularProgressWithImage = ({ progress, type}: { progress: number; type: ServiceType }) => {
  const service = serviceType[type] ?? { color: "#000", icon: icons.ambiente};

  return (
    <View style={styles.progressItem}>
      <View style={styles.progressImageContainer}>
        {/* Barra de progresso circular */}
        <Progress.Circle size={80} progress={progress} color={service.color} thickness={6} borderWidth={2} />
        
        {/* Imagem centralizada dentro do círculo */}
        <Image source={service.icon} style={styles.imageIcon} />
      </View>
      <View style={styles.progressDescription}>
          <Text>{progress*100}%</Text>
          <Text style={styles.description}>Meio ambiente</Text>
        </View>
    </View>
  );
};

export default CapibaScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  progressImageContainer: {
    position: "relative", // Para posicionar a imagem sobre o círculo
    width: 80,
    height: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  imageIcon: {
    position: "absolute",
    width: 50, // Ajuste conforme necessário
    height: 50, 
    resizeMode: "contain",
  },
  header: {
    alignItems: 'center',
    backgroundColor: colors.lightBlue,
    padding: 40,
    width: '150%',
    marginTop: -40,
    marginLeft: -40,
    marginBottom: 20,
    
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  balanceCard: {
    flexDirection: 'row',
    backgroundColor: '#1E40AF',
    borderRadius: 10,
    padding: 20,
    width: '100%',
    height: 124,
    alignItems: 'center',
    gap: 10,
    marginTop: 10,
  },
  balanceText: {
    color: '#FFF',
    fontSize: 28,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 10,
    color: '#FFF',
    backgroundColor: '#1658C8',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 10,
    width: 120,
    height: 28,
    justifyContent: 'center',
  },
  capivaraImage: {
    width: 170,
    height: 140,
    marginTop: -16,
  },
  sectionTitle: {
    fontSize: 16,
    color: colors.darkBlue,
    fontWeight: 'semibold',
    marginBottom: 12,
    marginTop: 28,
  },
  challengeTitleContainer: {
    marginBottom: 12,
    marginTop: 28,
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center'
  },
  progressDescription:{
    alignItems: 'center',
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  capsuleButton:{
    flexDirection: 'row', 
    alignItems: 'center', 
    gap: 8, 
    width: 160, 
    height: 30, 
    backgroundColor: '#FFDB29', 
    borderRadius: 15, 
    padding: 5
  },
  progressItem: {
    alignItems: 'center',
    gap: 10,
  },
  progressText: {
    marginTop: 5,
    fontSize: 14,
  },
  challengeList: {
    marginTop: 10,
  },
  challengeButton: {
    padding: 15,
    borderRadius: 10,
    marginVertical: 5,
    width: '100%',
  },
  challengeTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFF',
  },
  challengeSubtitle: {
    fontSize: 12,
    color: '#FFF',
  },
  description:{
    color: colors.textGray,
    fontSize: 12,
  },
  feiraCard:{
    flexDirection: 'row', 
    height: 98,
    justifyContent: 'space-between', 
    alignItems: 'center', 
    backgroundColor: colors.darkBlue, 
    borderRadius: 10,
  },
  friendsCard: {
    backgroundColor: '#69B345', // Cor de fundo igual à imagem
    borderRadius: 12, // Arredondamento das bordas
    paddingLeft: 16,
    height: 125, 
    alignItems: 'center',
    justifyContent: 'space-between', // Mantém os elementos alinhados corretamente
    marginBottom: 30, 
  },
  title: {
    color: '#FFF',
    fontSize: 14, // Aumentado para melhor leitura
    fontWeight: 'bold',
    marginTop: 16,

  },
  subtitle: {
    color: '#FFF',
    fontSize: 12,
  },
  image: {
    width: 220, // Ajustado para um melhor encaixe
    height: 70,
    resizeMode: 'contain',
    alignSelf: 'flex-end', // Alinhado à direita
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
    resizeMode: 'contain' },
});
