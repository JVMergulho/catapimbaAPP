import { Link } from 'expo-router';
import { StyleSheet, SafeAreaView, FlatList, Text, View } from 'react-native';

const DATA = ['Recicle', 'Reutilize', 'Reduza', 'Recuse', 'Repense'];

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.text}>Hello, world!</Text>
      </View>

      <View style={styles.listsArea}>
        <ScrollList DATA={DATA} />
        <ScrollList DATA={DATA} />
      </View>

    </SafeAreaView>
  );
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
    backgroundColor: '#fff',
    paddingTop: 50,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
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
});
