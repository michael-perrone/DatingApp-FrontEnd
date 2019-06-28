import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { vh, vw } from "react-native-expo-viewport-units";
import LoginForm from "./components/LoginForm/LoginForm";

class App extends Component {
  render() {
    return (
      <View style={styles.backgroundView}>
        <LoginForm />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  backgroundView: {
    height: vh(100),
    width: vw(100),
    backgroundColor: "#dcffd6",
    justifyContent: "center"
  },
  container: {
    marginTop: 40,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: "#dcffd6"
  }
});

export default App;
