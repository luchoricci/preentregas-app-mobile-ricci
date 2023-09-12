import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import Styles from "./style";

const Button = ({ onPress }) => {
  return (
    <View style={Styles.buttonContainer}>
      <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
        <Text style={Styles.buttonText}>Agregar</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
