import { Link } from 'expo-router';
import { useState } from 'react';
import { StyleSheet, SafeAreaView, FlatList, Text, View, Button } from 'react-native';
import * as Progress from 'react-native-progress'; // Biblioteca para a barra de progresso

const DATA = ['Recicle', 'Reutilize', 'Reduza', 'Recuse', 'Repense'];

export default function HomeScreen() {
  const [progress, setProgress] = useState(0.3); // Estado inicial da barra

  // Simula o carregamento ao clicar no botão (você pode substituir isso pela sua lógica)
  const increaseProgress = () => {
    setProgress((prev) => (prev < 1 ? prev + 0.1 : 1)); // Aumenta até 100%
  };

  return (
    <SafeAreaView style={styles.container}>

      <View>
        <Text style={styles.scoreText}>$ {(progress * 1000).toFixed(0)}</Text>

        <Progress.Bar progress={progress} 
          width={300} 
          height={40}
          color="#4CAF50" 
          borderRadius={10}
          style={styles.progressBar} />
      </View>

      <View style={styles.progressWrapper}>
        <ProgressToGoal progress={0.6} />
        <ProgressToGoal progress={0.4} />
        <ProgressToGoal progress={0.1} />
      </View>

      <View> 
        <View style={styles.titleContainer}>
          <Text style={styles.text}>Serviços Sugeridos</Text>
        </View>

        <View>
          <View style={styles.listsArea}>
            <ScrollList DATA={DATA} />
            <ScrollList DATA={DATA} />
          </View>
        </View>
      </View>

    </SafeAreaView>
  );
}

function ProgressToGoal({ progress }: { progress: number }) {
  return(
    <Progress.Circle 
    size={80}         
    progress={progress} 
    color="#4CAF50"  
    borderWidth={2}  
    thickness={6}    
    showsText={true}  
    textStyle={{ fontSize: 18 }} 
  />
  )
}

function ScrollList(
  { DATA }: { DATA: string[] },
) {
  return (
    <FlatList
      data={DATA}
      renderItem={({ item }) => (
        <Link style={styles.item} href = "/service">
          <Text style={styles.itemText}>{item}</Text>
        </Link>
      )}
      keyExtractor={(item) => item}
      horizontal={true} 
      showsHorizontalScrollIndicator={false} 
      contentContainerStyle={styles.listContainer}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  scoreText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  progressBar: {
    marginBottom: 20,
  },
  listContainer: {
    paddingHorizontal: 10,
  },
  item: {
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: '#f0f0f0',
    paddingVertical: 15,
    height: 136,
    width: 136,
    paddingHorizontal: 20,
    marginHorizontal: 10, // Adiciona espaçamento entre os itens
    borderRadius: 8,
  },
  itemText: {
    fontSize: 18,
    color: '#555',
  },
  listsArea: {
    gap: 20,
  },
  progressWrapper: {
    flexDirection: 'row', 
    justifyContent: 'center',
    alignItems: 'center', 
    gap: 20, 
  }
});
