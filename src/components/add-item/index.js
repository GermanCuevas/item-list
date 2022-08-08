import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const AddItem = ({ item, onHandlerModal, isTaskComplete }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.item}>{item.value}</Text>
      <TouchableOpacity onPress={() => isTaskComplete(item.id)}>
        <Text
          style={{
            ...styles.taskIncomplete,
            borderColor: !item.complete ? "red" : "green",
          }}
        >
          {!item.complete ? "Task Incomplete" : "Task Complete"}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => onHandlerModal(item.id)}>
        <Text style={styles.delete}>❌</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AddItem;
