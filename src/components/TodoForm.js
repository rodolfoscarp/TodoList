import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";
import Input from "./Input";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, setTodoText, updateTodo } from "../actions";

const TodoForm = props => {
  const dispatch = useDispatch();

  const editingTodo = useSelector(state => state.editingTodo);

  const onChangeText = text => {
    dispatch(setTodoText(text));
  };

  const onPress = () => {
    if (editingTodo.id) {
      dispatch(updateTodo(editingTodo));
    } else {
      dispatch(addTodo(editingTodo.text));
    }
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.inputContainer}>
        <Input
          onChangeText={text => onChangeText(text)}
          value={editingTodo.text}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button onPress={onPress} title={editingTodo.id ? "Edit" : "Add"} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formContainer: { flexDirection: "row" },
  inputContainer: { flex: 4 },
  buttonContainer: { flex: 1 }
});

export default TodoForm;
