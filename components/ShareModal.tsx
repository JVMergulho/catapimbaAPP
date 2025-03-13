import React, { useState } from 'react';
import { View, Text, Modal, TouchableOpacity, Share, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ShareModal = () => {
  const [modalVisible, setModalVisible] = useState(true);

  const onShare = async () => {
    try {
      const result = await Share.share({
        message:
          'Participe comigo desse desafio incrível para transformar a cidade de Recife! 🌍💡',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // Compartilhado com atividade específica
        } else {
          // Compartilhado sem atividade específica
        }
      } else if (result.action === Share.dismissedAction) {
        // Modal fechado sem compartilhamento
      }
    } catch (error) {
    }
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible);
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Desafio lançado! 🚀</Text>
          <Text style={styles.subtitle}>
            Convide seus amigos para participar com você e juntos vamos transformar a cidade do Recife! 🌍💡
          </Text>
          <TouchableOpacity style={styles.shareButton} onPress={onShare}>
            <Text style={styles.shareText}>Convidar amigos</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.copyLink}>
            <Ionicons name="link" size={18} color="black" />
            <Text style={styles.linkText}>Copiar link</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: 325,
    height: 288,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 20,
  },
  shareButton: {
    backgroundColor: '#007bff',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
  },
  shareText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  copyLink: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  linkText: {
    marginLeft: 5,
  },
});

export default ShareModal;
