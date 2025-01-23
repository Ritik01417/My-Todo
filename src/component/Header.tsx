import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

const Header = ({onPressDelete}:{onPressDelete:()=>any}) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"skyblue"} barStyle={"dark-content"}/>
      <Text style={styles.text}>Todo</Text>
      <TouchableOpacity style={styles.delete} onPress={onPressDelete}>
        <MaterialCommunityIcons name="delete" style={styles.icon} />
      </TouchableOpacity>
      
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height:100,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "skyblue",
  },
  text: { fontSize: 30, color: "white", textAlign: "center" , fontWeight:"bold"},
  delete: {
   height:50,
   width:50,
   backgroundColor:"skyblue",
   position:"absolute",
    right:20,
    borderRadius:10,
    borderWidth:2,
    borderColor:"white",
  },
  icon:{
    color:"white",
    fontSize:40,
    textAlign:"center",
    
  },
});
