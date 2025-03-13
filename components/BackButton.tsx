import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import icons from '@/constants/icons';
import colors from '@/constants/Colors';

const BackButton = ({isWhite}: {isWhite: boolean}) => {
    const navigation = useNavigation();

  return (
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Image source={icons.back} style={styles.backIcon}/>
          <Text style={[styles.backText, { color: isWhite ? '#fff' : colors.textBlue }]}>Voltar</Text>
        </View>
      </TouchableOpacity>
  )
}

export default BackButton

const styles = StyleSheet.create({
    backButton: { 
        alignSelf: "flex-start", 
        marginBottom: 26 },
    backText: { 
        fontSize: 16, 
        flexDirection: "row", 
        alignItems: "center" },
    backIcon: { 
        width: 18, 
        height: 18, 
        marginRight: 5, 
        resizeMode: 'contain' },
})