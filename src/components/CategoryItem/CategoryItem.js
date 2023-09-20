import { Text, Pressable } from "react-native";
import React from "react";
import CTStyles from "./CIStyle";

const CategoryItem = ({ item, navigation }) => {


  return (
    <Pressable onPress={() => navigation.navigate("products", {item: item })} >
      <Text style={CTStyles.categoryText}>{item}</Text>
    </Pressable>
  );
};



export default CategoryItem;
