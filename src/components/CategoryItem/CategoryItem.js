import {Text, Pressable } from "react-native";
import React from "react";
import CTStyles from "./CIStyle";

const CategoryItem = ({ item, navigation }) => {
  // console.log(item);

  return (

      <Text style={CTStyles.categoryText}>{item}</Text>
  );
};



export default CategoryItem;
