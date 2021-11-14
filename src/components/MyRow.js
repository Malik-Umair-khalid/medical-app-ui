import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  Button,
  TouchableOpacity,
  View,
} from "react-native";
import { Input } from "react-native-elements";
import showmore from "../../assets/Images/NewAppointMent/showmore.png";

function MyRow({ title, src, rating }) {
  return (
    <>
      <View
        style={{
          width: "90%",
          height: 130,
          flexDirection: "row",
          padding: 20,
          borderBottomColor: "#BCC0C7",
          alignItems: "center",
          borderBottomWidth: 1
        }}
      >
        <View
          style={{
            flex: 0.2,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Image source={src} />
        </View>
        <View style={{ flex: 0.8, padding: 20 }}>
          <Text style={{ fontSize: 18, color: "#1C1C1C" }}>
            Dr. Martin Pilier
          </Text>
          <Text style={{ fontSize: 13, color: "#BCC0C7" }}>Cardiologistr</Text>
          <Text style={{ fontSize: 13, color: "#BCC0C7" }}>
            Luxembourg Ville - 2 km
          </Text>
          <Image source={rating} />
        </View>
        <Image source={showmore} />
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  btn: {},
});

export default MyRow;
