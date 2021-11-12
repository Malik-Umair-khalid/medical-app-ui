import React from "react";
import {
  StyleSheet,
  Text,
  Image,
  Button,
  TouchableOpacity,
  View,
} from "react-native";
// import View from "react-native-gesture-handler/lib/typescript/GestureHandlerRootView";

function MyButton({ title, color, txtColor, onPress }) {
  return (
    <>
      <TouchableOpacity
        style={{
          backgroundColor: color,
          width: "95%",
          justifyContent: "center",
          alignItems: "center",
          height: 50,
          borderRadius: 8,
        }}
        onPress={onPress}
      >
        <Text style={[{ color: txtColor, fontSize: 20 }]}>{title}</Text>
      </TouchableOpacity>
    </>
  );
}
const styles = StyleSheet.create({
  btn: {},
});

export default MyButton;
