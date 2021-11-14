import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from "react-native";
import { Input } from "react-native-elements";

import AppIntroSlider from "react-native-app-intro-slider";
import { TextInput } from "react-native-gesture-handler";
import MyButton from "../components/Button";
import MainLogo from "../components/MainLogo";

const styles = StyleSheet.create({
  heading: {
    fontWeight: "normal",
    fontSize: 25,
    color: "#2A2AC0",
  },
});

const UserLocation = ({navigation}) => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ECF1FA",
      }}
    >
      <Image
        style={{ width: 100, height: 100 }}
        source={require("../../assets/Images/introHeader.png")}
      />
      <Text style={styles.heading}>
        <Text
          style={{
            fontWeight: "bold",
            color: "#2A2AC0",
            backgroundColor: "#ECF1FA",
          }}
        >
          Medical
        </Text>{" "}
        App
      </Text>
      <View></View>
      <Text
        style={{
          color: "#181461",
          fontSize: 25,
          marginTop: 80,
          backgroundColor: "#ECF1FA",
        }}
      >
        Varification
      </Text>
      <Text style={{ color: "#1C1C1C", fontSize: 15 }}>
        Please Enter Your Location
      </Text>
      <Input
        // style={{backgroundColor: "red",}}
        containerStyle={{ width: "95%", padding: 0, borderBottomColor: "red", marginTop: 20 }}
        inputContainerStyle={{
          borderColor: "#fff",
          backgroundColor: "#fff",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 3,
          },
          shadowOpacity: 0.27,
          shadowRadius: 4.65,
          elevation: 6,
          borderRadius: 5
          , height: 60
        }}
        inputStyle={{ backgroundColor: "#fff", padding: 10 }}
        placeholder="Your Location"
        leftIcon={{
          type: "font-awesome",
          name: "map-marker",
          color: "#2A2AC0",
        }}
        leftIconContainerStyle={{ padding: 5 }}

        // <i class="fal fa-map-marker-alt"></i>
      />
      <MyButton color="#2A2AC0" title="Continue" txtColor="#fff" onPress={()=>navigation.navigate("home")} />
    </View>
  );
};

export default UserLocation;
