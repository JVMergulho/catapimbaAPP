import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import icons from '@/constants/icons';
import { Link, router } from 'expo-router';

export default function Quiz() {
  const [selectedOptions, setSelectedOptions] = useState<any[]>([]);
  const [question, setQuestion] = useState<string>('Bora deixar o app com a sua cara?');
  const [button, setButton] = useState<string>('Próxima');
  const [secondQuestion, setSecondQuestion] = useState<string>('Escolhe o que tu mais precisa e gosta!');
  
  const [options, setOptions] = useState<string[]>([
    'Saúde', 'Cidadania', 'Para turma', 'Meio Ambiente', 'Educação', 'Cultura', 'Esportes', 'Animais', 'Tecnologia'
  ]);

  const toggleOption = (option: any) => {
    if (selectedOptions.includes(option)) {
      setSelectedOptions(selectedOptions.filter((item) => item !== option));
    } else {
      setSelectedOptions([...selectedOptions, option]);
    }
  };

  const handleRedirect = () => {
    if (button === 'Finalizar') {
      router.push('/capiba'); // Redireciona para a tela "capiba"
    }
  };
  
  const handleContinue = () => {
    if (selectedOptions.length === 0) {
      return;
    }
    else if (options.includes('Saúde')) {
      setSelectedOptions([]);
      setQuestion('E sobre tua vivência, diz pra gente...');
      setSecondQuestion('Você se exercita com qual frequência semanal?');
      setOptions(['4 vezes ou mais', '1 a 3 vezes', 'Nenhuma']);
    }
    else if (options.includes('Nenhuma')) {
    setSelectedOptions([]);
    setQuestion('Você tem alguma condição crônica que precisa de acompanhamento regular? ');
    setSecondQuestion('Exemplos: pressão alta, diabetes, artrite, lúpus, doenças cardíacas, etc...');
    setOptions(['Sim, faço acompanhamento', 'Não sei ao certo / Não faço acompanhamento ', 'Não tenho']);
    }
    else if (options.includes('Não tenho')) {
      setSelectedOptions([]);
      setQuestion('Você participa de eventos culturais na cidade do Recife?');
      setSecondQuestion('');
      setOptions(['Sempre que posso', 'De vez em quando', 'Não, pois não sei onde encontrar','Não, pois não tenho interesse']);
      }
      else if (options.includes('Sempre que posso')) {
        setSelectedOptions([]);
        setQuestion('Você já precisou de assistência social, como Bolsa Família ou CRAS?');
        setSecondQuestion('');
        setOptions(['Sim, estou cadastrado', 'Não sei como funciona ou se preciso', 'Não preciso']);
        }
      else if (options.includes('Sim, estou cadastrado')) {
        setSelectedOptions([]);
        setQuestion('Como você costuma descartar lixo  comum e lixo eletrônico?');
        setSecondQuestion('(pilhas, baterias, celulares)');
        setOptions(['Levo em pontos de coleta', 'Jogo no lixo comum, no momento', 'Não tenho interesse']);
        setButton('Finalizar');
        }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={icons.logoConecta} style={styles.logo} />
      </View>
      <Text style={styles.question}>{question}</Text>
      <Text style={styles.question}>{secondQuestion}</Text>

      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option}
            style={[
              styles.optionButton,
              selectedOptions.includes(option) && styles.selectedOptionButton,
            ]}
            onPress={() => toggleOption(option)}
          >
            <Text
              style={[
                styles.optionText,
                selectedOptions.includes(option) && styles.selectedOptionText,
              ]}
            >
              {option}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity style={styles.continueButton} onPress={() => { handleContinue(); handleRedirect(); }}>
        <Text style={styles.continueText}>{button}</Text>
      </TouchableOpacity>
      <Link href="/capiba">
      {button !== 'Finalizar' ? (
        <Text style={styles.skipQuizText}>Pular quiz</Text>
      ) : null}
      </Link>
      <Image source={icons.wave} style={styles.wave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 240,
    height: 200,
    resizeMode: 'contain',
  },
  wave: {
    resizeMode: 'cover',
    width: '100%',
    zIndex: 0,
  },
  question: {
    marginHorizontal: 20,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#0057D9',
  },
  optionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 20,
  },
  optionButton: {
    borderColor: '#0057D9',
    borderWidth: 1,
    borderRadius: 20,
    paddingVertical: 4,
    paddingHorizontal: 20,
    margin: 8,
    backgroundColor: '#fff',
  },
  selectedOptionButton: {
    backgroundColor: '#0057D9',
  },
  optionText: {
    color: '#0057D9',
    fontSize: 16,
  },
  selectedOptionText: {
    color: '#fff',
  },
  continueButton: {
    backgroundColor: '#0057D9',
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 20,
    marginVertical: 20,
  },
  continueText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  skipQuizButton: {
    marginBottom: 30,
  },
  skipQuizText: {
    color: '#0057D9',
    fontWeight: '600',
    textDecorationLine: 'underline',
    fontSize: 18,
  },
});
