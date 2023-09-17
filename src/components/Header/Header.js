import { View, Text, Pressable } from "react-native";
import React from "react";
import HeaderStyles from "./HeaderStyle";


const Header = ({ title }) => {
  return (
    <View style={HeaderStyles.container}>
      <View>
        <Pressable style={HeaderStyles.headerButton}>
          <Text> Back </Text>
        </Pressable>
      </View>
      <View>
        <Text style={HeaderStyles.headerText}> Header </Text>
      </View>
    </View>
  );
};


export default Header;
