import { StatusBar } from "expo-status-bar";
import React from "react";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  TouchableOpacity,
  Image,
} from "react-native";
import MainLogo from "../components/MainLogo";
import { LinearGradient } from "expo-linear-gradient";

import {
  auth,
  createUserWithEmailAndPassword,
  doc,
  setDoc,
  db,
} from "../config/Firebase";
function Signup({ navigation }) {
  return (
    <>
      <LinearGradient colors={["#2929BB", "#15155F"]} style={styles.background}>
        <MainLogo />
      </LinearGradient>
    </>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, Helvetica, sans-serif",
    padding: 20,
    height: "100%",
  },
  heading: {
    fontWeight: "normal",
    fontSize: 25,
    color: "#fff",
  },
  para: {
    fontWeight: "300",
    fontSize: 40,
    color: "gray",
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    paddingLeft: 40,
    width: 95 + "%",
    borderRadius: 100,
    backgroundColor: "#f2f2f2",
    color: "gray",
    marginTop: 20,
    maxHeight: 100,
    height: 70,
    borderColor: "#f2f2f2",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#1ec77f",
    padding: 10,
    width: "100%",
    paddingTop: 25,
    paddingBottom: 25,
    borderRadius: 100,
  },
  background: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Arial, Helvetica, sans-serif",
    padding: 20,
    height: "100%",
  },
});

export default Signup;
