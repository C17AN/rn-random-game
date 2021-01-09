import React from "react";
import { TextInput, StyleSheet } from "react-native";

const Input = ({ style, onChangeText, value }) => {
  return (
    <TextInput
      style={{ ...styles.input, ...style }}
      keyboardType="numeric"
      maxLength={2}
      onChangeText={(text) => {
        console.log("changed");
        onChangeText(text);
      }}
      value={value}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    height: 30,
    borderBottomColor: "#cdcdcd",
    borderBottomWidth: 1,
    marginVertical: 10,
  },
});
