import { StyleSheet, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Entypo from '@expo/vector-icons/Entypo';

const AddButton = ({onPress}:{onPress:any}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
      <Entypo name="plus" size={24} color="black" style={styles.icon} />

      </View>
    </TouchableOpacity>
  )
}

export default AddButton

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
   height: 80,
    width: 80,
    borderRadius: 80,
    backgroundColor: 'skyblue',
    justifyContent:"center",
    alignItems:"center",
    bottom:50,
    right:25,

  },
  icon:{
    fontSize:40,
    color:"white",
  
  },
})