import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import icons from "@/constants/icons";

const challengeDetail = () => {
  const navigation = useNavigation();
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(true);
  const [checked3, setChecked3] = useState(false);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Botão Voltar */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={icons.back} style={styles.backIcon}/>
          <Text style={styles.backText}>Voltar</Text>
        </View>
      </TouchableOpacity>

      {/* Título */}
      <Text style={styles.title}>Desafio</Text>

      {/* Card de Desafio */}
      <View style={styles.card}>
        <Text style={styles.desafioTitle}>⭐ EXAME DE MAMOGRAFIA</Text>

        <View style={styles.bonus}>
          <Text style={styles.bonusText}>BÔNUS OUTUBRO ROSA</Text>
          <Text style={styles.bonusCoins}>💰 60</Text>
        </View>

        {/* Itens da Lista */}
        <TouchableOpacity style={styles.task} onPress={() => setChecked1(!checked1)}>
          <Text style={[styles.checkbox, checked1 && styles.checked]}>✔</Text>
          <Text style={[styles.taskText, checked1 && styles.checkedText]}>
            Marque exames através da plataforma
          </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.task} onPress={() => setChecked2(!checked2)}>
          <Text style={[styles.checkbox, checked2 && styles.checked]}>✔</Text>
          <Text style={[styles.taskText, checked2 && styles.checkedText]}>
            Vá até a UBS mais próxima e realize exames
          </Text>
        </TouchableOpacity>

        <View style={styles.taskDisabled}>
          <Text style={styles.checkboxDisabled}>⬜</Text>
          <View>
            <Text style={styles.taskText}>Retorno médico</Text>
            <Text style={styles.status}>STATUS: Pendente de aprovação ℹ️</Text>
          </View>
        </View>
      </View>

      {/* Botão Concluído */}
      <TouchableOpacity style={styles.concluirButton}>
        <Text style={styles.concluirText}>CONCLUÍDO</Text>
      </TouchableOpacity>

      {/* Card de Pesquisa */}
      <TouchableOpacity style={styles.pesquisaCard}>
        <Text style={styles.pesquisaText}>GANHE +5 CAPIBAS</Text>
        <Text style={styles.pesquisaSubtitle}>
          Responda a pesquisa de satisfação a este serviço ➡
        </Text>
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
  title: { fontSize: 24, fontWeight: "bold", textAlign: "center", marginBottom: 10 },
  card: { backgroundColor: "#fff", padding: 15, borderRadius: 10, shadowColor: "#000", shadowOpacity: 0.1, shadowRadius: 5, marginBottom: 20 },
  desafioTitle: { fontSize: 16, fontWeight: "semibold", color: "#C62828", marginBottom: 10 },
  bonus: { flexDirection: "row", justifyContent: "space-between", backgroundColor: "#D81B60", padding: 8, borderRadius: 5, marginBottom: 10 },
  bonusText: { color: "#fff", fontWeight: "bold" },
  bonusCoins: { color: "#fff", fontWeight: "bold" },
  task: { flexDirection: "row", alignItems: "center", backgroundColor: "#E8F5E9", padding: 10, borderRadius: 5, marginBottom: 5 },
  taskDisabled: { flexDirection: "row", alignItems: "center", backgroundColor: "#E0E0E0", padding: 10, borderRadius: 5, marginBottom: 5 },
  checkbox: { width: 24, height: 24, textAlign: "center", marginRight: 10, fontSize: 18, color: "#388E3C", borderWidth: 1, borderColor: "#388E3C", borderRadius: 5 },
  checkboxDisabled: { width: 24, height: 24, textAlign: "center", marginRight: 10, fontSize: 18, color: "#777" },
  checked: { backgroundColor: "#388E3C", color: "#fff" },
  taskText: { fontSize: 14, flex: 1 },
  checkedText: { textDecorationLine: "line-through", color: "#777" },
  status: { fontSize: 12, color: "#666" },
  concluirButton: { marginTop: 20, backgroundColor: "#1976D2", padding: 12, borderRadius: 5, alignItems: "center" },
  concluirText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  pesquisaCard: { backgroundColor: "#FF9800", padding: 15, borderRadius: 10, marginTop: 20, alignItems: "center" },
  pesquisaText: { fontWeight: "bold", fontSize: 16, color: "#fff" },
  pesquisaSubtitle: { fontSize: 14, color: "#fff", marginTop: 5 },
});

export default challengeDetail;
