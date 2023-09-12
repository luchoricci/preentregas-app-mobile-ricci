import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./style";

const Item = ({ data, selectPlace }) => {
  return (
    <View style={styles.itemContainer}>
      <TouchableOpacity onPress={() => selectPlace(data)}>
        <Text style={styles.itemText}>{data.name}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Item;
