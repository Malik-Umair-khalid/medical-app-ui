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

function MyInput({ title, src }) {
  return (
    <>
      <Input
        containerStyle={{
          width: "95%",
          padding: 0,
          borderBottomColor: "red",
        }}
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
          borderRadius: 5,
          height: 60,
        }}
        inputStyle={{ backgroundColor: "#fff", padding: 10 }}
        placeholder={title}
        leftIcon={<Image source={src} style={{ marginLeft: 20 }} />}
        leftIconContainerStyle={{ padding: 5 }}

        // <i class="fal fa-map-marker-alt"></i>
      />
    </>
  );
}
const styles = StyleSheet.create({
  btn: {},
});

export default MyInput;
