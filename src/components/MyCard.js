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

function MyButton({ title, src }) {
  return (
    <>
      <View
        style={{
          backgroundColor: "#fff",
          height: 280,
          width: "45%",
          marginTop: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 1,
          },
          shadowOpacity: 0.22,
          shadowRadius: 2.22,
          elevation: 3,
          borderRadius: 5,
        }}
      >
        <View style={{ flex: 0.1, padding: 20 }}>
          <Text style={{color: "#181461", fontSize: 18}}>{title}</Text>
        </View>
        <View
          style={{ flex: 0.9, justifyContent: "center", alignItems: "center" }}
        >
          <Image source={src} />
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  btn: {},
});

export default MyButton;
