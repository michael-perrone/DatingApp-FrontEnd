import React from "react";
import { StyleSheet, View } from "react-native";
import { vh, vw } from "react-native-expo-viewport-units";
import FacebookButton from "./FacebookButton";

class LoginForm extends React.Component {
  render() {
    return (
      <View style={styles.buttonContainer}>
        <FacebookButton />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: vw(100),
    height: vh(15),
    backgroundColor: "#dcffd6",
    top: 210,
    justifyContent: "space-around",
    alignItems: "center"
  }
});

export default LoginForm;
