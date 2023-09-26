
import { SafeAreaView } from "react-native";
import Store from "./src/screens/StoreScreen/Store";
import Products from "./src/screens/ProductsScreen/Products";
import {useFonts} from "expo-font"
import ProductDetail from "./src/screens/DetailScreen/ProductDetail";
import { NavigationContainer } from "@react-navigation/native";
import RoutesNav from "./src/Navigation/RoutesNav";
import TabNav from "./src/Navigation/TabNav";


export default function App() {
const[fontsLoaded] = useFonts({
  Oswald: require("./assets/Fonts/Oswald-Medium.ttf")
});
if (!fontsLoaded) {
  return;
}

  return (
  <NavigationContainer>
<TabNav />
</NavigationContainer>

  )
};
