import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,View } from 'react-native';
import Registration from './src/Screens/Registration';
import Pesticides from './src/Screens/Pesticides';
import { NavigationContainer } from "react-navigation-native";
import { createStackNavigator } from "react-navigation-stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    // <View style={styles.container}>
    //   {/* <Text>Open up App.js to start working on your app!</Text> */}
    //   {/* <Registration/> */}
    //   <Pesticides/>
    //   <StatusBar style="auto" />
    // </View>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="registration" component={Registration} />
      </Stack.Navigator>
      <Stack.Navigator>
        <Stack.Screen name="pesticides" component={Pesticides} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
