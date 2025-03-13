import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';

const Feirinha = () => {
  const [selectedFavorite, setSelectedFavorite] = useState([false, false, false, false]);

  const toggleFavorite = (index) => {
    const newFavorites = [...selectedFavorite];
    newFavorites[index] = !newFavorites[index];
    setSelectedFavorite(newFavorites);
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Text style={styles.backButtonText}>← Voltar</Text>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Feirinha</Text>

        <View style={styles.levels}>
          <Text style={styles.levelText}>Capiba nível Bronze</Text>
          <Text style={styles.levelText}>Capiba nível Prata</Text>
          <View style={styles.selectedLevel}>
            <Text style={styles.selectedLevelText}>Capiba nível Ouro</Text>
          </View>
        </View>
      </View>

      {/* Moedas */}
      <View style={styles.coinContainer}>
        <Image source={require('../../assets/images/moeda.png')} style={styles.coinImage} />
        <Text style={styles.coinText}>320</Text>
      </View>

      {/* Lista de Ofertas */}
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.sectionTitle}>Disponíveis para você</Text>

        {/* Produtos */}
        <View style={styles.productsContainer}>
          {[
            { name: "R$ 15,00 na 99", price: "300 capibas", stock: "600 unidades", image: require('../../assets/images/99.png') },
            { name: "R$ 20,00 na VEM", price: "550 capibas", stock: "1245 unidades", image: require('../../assets/images/vem.png') },
            { name: "R$ 15,00 na Assaí", price: "300 capibas", stock: "600 unidades", image: require('../../assets/images/assai.png') },
            { name: "R$ 15,00 na Tembici", price: "300 capibas", stock: "600 unidades", image: require('../../assets/images/tembici.png') },
          ].map((item, index) => (
            <View key={index} style={styles.productCard}>
              <View style={styles.productImageContainer}>
                <Image source={item.image} style={styles.productImage} />
                <TouchableOpacity onPress={() => toggleFavorite(index)} style={styles.favoriteButton}>
                  <Text style={[styles.favoriteIcon, selectedFavorite[index] && styles.favoriteSelected]}>★</Text>
                </TouchableOpacity>
              </View>

              <Text style={styles.productTitle}>{item.name}</Text>
              <View style={styles.productInfo}>
                <Image source={require('../../assets/images/moeda.png')} style={styles.smallIcon} />
                <Text style={styles.priceText}>{item.price}</Text>
              </View>
              <View style={styles.stockContainer}>
                <Text style={styles.stockText}>{item.stock}</Text>
                <Text style={styles.arrowIcon}>→</Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

// Estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#1658C8',
    paddingVertical: 24,
    paddingHorizontal: 24
  },
  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: 14,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
    textAlign: 'center',
    marginVertical: 12,
  },
  levels: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 12,
  },
  levelText: {
    color: 'white',
    fontSize: 14,
    fontWeight: '600',
  },
  selectedLevel: {
    backgroundColor: 'white',
    paddingVertical: 4,
    paddingHorizontal: 12,
    borderRadius: 18,
  },
  selectedLevelText: {
    color: '#1658C8',
    fontSize: 14,
    fontWeight: '600',
  },
  coinContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1658C8',
    paddingVertical: 12,
    borderRadius: 24,
    marginTop: -12,
    alignSelf: 'center',
    width: '40%',
  },
  coinImage: {
    width: 30,
    height: 30,
  },
  coinText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginLeft: 8,
  },
  scrollViewContent: {
    padding: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: 'black',
    marginBottom: 16,
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  productCard: {
    width: '48%',
    backgroundColor: '#FDF8EC',
    borderRadius: 12,
    padding: 8,
    marginBottom: 16,
  },
  productImageContainer: {
    position: 'relative',
  },
  productImage: {
    width: '100%',
    height: 80,
    borderRadius: 8,
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 4,
  },
  favoriteIcon: {
    fontSize: 16,
    color: 'gray',
  },
  favoriteSelected: {
    color: 'blue',
  },
  productTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#D69201',
    marginVertical: 8,
  },
  productInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  smallIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  priceText: {
    fontSize: 12,
    fontWeight: '600',
    color: '#D69201',
  },
  stockContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
  },
  stockText: {
    fontSize: 10,
    fontWeight: '600',
    color: '#D69201',
  },
  arrowIcon: {
    fontSize: 14,
    fontWeight: '600',
    color: '#D69201',
  },
});

export default Feirinha;
