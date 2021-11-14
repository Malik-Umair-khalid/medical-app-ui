import React from "react";
import { View, Text, Image } from "react-native";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";

function CustomDrawer(props) {
  return (
    <View style={{ flex: 1 }}>
      <DrawerContentScrollView
        {...props}
        contentContainerStyle={{
          padding: 20,
          height: "90%",
        }}
      >
        <View
          style={{
            backgroundColor: "#ECF1FA",
            flex: 0.3,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {/* <Text>Hello</Text> */}
          <View
            style={{
              flexDirection: "row",
              flex: 0.5,
              width: "100%",
              justifyContent: "flex-start",
              alignItems: "center",
              position: "relative",
            }}
          >
            <Image
              source={require("../../assets/Images/DrawerImages/cross.png")}
              style={{ position: "absolute", top: 20, right: 20 }}
            />
            <Image
              source={require("../../assets/Images/DrawerImages/ProfileImage.png")}
              style={{ marginLeft: 10, marginRight: 10 }}
            />
            <View>
              <Text
                style={{ color: "#2A2AC0", fontWeight: "bold", fontSize: 15 }}
              >
                Sophie Garnier
              </Text>
              <Text
                style={{ color: "#181461", fontWeight: "normal", fontSize: 13 }}
              >
                Luxembourg
              </Text>
            </View>
          </View>
        </View>
        <View style={{ backgroundColor: "#fff", flex: 0.7 }}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={{ marginBottom: 30, flexDirection: "row", padding: 20 }}>
        <Image
          source={require("../../assets/Images/DrawerImages/logout.png")}
          style={{ marginRight: 10 }}
        />
        <Text>Logout</Text>
      </View>
    </View>
  );
}

export default CustomDrawer;
