import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from "react-native";

import AppIntroSlider from "react-native-app-intro-slider";
import MyButton from "../components/Button";
import MainLogo from "../components/MainLogo";
import PhoneInput from "react-native-phone-number-input";

const NumberSignIn = ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
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

        <Text style={{ color: "#181461", fontSize: 25, marginTop: 80 }}>
          Welcome
        </Text>
        <Text style={{ color: "#1C1C1C", fontSize: 15 }}>
          Sign in to Continue
        </Text>

        <View
          style={{
            marginTop: 50,
            width: "100%",
            justifyContent: "space-around",
            alignItems: "center",
            height: "20%",
          }}
        >
          <PhoneInput defaultCode="DM" layout="first" autoFocus />
          <MyButton
            color="#2A2AC0"
            title="Continue"
            txtColor="#fff"
            onPress={()=>navigation.navigate("varification")}
          />
        </View>
      </View>
    </>
  );
};

export default NumberSignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECF1FA",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  heading: {
    fontWeight: "normal",
    fontSize: 25,
    color: "#2A2AC0",
  },
});
