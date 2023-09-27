import {View, FlatList} from "react-native";
import Header from "../../components/Header/Header";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import { useSelector } from "react-redux";



const Store = ({navigation}) => {

const CategoryList = useSelector(state=> state.firstSlice.allCategories)

  return (
    <View>
      <Header title="Categories" />
      <View >
     <FlatList 
     data={CategoryList}
     keyExtractor={(key) => key}
     renderItem={({item}) => <CategoryItem navigation={navigation} item={item} />}

     
     />
    </View>




    </View>

  );
};

export default Store;