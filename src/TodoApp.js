import React from "react";
import { View, StyleSheet } from "react-native";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";

import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

import rootReducer from "./reducers";

const store = createStore(rootReducer, applyMiddleware(logger));

const TodoApp = props => {
  return (
    <Provider store={store}>
      <View style={style.container}>
        <TodoForm />
        <TodoList />
      </View>
    </Provider>
  );
};

const style = StyleSheet.create({
  container: {
    paddingTop: 30
  }
});

export default TodoApp;
