import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

export default function App() {
  const [name, setName] = useState("Noah");
  const [age, setAge] = useState(22);

  return (
    <View style={styles.container}>
      <Text>Enter name:</Text>
      <TextInput
        multiline
        style={styles.input}
        placeholder="e.g. JohnDoe"
        onChangeText={(value) => setName(value)}
      />
      <Text>Enter age:</Text>
      <TextInput
        keyboardType="numeric"
        style={styles.input}
        placeholder="e.g. 99"
        onChangeText={(value) => setAge(value)}
      />
      <Text>
        name: {name}, age: {age}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#777",
    padding: 8,
    margin: 10,
    width: 200,
  },
});
