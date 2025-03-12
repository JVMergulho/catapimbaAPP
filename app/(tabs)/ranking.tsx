import { useState } from 'react';
import Colors from '@/constants/Colors';
import { Image, StyleSheet, SafeAreaView, Text, View, TouchableOpacity, FlatList, Linking } from 'react-native';
import icons from '@/constants/icons';

const ICONS1 = [
  { id: 1, name: 'Mulher', icon: icons.mulher, link: 'https://www.google.com' },
  { id: 2, name: 'Idoso', icon: icons.idoso, link: 'https://www.google.com' },
  { id: 3, name: 'PCD', icon: icons.pcd, link: 'https://www.google.com' },
  { id: 4, name: 'Pet', icon: icons.pet, link: 'https://www.google.com' },
  { id: 5, name: 'Turista', icon: icons.turista, link: 'https://www.google.com' },
];
const ICONS2 = [
  { id: 6, name: 'Servidor', icon: icons.servidor, link: 'https://www.google.com' },
  { id: 7, name: 'Empresa', icon: icons.empresa, link: 'https://www.google.com' },
  { id: 8, name: 'Criança', icon: icons.crianca, link: 'https://www.google.com' },
  { id: 9, name: 'Jovem', icon: icons.jovem, link: 'https://www.google.com' },
  { id: 10, name: 'Geral', icon: icons.geral, link: 'https://www.google.com' },
];

export default function Ranking() {
  
  const handlePress = (url: string) => {
    Linking.openURL(url); 
  };
  
  const [capibas, setCapibas] = useState(320); 

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Bem-vinda,</Text>
        <Text style={styles.userName}>Júlia Maya</Text>
        <View style={styles.capibasContainer}>
          <Image source={icons.capiCoin} style={styles.moedaIcon} />
          <Text style={styles.capibasText}>{capibas}</Text>
        </View>
      </View>

      <View style={styles.highlightsContainer}>
        <Text style={styles.sectionTitle}>Meus Destaques</Text>
        <View style={styles.highlights}>
          <View style={styles.highlightBox}></View>
          <View style={styles.highlightBox}></View>
          <View style={styles.highlightBox}></View>
        </View>
      </View>

      <View style={styles.audienceContainer}>
        <Text style={styles.sectionTitle}>Públicos-Alvo</Text>
        <FlatList
          data={ICONS1}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.iconButton}
             // onPress={() => handlePress(item.link)} 
            >
              <Image source={item.icon} style={styles.iconImage} />
              <Text style={styles.iconText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          />
          <FlatList
          data={ICONS2}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.iconButton}
             // onPress={() => handlePress(item.link)} 
            >
              <Image source={item.icon} style={styles.iconImage} />
              <Text style={styles.iconText}>{item.name}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item.id.toString()}
          horizontal={true}
          />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: Colors.lightBlue, 
    marginTop: 20,
    alignItems: 'flex-start',
  },
  welcomeText: {
    fontSize: 18,
    color: '#fff',
  },
  userName: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  capibasContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  moedaIcon: {
    width: 50,
    height: 50,
  },
  capibasText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 10,
    color: '#fff',
  },
  highlightsContainer: {
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: Colors.lightBlue,
  },
  highlights: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  highlightBox: {
    width: 100,
    height: 100,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
  },
  audienceContainer: {
    marginTop: 30,
  },
  iconButton: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    width: 100,
    height: 100,
    borderRadius: 10,
    backgroundColor: '#fff',
    borderColor: Colors.lightBlue,
    borderWidth: 2,
  },
  iconImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  iconText: {
    marginTop: 5,
    fontSize: 16,
    color: Colors.lightBlue,
    fontWeight: 'bold',
  },
});
