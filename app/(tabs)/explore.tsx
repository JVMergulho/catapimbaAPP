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
          <Text style={styles.profileName}>Fred Oslon Matos</Text>
          <Text style={styles.profileCpf}>123.456.789-10</Text>
          <TouchableOpacity style={styles.editButton}>
            <Ionicons name="pencil" size={14} color={Colors.lightBlue} />
            <Text style={styles.editText}> Editar informações</Text>
          </TouchableOpacity>
          <View style={styles.line}></View>
        </View>
        <Image source={images.qrCode} style={styles.qrCode} />
      </View>
      <Link href="/capiba">
      <View style={styles.highlightBox}>
      <Image source={icons.capiCoin} style={{ width: 24, height: 24, resizeMode: 'contain', }} />
        <Text style={styles.highlightText}> Capi-cidadão nível Ouro!</Text>
        <Image source={images.capiOuro} style={styles.capivaraIcon} />
      </View>
      </Link>
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
  highlightBox: { flexDirection: 'row', backgroundColor: Colors.lightBlue, margin:8,padding: 16, borderRadius: 10, alignItems: 'center', alignSelf: 'center', alignContent: 'center' , justifyContent: 'center' },
  highlightText: { color: 'white', fontWeight: 'bold', flex: 1, marginLeft: 10, fontSize: 16 },
  capivaraIcon: { width: 80, height: 80, resizeMode: 'contain', zIndex: 100 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', marginLeft: 20, marginTop: 10 },
  dataGrid: { flexDirection: 'row', flexWrap: 'wrap', paddingHorizontal: 10, marginTop: 10 },
  dataItem: { width: '45%', backgroundColor: '#f5f5f5', padding: 15, margin: 5, borderRadius: 10, flexDirection: 'row', alignItems: 'center' },
  dataText: { marginLeft: 10, color: '#1E5AC8', fontWeight: 'bold' },
  iconText: { fontSize: 18, fontWeight: 'bold', color: '#1E5AC8' },
  qrCode: { width: 52, height: 52, resizeMode: 'contain', marginBottom: 24 },
  line: { height: 1, backgroundColor: "gray", width: '125%', alignSelf: 'flex-start', margin:8  },
});

const dataOptions = [
  { name: 'Agendamentos', icon: <FontAwesome5 name="calendar" size={20} color={Colors.lightBlue} /> },
  { name: 'Favoritos', icon: <FontAwesome5 name="star" size={20} color={Colors.lightBlue} /> },
  { name: 'Empresas', icon: <FontAwesome5 name="cogs" size={20} color={Colors.lightBlue} /> },
  { name: 'Imóveis', icon: <FontAwesome5 name="home" size={20} color={Colors.lightBlue} /> },
  { name: 'Processos', icon: <FontAwesome5 name="file-alt" size={20} color={Colors.lightBlue} /> },
  { name: 'Receba Zap', icon: <FontAwesome5 name="whatsapp" size={20} color={Colors.lightBlue} /> },
  { name: 'Saúde', icon: <FontAwesome5 name="plus-circle" size={20} color={Colors.lightBlue} /> },
  { name: 'Solicitações', icon: <MaterialIcons name="request-page" size={20} color={Colors.lightBlue} /> },
  { name: 'Meus dependentes', icon: <FontAwesome5 name="users" size={20} color={Colors.lightBlue} /> },
];
