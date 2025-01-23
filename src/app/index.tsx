import { View, StyleSheet, FlatList, Alert, Text } from "react-native";
import React, { useState } from "react";
import Header from "../component/Header";
import TodoCard from "../component/TodoCard";
import AddButton from "../component/AddButton";
import AddTodoBox from "../component/AddTodoBox";

export interface TodoData {
  id: number;
  title: string;
  time: any;
  iscomplete: boolean;
  onselect: () => void;
  
}
const index = ({id}:any) => {
  const [data, setData] = useState<TodoData[]>([]);
  const [open, setOpen] = useState(false);
  const [todo, setTodo] = useState("");
  const [selectedId, setSelectedId] = useState<number | null>(null)

  const onAddTodo = () => {
    if (!todo) {
      Alert.alert("Please Enter Todo");
    }
    let finishedData: TodoData = {
      id: Math.floor(Math.random() * 100) + 1,
      title: todo,
      time: new Date().toDateString(),
      iscomplete: false,
      onselect: () => {},
      
    };
    setData([...data, finishedData]);
    setTodo("");
    setOpen(false);
  };

  // const onDeleteTodo = () => {
  //   if (data.length === 0) {
  //     Alert.alert("No Todos to delete");
     
  //   }
  //   Alert.alert(
  //     "Delete All Todos",
  //     "Are you sure you want to delete all todos?",
  //     [
  //       { text: "Cancel", style: "cancel" },
  //       { text: "Delete", style: "destructive", onPress: () => setData([]) },
  //     ]
  //   );
  // };

  const onDeleteTodo = () => {
    if (selectedId === null) {
      Alert.alert("Please select a Todo to delete");
      return;
    }
    setData(data.filter((item) => item.id !== selectedId));
    setSelectedId(null); // Reset selectedId after deletion
  };
  
  return (
    <View style={styles.container}>
      <Header onPressDelete={onDeleteTodo} />
      <View style={styles.TodoCard}>
        <FlatList
        keyExtractor={(item) => item.id.toString()}
          data={data}
          contentContainerStyle={{ gap: 10 }}
          ListEmptyComponent={() => (
            <Text style={styles.noData}>No Data Found</Text>
          )}
          renderItem={(item) => {
            return (
              <TodoCard
                id={item.item.id}
                title={item.item.title}
                time={item.item.time}
                iscomplete={item.item.iscomplete}
                onSelect={()=> setSelectedId(item.item.id)}
                isSelected={selectedId === item.item.id} 
                onselect={()=>setSelectedId(item.item.id)} 
              />
            );
          }
        }

        />
      </View>
      <AddTodoBox
        isActive={open}
        onClose={() => setOpen(false)}
        value={todo}
        onChangeText={(e) => {
          setTodo(e);
        }}
        onPressSubmit={onAddTodo}
      />
      <AddButton onPress={() => setOpen(true)} />
    </View>
  );
};

export default index;
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  TodoCard: {
    padding: 20,
    gap: 10,
  },
  noData: {
    fontSize: 20,
    textAlign: "center",
    color: "grey",
    marginTop: 100,
  },
});
