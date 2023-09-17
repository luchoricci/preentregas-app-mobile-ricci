import { StyleSheet } from "react-native";
import { colors } from "../../theme/colors";


const HeaderStyles = StyleSheet.create({
    container: {
      height: 95,
      width: "100%",
     display: "flex",
     flexDirection:"row",
     

     
      backgroundColor: colors.orange,


    
    },

    headerText: {
      marginTop:35,
      fontSize: 35,
      color: colors.yellow,
      marginLeft: 20,
    

  
    
      // fontFamily: "Dancing",
    },
    headerButtonContainer: {
      

  
    },
    headerButton: {
 
      backgroundColor: colors.heavyred,
      marginTop: 50,
      borderRadius: 20,
      marginRight:60,
      color: colors.yellow,
      marginLeft: 10,

      

    },
  });




export default HeaderStyles;
