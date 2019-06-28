import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

class FacebookButton extends React.Component {
  render() {
    return (
      <TouchableOpacity color="white" style={styles.facebookButton}>
        <Text style={styles.facebookIcon}>F</Text>
        <Text style={styles.buttonText}>Login with Facebook</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  facebookButton: {
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 18,
    height: 50,
    width: 300,
    borderWidth: 1,
    backgroundColor: "white",
    borderColor: "black",
    flexDirection: "row"
  },
  buttonText: {
    fontSize: 22,
    color: "#196ce6",
    fontWeight: "bold"
  },
  facebookIcon: {
    fontSize: 22,
    color: "#196ce6",
    marginRight: 22,
    fontWeight: "bold"
  }
});

export default FacebookButton;
