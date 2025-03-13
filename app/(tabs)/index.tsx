import { useState } from 'react';
import Colors from '@/constants/Colors';
import { Image, StyleSheet, Text, View, TouchableOpacity, ScrollView, Linking } from 'react-native';
import icons from '@/constants/icons';
import { Link } from 'expo-router';

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

const Destaques = ['ADOTA PET','ACADEMIA RECIFE', 'GO RECIFE', 'EMBARQUE DIGITAL', 'SE MEXE COMIGO']

export default function Home() {
  const handlePress = (url: string) => {
    Linking.openURL(url);
  };

  const [showCapiba, setShowCapiba] = useState(true);
  const [points, setPoints] = useState(320);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={() => setShowCapiba(!showCapiba)}>
  {showCapiba ? (
    <Image source={icons.eye} style={styles.eyeImage} />
  ) : (
    <Image source={icons.eyeSlash} style={styles.eyeImage} />
  )}
         </TouchableOpacity>
        </View>
        <Text style={styles.greeting}>Bem-vindo,</Text>
        <Text style={styles.userName}>Fred Oslon</Text>
        {showCapiba && (
          <View style={styles.coinContainer}>
            <Image source={icons.shinyCoin} style={styles.coinIcon} />
            <Link href="/capiba">
              <Text style={styles.coinAmount}>{points}</Text>
            </Link>
              <Image source={icons.backWhite} style={{ transform: [{ rotate: '180deg' }], marginLeft: 8 }}/>
          </View>
        )}
          <View style={styles.yellowLine}></View>
      </View>
      <Text style={styles.sectionTitle}>Meus Destaques</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}  contentContainerStyle={{ flexGrow: 1 }} >
        <View style={styles.highlightContainer}>
        {Array.from({ length: 5 }).map((_, index) => (
          <TouchableOpacity  key={index}>
            <View style={styles.highlightBox}>
              <Text style={styles.textHighlight}>{Destaques[index]}</Text>
            </View>
          </TouchableOpacity>
        ))}
        </View>
      </ScrollView>
      <Text style={styles.sectionTitle}>Públicos-Alvo</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} >
        <View style={styles.iconContainer}>
          {ICONS1.map((icon) => (
            <TouchableOpacity key={icon.id}>
              <View style={styles.iconBox}>
                <Image source={icon.icon} style={styles.iconImage} />
                <Text style={styles.iconLabel}>{icon.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}  contentContainerStyle={{ flexGrow: 1 }} >
        <View style={styles.iconContainer}>
          {ICONS2.map((icon) => (
            <TouchableOpacity key={icon.id} >
              {/* onPress={() => handlePress(icon.link)} */}
              <View style={styles.iconBox}>
                <Image source={icon.icon} style={styles.iconImage} />
                <Text style={styles.iconLabel}>{icon.name}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: Colors.lightBlue,
    paddingTop: 48,
  },
  eyeImage: {
    width: 32,
    height: 32,
    resizeMode: 'contain',
    marginRight: 16,
  },
  yellowLine: {
    height: 4,
    backgroundColor: Colors.capiYellow,
    width: '80%',
    alignSelf: 'flex-start',
  },
  headerTop: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 16,
    paddingRight: 8,
  },
  greeting: {
    fontSize: 20,
    color: 'white',
    paddingLeft: 16,
  },
  userName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    paddingLeft: 16,
    paddingBottom: 12,
  },
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: -20,
    zIndex: 100,
  },
  coinIcon: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
  },
  textHighlight:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    padding: 8,
    textAlign: 'center',
  },
  coinAmount: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.lightBlue,
    marginVertical: 16,
    marginLeft: 16,
  },
  highlightContainer: {
    flexDirection: 'row',
  },
  highlightBox: {
    width: 150,
    height: 100,
    backgroundColor: Colors.lightBlue,
    marginLeft: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  iconContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 0,
  },
  iconBox: {
    width: 120, 
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
    borderWidth: 3,
    borderColor: Colors.lightBlue,
    marginRight: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  iconImage: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  iconLabel: {
    fontSize: 12,
    marginTop: 8,
    color: Colors.lightBlue,
    fontWeight: 'bold',
  },
});
