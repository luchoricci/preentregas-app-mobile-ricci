import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import { useWindowDimensions } from "react-native";
import { Dimensions } from "react-native";
import PIStyles from "./PIStyle";



const ProductItem = ({ item, navigation}) => {
  const { width } = useWindowDimensions();

  return (
    <View >
       <Pressable style={PIStyles.container} onPress={() => navigation.navigate("productdetail", {item: item })}>
        <Text style={width < 300 ? PIStyles.textMin : PIStyles.text}>
          {item.name}
        </Text>
        <Text style={width < 300 ? PIStyles.textMin : PIStyles.text}>
         ${item.price}
        </Text>
      

      <Image
        style={PIStyles.image}
        height={80}
        width={80}
        source={{ uri: item.image }}
        resizeMode="cover"
      />
      </Pressable>
    </View>
  );
};



export default ProductItem;
