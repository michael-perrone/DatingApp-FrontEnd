import React from "react";
import { StyleSheet, View } from "react-native";
import { vw } from "react-native-expo-viewport-units";
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
    backgroundColor: "#dcffd6",
    top: 260,
    alignItems: "center"
  }
});

export default LoginForm;
