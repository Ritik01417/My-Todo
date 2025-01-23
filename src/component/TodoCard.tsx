import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import Ionicons from "@expo/vector-icons/Ionicons";
import { TodoData } from "../app";

const TodoCard = ({
  id,
  title,
  time,
  iscomplete,
  onselect,
  isSelected,
}:TodoData & { onSelect: () => void; isSelected: boolean } ) => {
    const [isActive,SetIsActive]=useState(iscomplete)
    
  return (
    <Pressable style={styles.container}  
    key={id}
    onPress={()=>{
      SetIsActive(!isActive)
      onselect();
    }}
    >
      <View style={styles.todoContainer}>
        <Ionicons name={isActive? "radio-button-on":"radio-button-off"} size={24} color={isActive? "#7A7777" :"black"} />
        <Text style={[isActive? styles.inactiveTitle: styles.title]}>{title}</Text>
      </View>

      <Text style={[styles.time, isActive&&{color:"#7A7777"}]}>{time?.toString()}</Text>
      
    </Pressable>
  );
};

export default TodoCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor:"rgba(162, 161, 161, 0.9)",
    padding:20,
    borderRadius:20,
    

  },
  todoContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    
  },
  icon: {},
  title: { fontSize: 20,color:"black",fontWeight:"500", },
  time: { fontSize: 12,fontWeight:"400",color:"black" },
  inactiveTitle: {
    fontSize: 20,
    color: "#7A7777",
    fontWeight:"300",
    textDecorationLine: "line-through", 
  },
});



// timeStamp: 29:30 for video reference
