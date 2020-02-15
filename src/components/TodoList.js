import React from "react";
import { View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import TodoListItem from "./TodoListItem";
import { toggleTodo, setEditingTodo } from "../actions";

const TodoList = () => {
  const dispatch = useDispatch();

  const todos = useSelector(state => state.todos);
  return (
    <View>
      {todos.map(todo => (
        <TodoListItem
          todo={todo}
          key={todo.id}
          onPressTodo={() => {
            dispatch(toggleTodo(todo.id));
          }}
          onLongPressTodo={() => {
            dispatch(setEditingTodo(todo));
          }}
        />
      ))}
    </View>
  );
};

export default TodoList;
