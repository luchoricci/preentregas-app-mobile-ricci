import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import React from "react";
import { colors } from "../theme/colors";
import { useWindowDimensions } from "react-native";
import { Dimensions } from "react-native";
import PIStyles from "./PIStyle";

const ProductItem = ({ item, navigation }) => {
  const { height, width } = useWindowDimensions();

  return (
    <View style={PIStyles.container}>
      <Pressable onPress={() => navigation.navigate("productDetail")}>
        <Text style={width < 300 ? PIStyles.textMin : PIStyles.text}>
          {item.title}
        </Text>
      </Pressable>

      <Image
        style={PIStyles.image}
        height={80}
        width={80}
        source={{ uri: item.images[0] }}
        resizeMode="cover"
      />
    </View>
  );
};



export default ProductItem;
