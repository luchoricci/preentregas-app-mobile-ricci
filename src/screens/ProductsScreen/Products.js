import {FlatList, SafeAreaView} from 'react-native'
import React, {useEffect, useState,} from 'react'
import Header from '../../components/Header/Header'
import Search from '../../components/Search/Search'
import { ProductsList } from '../../Data/ProductList'
import ProductItem from '../../components/Product/ProductItem'




const Products = ({route, navigation }) => {


    const [categoryProd, setCategoryProd] = useState([]);
    const [text, setText] = useState(null);

    const { item } = route.params;

    useEffect(() => {
        const categoryProducts = ProductsList.filter((el) => el.category === item);
        setCategoryProd(categoryProducts);
    
        if (text) {
          const nameProduct = ProductsList.filter((el) => el.name.toLowerCase() === text.toLowerCase());
          setCategoryProd(nameProduct);
        }
      }, [text, item]);

console.log(item)



    return (
        <SafeAreaView>
            <Header title={item} navigation={navigation} />
            <Search text={text} setText={setText}/>

            <FlatList
                data={categoryProd}
                keyExtractor={ProductsList.id}
                renderItem={({ item }) => (
                    <ProductItem navigation={navigation} item={item} />
                )}
            />


        </SafeAreaView>
    )
}


export default Products