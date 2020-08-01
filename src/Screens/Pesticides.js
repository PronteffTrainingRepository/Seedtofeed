import React, { Component } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from "react-native";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Constants from "expo-constants";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const ht = Dimensions.get("window").height;
const wd = Dimensions.get("window").width;

class Pesticides extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <View style={styles.head}>
            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity>
                <Entypo name="menu" size={30} color="white" />
              </TouchableOpacity>
              <View
                style={{
                  marginLeft: wd * 0.02,
                  marginRight: wd * 0.09,
                }}
              >
                <Text
                  style={{ color: "white", fontSize: 18, fontWeight: "bold" }}
                >
                  SEED TO FEED
                </Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: 18,
                    opacity: 0.8,
                    fontWeight: "bold",
                  }}
                >
                  Paddy Farmers List
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row" }}>
              <TouchableOpacity>
                <Ionicons
                  name="md-settings"
                  size={35}
                  color="white"
                  style={{
                    marginLeft: Dimensions.get("window").width * 0.02,
                    marginRight: Dimensions.get("window").width * 0.02,
                  }}
                />
              </TouchableOpacity>
              <TouchableOpacity>
                <MaterialIcons
                  name="notifications-active"
                  size={35}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          </View>
          {/* First card starts */}
          <View style={styles.card}>
            <View>
              <Text
                style={{
                  color: "#C57255",
                  fontSize: 16,
                  paddingLeft: wd * 0.03,
                  fontWeight: "bold",
                }}
              >
                Chitti Mutyalu [2Acres]
              </Text>
            </View>

            <View style={styles.content}>
              <View>
                <Text style={{ fontWeight: "bold" }}>
                  <FontAwesome name="user" size={14} color="black" /> Farmer
                  Name: B. Janardhan Reddy
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  <FontAwesome name="mobile-phone" size={17} color="black" />{" "}
                  Mobile No: +91-9255525422
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  <FontAwesome name="map-marker" size={15} color="black" />{" "}
                  Address: Nalgonda, Donakal
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  Total Farming Period(Days): 120
                </Text>
              </View>

              <View>
                <Image
                  style={styles.logo}
                  source={require("../../assets/tn1.jpg")}
                />
              </View>
            </View>
            <View style={styles.footer}>
              <TouchableOpacity style={styles.button}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 17,
                    width: wd * 0.5,
                    textAlign: "center",
                    height: ht * 0.048,
                    paddingTop: ht * 0.007,
                  }}
                >
                  Pesticides Used
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 17,
                    width: wd * 0.35,
                    textAlign: "center",
                    height: ht * 0.048,
                    paddingTop: ht * 0.007,
                  }}
                >
                  View Details
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* First card Ended */}

          {/* second card started */}
          <View style={styles.card}>
            <View>
              <Text
                style={{
                  color: "#C57255",
                  fontSize: 16,
                  paddingLeft: wd * 0.03,
                  fontWeight: "bold",
                }}
              >
                Kurnool Sona [10Acres]
              </Text>
            </View>

            <View style={styles.content}>
              <View>
                <Text style={{ fontWeight: "bold" }}>
                  <FontAwesome name="user" size={14} color="black" /> Farmer
                  Name: K. Vijaya Kumar
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  <FontAwesome name="mobile-phone" size={17} color="black" />{" "}
                  Mobile No: +91-9655590921
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  <FontAwesome name="map-marker" size={15} color="black" />{" "}
                  Address: kurnool,Adoni
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  Total Farming Period(Days): 150
                </Text>
              </View>

              <View>
                <Image
                  style={styles.logo}
                  source={require("../../assets/tn2.jpg")}
                />
              </View>
            </View>
            <View style={styles.footer}>
              <TouchableOpacity style={styles.button}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 17,
                    width: wd * 0.5,
                    textAlign: "center",
                    height: ht * 0.048,
                    paddingTop: ht * 0.007,
                  }}
                >
                  Pesticides Used
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 17,
                    width: wd * 0.35,
                    textAlign: "center",
                    height: ht * 0.048,
                    paddingTop: ht * 0.007,
                  }}
                >
                  View Details
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* second card ended */}

          {/* third card started */}
          <View style={styles.card}>
            <View>
              <Text
                style={{
                  color: "#C57255",
                  fontSize: 16,
                  paddingLeft: wd * 0.03,
                  fontWeight: "bold",
                }}
              >
                Bangaru Theegalu [8Acres]
              </Text>
            </View>

            <View style={styles.content}>
              <View>
                <Text style={{ fontWeight: "bold" }}>
                  <FontAwesome name="user" size={14} color="black" /> Farmer
                  Name: S. Balu
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  <FontAwesome name="mobile-phone" size={17} color="black" />{" "}
                  Mobile No: +91-9555586907
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  <FontAwesome name="map-marker" size={15} color="black" />{" "}
                  Address: khammam,Sathupally
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  Total Farming Period(Days): 200
                </Text>
              </View>

              <View>
                <Image
                  style={styles.logo}
                  source={require("../../assets/tn3.jpg")}
                />
              </View>
            </View>
            <View style={styles.footer}>
              <TouchableOpacity style={styles.button}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 17,
                    width: wd * 0.5,
                    textAlign: "center",
                    height: ht * 0.048,
                    paddingTop: ht * 0.007,
                  }}
                >
                  Pesticides Used
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 17,
                    width: wd * 0.35,
                    textAlign: "center",
                    height: ht * 0.048,
                    paddingTop: ht * 0.007,
                  }}
                >
                  View Details
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* third card ended */}

          {/* fourth card started */}
          <View style={styles.card}>
            <View>
              <Text
                style={{
                  color: "#C57255",
                  fontSize: 16,
                  paddingLeft: wd * 0.03,
                  fontWeight: "bold",
                }}
              >
                BPT Rice [20Acres]
              </Text>
            </View>

            <View style={styles.content}>
              <View>
                <Text style={{ fontWeight: "bold" }}>
                  <FontAwesome name="user" size={14} color="black" /> Farmer
                  Name: M. Surender
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  <FontAwesome name="mobile-phone" size={17} color="black" />{" "}
                  Mobile No: +91-9655539841
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  <FontAwesome name="map-marker" size={15} color="black" />{" "}
                  Address: suryapet,Mothey
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  Total Farming Period(Days): 140
                </Text>
              </View>

              <View>
                <Image
                  style={styles.logo}
                  source={require("../../assets/tn4.jpg")}
                />
              </View>
            </View>
            <View style={styles.footer}>
              <TouchableOpacity style={styles.button}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 17,
                    width: wd * 0.5,
                    textAlign: "center",
                    height: ht * 0.048,
                    paddingTop: ht * 0.007,
                  }}
                >
                  Pesticides Used
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 17,
                    width: wd * 0.35,
                    textAlign: "center",
                    height: ht * 0.048,
                    paddingTop: ht * 0.007,
                  }}
                >
                  View Details
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* fourth card ended */}

          {/* fifth card started */}
          <View style={styles.card}>
            <View>
              <Text
                style={{
                  color: "#C57255",
                  fontSize: 16,
                  paddingLeft: wd * 0.03,
                  fontWeight: "bold",
                }}
              >
                Krishna Hamsa [15Acres]
              </Text>
            </View>

            <View style={styles.content}>
              <View>
                <Text style={{ fontWeight: "bold" }}>
                  <FontAwesome name="user" size={14} color="black" /> Farmer
                  Name: G. Srinivas Rao
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  <FontAwesome name="mobile-phone" size={17} color="black" />{" "}
                  Mobile No: +91-7555367029
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  <FontAwesome name="map-marker" size={15} color="black" />{" "}
                  Address: mulugu,bhilampur
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  Total Farming Period(Days): 220
                </Text>
              </View>

              <View>
                <Image
                  style={styles.logo}
                  source={require("../../assets/tn5.jpg")}
                />
              </View>
            </View>
            <View style={styles.footer}>
              <TouchableOpacity style={styles.button}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 17,
                    width: wd * 0.5,
                    textAlign: "center",
                    height: ht * 0.048,
                    paddingTop: ht * 0.007,
                  }}
                >
                  Pesticides Used
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 17,
                    width: wd * 0.35,
                    textAlign: "center",
                    height: ht * 0.048,
                    paddingTop: ht * 0.007,
                  }}
                >
                  View Details
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* fifth card ended */}

          {/* sixth card started */}
          <View style={styles.card}>
            <View>
              <Text
                style={{
                  color: "#C57255",
                  fontSize: 16,
                  paddingLeft: wd * 0.03,
                  fontWeight: "bold",
                }}
              >
                Triguna [6Acres]
              </Text>
            </View>

            <View style={styles.content}>
              <View>
                <Text style={{ fontWeight: "bold" }}>
                  <FontAwesome name="user" size={14} color="black" /> Farmer
                  Name: Kondur Ravinder Rao
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  <FontAwesome name="mobile-phone" size={17} color="black" />{" "}
                  Mobile No: +91-7555951926
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  <FontAwesome name="map-marker" size={15} color="black" />{" "}
                  Address: kadapa,Duvvuru
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  Total Farming Period(Days): 130
                </Text>
              </View>

              <View>
                <Image
                  style={styles.logo}
                  source={require("../../assets/tn.jpg")}
                />
              </View>
            </View>
            <View style={styles.footer}>
              <TouchableOpacity style={styles.button}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 17,
                    width: wd * 0.5,
                    textAlign: "center",
                    height: ht * 0.048,
                    paddingTop: ht * 0.007,
                  }}
                >
                  Pesticides Used
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 17,
                    width: wd * 0.35,
                    textAlign: "center",
                    height: ht * 0.048,
                    paddingTop: ht * 0.007,
                  }}
                >
                  View Details
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* sixth card ended */}

          {/* seventh card started */}
          <View style={styles.card}>
            <View>
              <Text
                style={{
                  color: "#C57255",
                  fontSize: 16,
                  paddingLeft: wd * 0.03,
                  fontWeight: "bold",
                }}
              >
                Indur Samba [22Acres]
              </Text>
            </View>

            <View style={styles.content}>
              <View>
                <Text style={{ fontWeight: "bold" }}>
                  <FontAwesome name="user" size={14} color="black" /> Farmer
                  Name: T. Rajeshwar Rao
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  <FontAwesome name="mobile-phone" size={17} color="black" />{" "}
                  Mobile No: +91-9155544147
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  <FontAwesome name="map-marker" size={15} color="black" />{" "}
                  Address: Guntur,Tenali
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  Total Farming Period(Days):160
                </Text>
              </View>

              <View>
                <Image
                  style={styles.logo}
                  source={require("../../assets/tn1.jpg")}
                />
              </View>
            </View>
            <View style={styles.footer}>
              <TouchableOpacity style={styles.button}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 17,
                    width: wd * 0.5,
                    textAlign: "center",
                    height: ht * 0.048,
                    paddingTop: ht * 0.007,
                  }}
                >
                  Pesticides Used
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 17,
                    width: wd * 0.35,
                    textAlign: "center",
                    height: ht * 0.048,
                    paddingTop: ht * 0.007,
                  }}
                >
                  View Details
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* seventh card ended */}

          {/* eigth card started */}
          <View style={styles.card}>
            <View>
              <Text
                style={{
                  color: "#C57255",
                  fontSize: 16,
                  paddingLeft: wd * 0.03,
                  fontWeight: "bold",
                }}
              >
                Keshava [30Acres]
              </Text>
            </View>

            <View style={styles.content}>
              <View>
                <Text style={{ fontWeight: "bold" }}>
                  <FontAwesome name="user" size={14} color="black" /> Farmer
                  Name: G. Srinivas Rao
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  <FontAwesome name="mobile-phone" size={17} color="black" />{" "}
                  Mobile No: +91-9355555656
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  <FontAwesome name="map-marker" size={15} color="black" />{" "}
                  Address: Nellore,Gudur
                </Text>
                <Text style={{ fontWeight: "bold" }}>
                  Total Farming Period(Days): 240
                </Text>
              </View>

              <View>
                <Image
                  style={styles.logo}
                  source={require("../../assets/tn2.jpg")}
                />
              </View>
            </View>
            <View style={styles.footer}>
              <TouchableOpacity style={styles.button}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 17,
                    width: wd * 0.5,
                    textAlign: "center",
                    height: ht * 0.048,
                    paddingTop: ht * 0.007,
                  }}
                >
                  Pesticides Used
                </Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text
                  style={{
                    color: "black",
                    fontSize: 17,
                    width: wd * 0.35,
                    textAlign: "center",
                    height: ht * 0.048,
                    paddingTop: ht * 0.007,
                  }}
                >
                  View Details
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* eigth card ended */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default Pesticides;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    backgroundColor: "#02A24C",
    //alignItems: "center",
    //justifyContent: "center",
  },
  head: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: ht * 0.01,
    paddingTop: ht * 0.01,
    marginLeft: Dimensions.get("window").width * 0.01,
  },
  card: {
    backgroundColor: "white",
    width: wd * 0.95,
    marginLeft: wd * 0.028,
    borderTopWidth: ht * 0.007,
    borderTopColor: "#F5D846",
    borderRadius: 5,
    marginBottom: ht * 0.012,
  },
  content: {
    borderTopWidth: 2,
    borderTopColor: "#F5D846",
    width: wd * 0.89,
    paddingTop: ht * 0.01,
    marginLeft: wd * 0.03,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingBottom: ht * 0.01,
  },
  logo: {
    height: ht * 0.1,
    width: wd * 0.2,
    borderRadius: 5,
  },
  footer: {
    borderTopWidth: 2,
    borderTopColor: "#F5D846",
    flexDirection: "row",
    justifyContent: "space-around",
    paddingTop: ht * 0.01,
    paddingBottom: ht * 0.012,
    width: wd * 0.9,
    marginLeft: wd * 0.024,
  },
  button: {
    backgroundColor: "#FFE67F",
    borderRadius: 5,
  },
});
