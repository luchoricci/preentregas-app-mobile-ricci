import {
  View,
  Text,
  FlatList,
  Image,
  SafeAreaView,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import Search from "../components/Search";
import Header from "../components/Header";
import { products } from "../data/products";
import ProductItem from "../components/ProductItem";
import Categories from "../../components/Categories";

const Store = () => {
 
  return (
    <View>
      <Header/>
      <Categories/>


    </View>
  
  );
};

export default Store;