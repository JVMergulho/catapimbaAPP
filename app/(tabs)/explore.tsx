import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons, FontAwesome5, MaterialIcons } from '@expo/vector-icons';
import images from '@/constants/images';
import icons from '@/constants/icons';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';

export default function Perfil() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}/>
      <View style={styles.profileContainer}>
        <Image source={images.profilePic} style={styles.profileImage} />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>Júlia Maya</Text>
          <Text style={styles.profileCpf}>123.456.789-10</Text>
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="pencil" size={14} color={Colors.lightBlue} />
            <Text style={styles.editText}> Editar informações</Text>
          </TouchableOpacity>
          <View style={styles.line}></View>
        </View>
        <Image source={images.qrCode} style={styles.qrCode} />
      </View>
        <View style={styles.highlightBox}>
          <Image source={icons.capiCoin} style={{ width: 30, height: 30, resizeMode: 'contain' }} />
          <Link href="/capiba">
            <Text style={styles.highlightText}>
              Capi-cidadão nível Ouro!  {"\n"}
              <FontAwesome5 name="question-circle" size={14} color="fff"/>
            </Text>
          </Link>
          <Image source={images.capiOuro} style={styles.capivaraIcon} />
        </View>
      <Text style={styles.sectionTitle}>Meus Dados</Text>
      <View style={styles.dataGrid}>
        {dataOptions.map((item, index) => (
          <TouchableOpacity key={index} style={styles.dataItem}>
            {item.icon}
            <Text style={styles.dataText}>{item.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  header: { backgroundColor: Colors.lightBlue, padding: 40 },
  profileContainer: { flexDirection: 'row', alignItems: 'center', padding: 20, marginRight: 8 },
  profileImage: { width: 100, height: 100, borderRadius:50, borderWidth: 3, borderColor: Colors.capiYellow, },
  profileInfo: { flex: 1, marginLeft: 10 },
  profileName: { fontSize: 20, fontWeight: 'bold' },
  profileCpf: { color: '#666', fontSize: 16  },
  editButton: { flexDirection: 'row', alignItems: 'center', marginTop: 5 },
  editText: { color: Colors.lightBlue, fontSize: 14 },
  highlightText: { color: 'white', fontWeight: 'bold', flex: 1, marginLeft: 10, fontSize: 18, lineHeight: 22 },
  highlightBoxContainer: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
  },
  highlightBox: {
    flexDirection: 'row',
    backgroundColor: Colors.lightBlue,
    padding: 16,
    borderRadius: 10,
    paddingBottom: 35, 
    paddingTop: 45, 
    marginHorizontal: 20,
  },
  capivaraIcon: {
    width: 135,
    height: 135,
    resizeMode: 'contain',
    position: 'absolute',
    top: -10, 
    right: -2, 
    zIndex: 10, 
  },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginLeft: 20, marginTop: 10 },
  dataGrid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10, marginTop: 10 },
  dataItem: { width: '45%', backgroundColor: '#f5f5f5', padding: 18, margin: 5, borderRadius: 10, flexDirection: 'row', alignItems: 'center' },
  dataText: { marginLeft: 10, color: '#1E5AC8', fontWeight: 'bold' },
  iconText: { fontSize: 18, fontWeight: 'bold', color: '#1E5AC8' },
  qrCode: { width: 52, height: 52, resizeMode: 'contain', marginBottom: 24 },
  line: { height: 1, backgroundColor: "gray", width: '125%', alignSelf: 'flex-start', margin:8  },
});

const dataOptions = [
  { name: 'Agendamentos', icon: <FontAwesome5 name="calendar" size={20} color={Colors.lightBlue} /> },
  { name: 'Favoritos', icon: <FontAwesome5 name="star" size={20} color={Colors.lightBlue} /> },
  { name: 'Empresas', icon: <Ionicons name="receipt-outline" size={20} color={Colors.lightBlue} /> },
  { name: 'Imóveis', icon: <Ionicons name="home-outline" size={20} color={Colors.lightBlue} /> },
  { name: 'Processos', icon: <FontAwesome5 name="file-alt" size={20} color={Colors.lightBlue} /> },
  { name: 'Receba Zap', icon: <FontAwesome5 name="whatsapp" size={20} color={Colors.lightBlue} /> },
  { name: 'Saúde', icon:  <Ionicons name="add-circle-outline" size={22} color={Colors.lightBlue}/>},
  { name: 'Solicitações', icon: <Ionicons name="mail-open-outline" size={20} color={Colors.lightBlue} /> },
  { name: 'Meus dependentes', icon: <Ionicons name="people-outline" size={20} color={Colors.lightBlue} />  },
];
