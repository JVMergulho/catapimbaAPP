import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Link } from 'expo-router';
import icons from "@/constants/icons";
import Colors from "@/constants/Colors";
import BackButton from "@/components/BackButton";

const challengeDetail = () => {
  const navigation = useNavigation();
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Botão Voltar */}
      <BackButton isWhite={false} />

      {/* Título */}
      <Text style={styles.title}>Desafio</Text>

      {/* Card de Desafio */}
      <View>
        <View style={{flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginBottom: 28}}>
          <View style={{flexDirection: "row"}}>
            <Image source={icons.saude} style={{ width: 28, height: 28, alignSelf: "center", resizeMode: 'contain', marginRight: 8 }}/>
            <Text style={styles.desafioTitle}>TREINO NA ACADEMIA RECIFE</Text>
          </View>

          <View style={styles.divider} />

          <View style={{ alignItems: "flex-end" }}>
            <View style={{flexDirection: "row", alignItems: "center", gap: 8}}>
              <Image style={{width: 22, height: 22}} source={icons.capiCoin}/>
              <Text style={{fontSize: 22, fontWeight: "bold", color: Colors.pink, marginRight: 8, marginBottom: 4}}>60</Text>
            </View>
            <View style={{backgroundColor: Colors.pink, borderRadius: 50, padding: 5}}> 
              <Text style={{fontSize: 12, fontWeight: 'bold', color: "#fff"}}>BÔNUS OUTUBRO ROSA</Text>
            </View>
          </View>
        </View>

        <View style={{ gap: 4 }}>
          {/* Itens da Lista */}
          <TouchableOpacity style={styles.task} onPress={() => setChecked1(!checked1)}>
            <Text style={[styles.taskText, checked1 && styles.checkedText]}>
            Completar o cadastro no Academia Recife
            </Text>
            <Image source={icons.check} style={{ width: 20, height: 20 }} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.task} onPress={() => setChecked2(!checked2)}>
            <Text style={[styles.taskText, checked2 && styles.checkedText]}>
            Agendar aula
            </Text>
            <Image source={icons.check} style={{ width: 20, height: 20 }} />
          </TouchableOpacity>

          <View style={styles.taskDisabled}>
            <View>
              <Text style={styles.taskText}>Confirmação do Professor</Text>
              <Text style={styles.status}>STATUS: Pendente de aprovação ℹ️</Text>
            </View>
            <Text style={styles.checkboxDisabled}>⬜</Text>
          </View>
        </View>
      </View>

      {/* Card de Local */}
      <Link href="/challengeLocation" style={styles.localCard}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 40 }}>
          <Image source={icons.pin}/>
          <View>
            <View>
              <Text style={styles.pesquisaText}>PRÓXIMO A VOCÊ</Text>
              <Text style={styles.pesquisaSubtitle}>
                Confira Academias Recife perto da sua região
              </Text>
            </View>
            <Image style={{width: 16, height: 16, alignSelf: 'flex-end'}} source={icons.arrowWhite}/>
          </View>
        </View>
      </Link>

      {/* Card de Pesquisa */}
      <TouchableOpacity style={styles.pesquisaCard}>
        <View style={{ flexDirection: "row", alignItems: "center", gap: 40 }}>
          <Image source={icons.shinyCoin} style={{width: 37, height: 37}}/>
          <View>
            <View>
              <Text style={styles.pesquisaText}>GANHE +5 CAPIBAS</Text>
              <Text style={styles.pesquisaSubtitle}>
                Responda a pesquisa de satisfação a este serviço
              </Text>
            </View>
            <Image style={{width: 16, height: 16, alignSelf: 'flex-end'}} source={icons.arrowWhite}/>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff", flexGrow: 1 },
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
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 28 },
  card: { backgroundColor: "#fff", padding: 15, borderRadius: 10, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 5, marginBottom: 20 },
  desafioTitle: { 
    fontSize: 16, 
    fontWeight: "bold",
    color: "#C62828",
    width: 140
  },
  bonus: { flexDirection: "row", justifyContent: "space-between", backgroundColor: "#D81B60", padding: 8, borderRadius: 5, marginBottom: 10 },
  bonusText: { color: "#fff", fontWeight: "bold" },
  bonusCoins: { color: "#fff", fontWeight: "bold" },
  task: { flexDirection: "row", alignItems: "center", backgroundColor: "#E8F5E9", padding: 10, borderRadius: 10, marginBottom: 5, height: 56},
  taskDisabled: { height: 56, borderRadius: 10 ,flexDirection: "row", alignItems: "center", backgroundColor: "#E0E0E0", padding: 10, marginBottom: 5 },
  checkbox: { width: 24, height: 24, textAlign: "center", marginRight: 10, fontSize: 18, color: "#388E3C", borderWidth: 1, borderColor: "#388E3C", borderRadius: 5 },
  checkboxDisabled: { width: 24, height: 24, textAlign: "center", marginRight: 10, fontSize: 18, color: "#777" },
  checked: { backgroundColor: "#388E3C", color: "#fff" },
  taskText: { fontSize: 14, flex: 1 },
  checkedText: { textDecorationLine: "line-through", color: "#777" },
  status: { fontSize: 12, color: "#666" },
  concluirButton: { marginTop: 20, backgroundColor: "#1976D2", padding: 12, borderRadius: 5, alignItems: "center" },
  concluirText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  pesquisaCard: { 
    backgroundColor: "#FF9800", 
    padding: 15, 
    borderRadius: 10, 
    marginTop: 20, 
    alignItems: "center",  
    height: 90},
  localCard: { 
    backgroundColor: "#BC292F", 
    padding: 15, 
    borderRadius: 10, 
    marginTop: 20, 
    alignItems: "center",  
    height: 90},
  pesquisaText: { fontWeight: "bold", fontSize: 16, color: "#fff" },
  pesquisaSubtitle: { fontSize: 12, color: "#fff", marginTop: 5, width: 200},
  divider: {
    width: 1, 
    height: '60%',
    backgroundColor: Colors.textRed,
  },
});

export default challengeDetail;
