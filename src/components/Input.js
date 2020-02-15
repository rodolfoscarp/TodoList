import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = ({ value, onChangeText }) => {
  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      style={style.input}
      underlineColorAndroid="#888"
    />
  );
};

const style = StyleSheet.create({
  input: {
    paddingLeft: 15,
    paddingBottom: 15
  }
});

export default Input;
