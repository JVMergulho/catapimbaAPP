import React, { useEffect, useState } from "react";
import { Text, View, ActivityIndicator, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { SafeAreaView } from "react-native-safe-area-context";
import BackButton from "@/components/BackButton"; 
import Colors from "@/constants/Colors";

const MapScreen = () => {
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await fetch(
        "http://dados.recife.pe.gov.br/api/3/action/datastore_search?resource_id=78fccbb7-b44d-49a8-8c82-bcc1dc8463b4"
      );
      const result = await response.json();

      console.log("api");
      

      if (result.success && result.result.records) {
        const formattedLocations = result.result.records.map((record) => ({
          latitude: parseFloat(record.latitude),
          longitude: parseFloat(record.longitude),
          title: record.polo,
        }));

        setLocations(formattedLocations);
        console.log("sucesso locais");
      } else {
        console.error("Erro na resposta da API", result);
      }
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      {/* Botão Voltar */}
      <BackButton isWhite={false} />

      {/* Título */}
      <Text style={styles.title}>Próximo a Você</Text>

      {/* Título */}
      <Text style={styles.subtitle}>Academia Recife</Text>

      {loading ? (
        <ActivityIndicator size="large" color="blue" style={{ flex: 1 }} />
      ) : (
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: -8.05428,
            longitude: -34.8813,
            latitudeDelta: 0.1,
            longitudeDelta: 0.1,
          }}
        >
          {locations.map((location, index) => (
            <Marker
              key={index}
              coordinate={{
                latitude: location.latitude,
                longitude: location.longitude,
              }}
              title={location.title}
            />
          ))}
        </MapView>
      )}
    </View>
    
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: { padding: 20, backgroundColor: "#fff", flexGrow: 1, paddingTop: 40 },
  subtitle: { fontSize: 16, fontWeight: "bold", textAlign: "center", marginBottom: 28, color: Colors.textRed},
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
