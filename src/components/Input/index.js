import { View, TextInput } from "react-native";
import React from "react";
import styles from "./style";

const Input = ({ onChangeText, value }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => onChangeText(text)}
      />
    </View>
  );
};
export default Input;
