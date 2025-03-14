// Componente Botão de Desafio
import icons from '@/constants/icons';
import { View, Image, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { serviceType, ServiceType } from '@/constants/serviceType';
import { Link, useNavigation } from 'expo-router';

export function ChallengeButton({ title, subtitle, value, type }: { title: string; subtitle: string; value: number, type: ServiceType }): JSX.Element {
  const service = serviceType[type as keyof typeof serviceType] ?? { color: "#000", icon: icons.ambiente, arrow: icons.arrowGreen }; // Fallback para segurança
  const navigation = useNavigation();

  return(
  <Link href='/challengeDetail' style={[styles.challengeButton, { backgroundColor: "#F9F8F5" }]}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
        <Image source={service.icon} style={{width: 38, height: 38, resizeMode: 'contain'}}/>
        <View>
          <Text style={{color: service.color, fontWeight: 'bold'}}>
            {title} (+ {value} <Image style={{width: 14, height: 14, marginTop: 4}} source={icons.capiCoin} />)
          </Text>
          <Text style={{color: service.color, fontSize: 12, marginTop: 4}}>{subtitle}</Text>
        </View>
      </View>
      
      <Image source={service.arrow} style={{width: 14, height: 14}}/>
    </View>

  </Link>
  )
}

export function ChallengeButtonLocation({ title, subtitle, value, type }: { title: string; subtitle: string; value: number, type: ServiceType }): JSX.Element {
  const service = serviceType[type as keyof typeof serviceType] ?? { color: "#000", icon: icons.ambiente, arrow: icons.arrowGreen }; // Fallback para segurança
  const navigation = useNavigation();

  return(
  <Link href='/challengeDetailLocation' style={[styles.challengeButton, { backgroundColor: "#F9F8F5" }]}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
      <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
        <Image source={service.icon} style={{width: 38, height: 38, resizeMode: 'contain'}}/>
        <View>
          <Text style={{color: service.color, fontWeight: 'bold'}}>
            {title} (+ {value} <Image style={{width: 14, height: 14, marginTop: 4}} source={icons.capiCoin} />)
          </Text>
          <Text style={{color: service.color, fontSize: 12, marginTop: 4}}>{subtitle}</Text>
        </View>
      </View>
      
      <Image source={service.arrow} style={{width: 14, height: 14}}/>
    </View>

  </Link>
  )
}

const styles = StyleSheet.create({
    challengeButton: {
        padding: 15,
        borderRadius: 10,
        marginVertical: 5,
        width: '100%',
      },
});