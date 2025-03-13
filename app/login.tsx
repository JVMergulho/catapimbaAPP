import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  ImageBackground,
  StyleSheet,
  Alert,
} from "react-native";
import { useRouter } from "expo-router";
import images from '@/constants/images';
import Colors from '@/constants/Colors';
import { ScrollView } from "react-native-gesture-handler";

export default function LoginScreen() {
  const router = useRouter();
  const [cpf, setCpf] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = () => {
    if (cpf && senha) {
      router.replace("/quiz"); 
    } else {
        Alert.alert("Campos Inválidos", "Preencha CPF e Senha antes de continuar.");
    }
  };

  return (
    <ImageBackground source={images.loginBg} style={styles.background}>
      <View style={styles.container}>
        <Image source={images.conectaLogin} style={styles.logo} />
        <View style={styles.inputContainer}>
          <Text style={styles.label}>CPF</Text>
          <TextInput
            style={styles.input}
            value={cpf}
            onChangeText={setCpf}
          />
          <Text style={styles.label}>Senha</Text>
          <TextInput
            style={styles.input}
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: "contain",
  },
  inputContainer: {
    width: "100%",
    height: "50%",
    alignContent:'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    color:  Colors.lightBlue,
    marginBottom: 5,
    alignSelf: 'flex-start',
  },
  input: {
    width: "100%",
    backgroundColor: "#D6E3F6",
    padding: 12,
    borderRadius: 8,
    marginBottom: 15,
  },
  button: {
    backgroundColor: Colors.lightBlue,
    paddingVertical: 16,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: "center",
    width: "50%",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
