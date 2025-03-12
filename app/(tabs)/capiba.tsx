import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import icons from '@/constants/icons';
import images from '@/constants/images';
import colors from '@/constants/Colors';
import * as Progress from 'react-native-progress';

const CapibaScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Cabeçalho */}
      <Text style={styles.greeting}>Olá, Fred Oslon!</Text>

      <View style={styles.balanceCard}>

        <View >

          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image source={icons.capiCoin} style={{ width: 28, height: 28 }} />
            <Text style={styles.balanceText}> 320 </Text>
            <Text style={{ color: '#FFF', fontSize: 16 }} > Capibas </Text>
          </View>

          <TouchableOpacity style={styles.button}>
              <Text style={{ color: '#fff' }}>Ver extrato →</Text>
          </TouchableOpacity>

        </View>

        <Image source={images.capiClipped} style={styles.capivaraImage} />
      </View>

      {/* Metas Mensais */}
      <Text style={styles.sectionTitle}>Suas metas mensais</Text>
      <View style={styles.progressContainer}>

      <CircularProgressWithImage progress={0.6} imageSource={icons.ambiente} color={colors.textGreen} />
      <CircularProgressWithImage progress={0.8} imageSource={icons.saude} color={colors.textRed} />
      <CircularProgressWithImage progress={0.2} imageSource={icons.solPessoa} color={colors.textOrange}/>

      </View>

      {/* Desafios Pendentes */}
      <Text style={styles.sectionTitle}>Desafios pendentes</Text>
      <View style={styles.challengeList}>
        <ChallengeButton title="ANDAR DE BIKE" subtitle="Pedale para um futuro mais limpo!" color="#4CAF50" />
        <ChallengeButton title="EXAME DE ROTINA" subtitle="Prevenção é o melhor cuidado!" color="#D32F2F" />
      </View>

      {/* Ver Todos */}
      <TouchableOpacity>
        <Text style={styles.viewAll}>Ver todos desafios →</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

// Componente Botão de Desafio
const ChallengeButton = ({ title, subtitle, color }: { title: string; subtitle: string; color: string }) => (
  <TouchableOpacity style={[styles.challengeButton, { backgroundColor: "#F9F8F5" }]}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
    <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
      <Image source={icons.ambiente} style={{width: 38, height: 38}}/>
      <View>
        <Text style={{color: color, fontWeight: 'bold'}}>{title}</Text>
        <Text style={{color: color, fontSize: 12}}>{subtitle}</Text>
      </View>
    </View>
    <Image source={icons.arrowGreen} style={{width: 14, height: 14}}/>
    </View>

  </TouchableOpacity>
);

const CircularProgressWithImage = ({ progress, imageSource, color }: { progress: number; imageSource: any; color: string }) => {
  return (
    <View style={styles.progressImageContainer}>
      {/* Barra de progresso circular */}
      <Progress.Circle size={80} progress={progress} color={color} thickness={6} borderWidth={2} />
      
      {/* Imagem centralizada dentro do círculo */}
      <Image source={imageSource} style={styles.imageIcon} />
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
    borderRadius: 5,
    width: 120,
  },
  capivaraImage: {
    width: 170,
    height: 140,
    marginTop: -16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 20,
  },
  progressContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  progressItem: {
    alignItems: 'center',
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
  viewAll: {
    color: '#1E40AF',
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 10,
  },
});
