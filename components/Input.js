import React from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";
import globalStyles from "../styles/globalStyles";

const Input = (props) => {
  return (
    <View style={styles.formControl}>
      <Text style={styles.label}>{props.label}</Text>
      <TextInput
        {...props}
        value={props.value}
        onChangeText={props.onKeyStroke}
        style={styles.input}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  formControl: {
    width: "100%",
  },
  label: {
    marginVertical: 15,
    color: globalStyles.green,
    fontWeight: "bold",
  },
  input: {
    paddingVertical: 9,
    paddingHorizontal: 9,
    borderColor: globalStyles.green,
    borderRadius: 6,
    borderWidth: 0.5,
  },
});

export default Input;
