import { View, Text, Image, SafeAreaView, Pressable,Button } from 'react-native'
import React from 'react'
import PDStyles from './PDStyle'
import { ProductsList } from '../../Data/ProductList'
import Header from '../../components/Header/Header'

const ProductDetail = ({route, navigation}) => {
    const { item } = route.params;

    const initialProd = ProductsList[item]
console.log(ProductsList)

    return (
        <View >
            <Header title={"Detail"} navigation={navigation} />
            <View style={PDStyles.ProductContainer}>
                <Text style={PDStyles.name}>{initialProd.name}</Text>
                <Image style={PDStyles.image}
                    source={{
                        uri: initialProd.image,
                    }}
                />
                <Text style={PDStyles.description}>{initialProd.description}</Text>
                <Text>Stock:{initialProd.stock}</Text>
                <Text style={PDStyles.price}>${initialProd.price}</Text>
            </View>
            <Button
          color="red"
          title="add to cart"
        />


        </View>
    )
}

export default ProductDetail