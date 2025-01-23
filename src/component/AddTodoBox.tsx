import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import Modal from "react-native-modal";
import Feather from "@expo/vector-icons/Feather";

const AddTodoBox = ({
  isActive,
  onClose,
  value,
  onChangeText,
  onPressSubmit,
}: {
  isActive: boolean;
  onClose: any;
  value: string;
  onChangeText: (item: string) => void;
  onPressSubmit: () => void;
}) => {
  return (
    <Modal
      isVisible={isActive}
      style={styles.modal}
      onBackButtonPress={onClose}
      onBackdropPress={onClose}
      backdropTransitionOutTiming={0.8}
    >
      <View style={styles.container}>
        <View style={styles.modalHeader}>
          <Text style={styles.title}>Add Todo</Text>
          <TouchableOpacity style={styles.click}
          onPress={onPressSubmit}
          > 
            <Feather name="arrow-right-circle" style={styles.icon} />
          </TouchableOpacity>
        </View>

        <TextInput style={styles.inputBox}
         placeholder="Enter Todo" 
         value={value}
         onChangeText={onChangeText}/>
      </View>
    </Modal>
  );
};

export default AddTodoBox;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: "#fff",
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    gap: 15,
  },
  modal: {
    margin: 0,
    justifyContent: "flex-end",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    right: 10,
  },
  title: {
    fontSize: 24,
    color: "black",
    fontWeight: "bold",
    marginLeft: 15,
    padding: 10,
  },
  icon: {
    color: "white",
    fontSize: 30,
  },
  click: {
    backgroundColor: "skyblue",
    height: 50,
    width: 50,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  inputBox: {
    borderWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
    fontSize: 16,
    color: "black",
    borderColor: "skyblue",
  },
});
