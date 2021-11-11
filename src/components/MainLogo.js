import React from "react";
import { StyleSheet, Text, Image } from "react-native";

function MainLogo() {
  return (
    <>
      <Image source={require("../../assets/Images/mainLogo.png")} />
      <Text style={styles.heading}>
        <Text style={{ fontWeight: "bold", color: "#fff" }}>Medical</Text> App
      </Text>
    </>
  );
}
const styles = StyleSheet.create({
  heading: {
    fontWeight: "normal",
    fontSize: 25,
    color: "#fff",
  },
});

export default MainLogo;
