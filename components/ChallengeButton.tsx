// Componente Botão de Desafio
import icons from '@/constants/icons';
import { View, Image, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { serviceType, ServiceType } from '@/constants/serviceType';

export function ChallengeButton({ title, subtitle, type }: { title: string; subtitle: string; type: ServiceType }): JSX.Element {
  const service = serviceType[type as keyof typeof serviceType] ?? { color: "#000", icon: icons.ambiente, arrow: icons.arrowGreen }; // Fallback para segurança

  return(
  <TouchableOpacity style={[styles.challengeButton, { backgroundColor: "#F9F8F5" }]}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
    <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
      <Image source={service.icon} style={{width: 38, height: 38, resizeMode: 'contain'}}/>
      <View>
        <Text style={{color: service.color, fontWeight: 'bold'}}>
          {title} (+ 10 <Image style={{width: 14, height: 14, marginTop: 4}} source={icons.capiCoin} />)
        </Text>
        <Text style={{color: service.color, fontSize: 12, marginTop: 4}}>{subtitle}</Text>
      </View>
    </View>
    <Image source={service.arrow} style={{width: 14, height: 14}}/>
    </View>

  </TouchableOpacity>
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