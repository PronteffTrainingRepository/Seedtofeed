import React from 'react'
import { View, Button, StyleSheet } from "react-native";
import { NavigationContainer } from "react-navigation-native";
import { createStackNavigator } from "react-navigation-stack";
function Main() {
    return (
      <View style={styles.container}>
        <Button title="Go to Profile" />
      </View>
    );
}

export default Main;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});