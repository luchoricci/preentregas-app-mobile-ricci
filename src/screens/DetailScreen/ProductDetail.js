import { View, Text, Image, SafeAreaView, Pressable,Button } from 'react-native'
import React from 'react'
import PDStyles from './PDStyle'

import Header from '../../components/Header/Header'

const ProductDetail = ({route,navigation}) => {
   
    const { item } = route.params;
    const ProdSelected = item


    return (
        <View >
            <Header title={"Detail"} navigation={navigation} />
            <View style={PDStyles.ProductContainer}>
                <Text style={PDStyles.name}>{ProdSelected.name}</Text>
                <Image style={PDStyles.image}
                    source={{
                        uri: ProdSelected.image,
                    }}
                />
                <Text style={PDStyles.description}>{ProdSelected.description}</Text>
                <Text>Stock:{ProdSelected.stock}</Text>
                <Text style={PDStyles.price}>${ProdSelected.price}</Text>
            </View>
            <Button
          color="red"
          title="add to cart"
        />


        </View>
    )
}

export default ProductDetail