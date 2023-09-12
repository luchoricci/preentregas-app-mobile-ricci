import { View } from "react-native";
import React, { useState } from "react";
import Styles from "./style";
import Input from "../../components/Input";
import Button from "../../components/Button/button";
import List from "../../components/List";
import Modal from "../../components/ModalConfirmation";

const Home = () => {
  const [input, setInput] = useState("");
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const addNewPlace = () => {
    if (input === "") return;
    setPlaces([...places, { name: input, id: Date.now() }]);
    setInput("");
  };

  const onConfirmDeletion = (id) => {
    const filteredPlaces = places.filter((item) => item.id !== id);
    setPlaces(filteredPlaces);
    setModalVisible(false);
    setSelectedPlace(null);
  };

  const selectPlace = (item) => {
    setSelectedPlace(item);
    setModalVisible(true);
  };

  return (
    <View style={Styles.container}>
      <View style={Styles.containerAddItem}>
        <Input onChangeText={setInput} value={input} />
        <Button onPress={addNewPlace} />
      </View>
      <View>
        <List data={places} selectPlace={selectPlace} />
      </View>
      <Modal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        selectedPlace={selectedPlace}
        onConfirmDeletion={onConfirmDeletion}
      />
    </View>
  );
};

export default Home;
