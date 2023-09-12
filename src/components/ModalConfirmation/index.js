import { View, Text, Pressable, Modal } from "react-native";
import React from "react";
import styles from "./style";

const ModalConfirmation = ({
  modalVisible,
  setModalVisible,
  onConfirmDeletion,
  selectedPlace,
}) => {
  return (
    <Modal animationType="slide" transparent={true} visible={modalVisible}>
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Text style={styles.modalTextTitle}>
            ¿Realmente desea eliminar el siguiente item?
          </Text>
          <Text style={styles.modalText}>{selectedPlace?.name}</Text>
          <View style={styles.containerButtons}>
            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.textStyle}>Cancelar</Text>
            </Pressable>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => onConfirmDeletion(selectedPlace?.id)}
            >
              <Text style={styles.textStyle}>Eliminar</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default ModalConfirmation;
