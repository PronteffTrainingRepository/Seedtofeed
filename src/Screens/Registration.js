import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

class Registration extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <View style={styles.bubble1}></View>
          <View style={styles.bubble2}></View>
        </View>
        <View>
          <Image
            style={styles.logo}
            source={require("../../assets/logo.png")}
          />
        </View>
        <Text
          style={{
            color: "black",
            fontSize: 40,
            alignSelf: "flex-start",
            marginBottom: 20,
            marginLeft: 20,
          }}
        >
          Registration
        </Text>
        <View>
          <Text
            style={{
              color: "black",
              fontSize: 15,
              opacity: 0.8,
              marginBottom: -12,
              marginLeft: -110,
            }}
          >
            Full Name
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 3,
            borderColor: "#a1a7b3",
            marginLeft: 90,
            marginBottom: 15,
          }}
        >
          <AntDesign
            name="user"
            size={40}
            color="#FBC737"
            style={styles.icon}
          />

          <TextInput style={styles.input} placeholder="Enter Your Name!" />
        </View>
        <View>
          <Text
            style={{
              color: "black",
              fontSize: 15,
              opacity: 0.8,
              marginBottom: -12,
              marginLeft: -110,
            }}
          >
            Email
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 3,
            borderColor: "#a1a7b3",
            marginLeft: 90,
            marginBottom: 15,
          }}
        >
          <Entypo name="email" size={40} color="#FBC737" style={styles.icon} />

          <TextInput style={styles.input} placeholder="Example123@gmail.com!" />
        </View>
        <View>
          <Text
            style={{
              color: "black",
              fontSize: 15,
              opacity: 0.8,
              marginBottom: -12,
              marginLeft: -110,
            }}
          >
            Password
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            borderBottomWidth: 3,
            borderColor: "#a1a7b3",
            marginLeft: 90,
            marginBottom: 15,
          }}
        >
          <Entypo name="lock" size={40} color="#FBC737" style={styles.icon} />

          <TextInput
            style={styles.input}
            secureTextEntry
            placeholder="***********"
          />
        </View>
        <View>
          <TouchableOpacity style={styles.button}>
            <Text style={{ color: "white", fontSize: 20 }}>Sign In</Text>
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: "row",
            marginTop: 5,
            marginBottom: 35,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: "#F55362",
              borderRadius: 30,
              width: 120,
              height: 45,
              marginRight: 44,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                textAlign: "center",
                paddingTop: 10,
              }}
            >
              Gmail
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: "#0D68B9",
              borderRadius: 30,
              height: 45,
              width: 120,
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 18,
                textAlign: "center",
                paddingTop: 10,
              }}
            >
              Facebook
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Text style={{ fontSize: 17 }}>Have a Account?</Text>

          <Text style={{ color: "#FBC737", fontSize: 17 }}>Sign In</Text>
        </View>
        <View>
          <View style={styles.bubble3}></View>
          <View style={styles.bubble4}></View>
        </View>
      </View>
    );
  }
}

export default Registration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 40,
    width: 350,
    borderColor: "#a1a7b3",

    paddingTop: 15,
    paddingLeft: 3,
  },

  icon: {
    paddingRight: 8,
  },
  logo: {
    width: 120,
    height: 120,
    borderRadius: 40,
  },
  button: {
    alignItems: "center",
    backgroundColor: "#3EA03B",
    padding: 10,
    width: 300,
    height: 50,
    borderRadius: 30,
    marginTop: 20,
    marginBottom: 15,
  },
  bubble1: {
    backgroundColor: "#7DBA39",
    height: 120,
    width: 120,
    position: "absolute",
    top: -130,
    left: -250,
    borderRadius: 60,
  },
  bubble2: {
    backgroundColor: "#FCC739",
    height: 100,
    width: 100,
    position: "absolute",
    top: -140,
    left: -160,
    borderRadius: 50,
  },
  bubble3: {
    backgroundColor: "#7DBA39",
    height: 120,
    width: 120,
    position: "absolute",
    bottom: -158,
    right: -210,
    borderRadius: 50,
  },
  bubble4: {
    backgroundColor: "#FCC739",
    height: 100,
    width: 100,
    position: "absolute",
    bottom: -120,
    right: -240,
    borderRadius: 50,
  },
});
