import { View, Text, FlatList} from 'react-native'
import React from 'react'
import CategoriesStyles from './CategoriesStyle'
import { CategoryList } from '../../Data/CategoryList'
import CategoryItem from '../CategoryItem/CategoryItem';


const Categories = () => {
  return (
    <View >
     <FlatList 
     data={CategoryList}
     keyExtractor={(key) => key}
     renderItem={({item}) => <CategoryItem item={item} style={CategoriesStyles.categoryList}/>}

     
     />
    </View>
  );
};

export default Categories