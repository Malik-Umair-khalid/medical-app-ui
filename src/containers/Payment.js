import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import MyButton from "../components/Button";
import MyCard2 from "../components/MyCard2";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Signup from "./Splash";
import Forums from "./Forum";
import Help from "./Help";
import MyInput from "../components/MyInput";

export default function BookAppoint({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}>
          <Image
            style={{
              marginRight: 20,
            }}
            source={require("../../assets/Images/back.png")}
          />
        </TouchableOpacity>
      ),
    });
  });
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Image source={require("../../assets/Images/user.png")} />
      ),
    });
  });
  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 0.5,
          padding: 20,
          width: "100%",
        }}
      >
        <View
          style={{
            borderBottomColor: "#BCC0C7",
            borderBottomWidth: 1,
            paddingBottom: 5,
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 15,
              }}
            >
              Dr. Clara Odding Confirmation
            </Text>
          </View>
          <View
            style={{
              paddingTop: 20,
              paddingLeft: 10,
            }}
          >
            <View
              style={{
                backgroundColor: "#fff",
                padding: 10,
                width: "55%",
                borderRadius: 15,
              }}
            >
              <Text
                style={{
                  fontSize: 25,
                }}
              >
                Thu, 09 Apr
                <Text style={{
                  color: "#3BC560",
                  fontWeight: "bold"
                }}> 08:00</Text>
              </Text>
            </View>
          </View>
          <View
            style={{
              width: "50%",
              flexDirection: "row",
              marginTop: 20,
            }}
          >
            <View
              style={{
                flex: 0.2,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Image
                source={require("../../assets/Images/NewAppointMent/location.png")}
              />
            </View>
            <View
              style={{
                flex: 0.8,
              }}
            >
              <Text
                style={{
                  color: "#989BA1",
                }}
              >
                2 Rue de Ermesinde Frisange - Luxembourg 3 km
              </Text>
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 5,
          }}
        >
          <MyInput title="Message" />
          <MyInput title="Reason of the Visit" />
        </View>
        <View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Check+Scaling
          </Text>
          <Text>124€</Text>
        </View>
      </View>
      <View
        style={{
          flex: 0.5,
          width: "100%",
          padding: 20,
          paddingTop: 80,
        }}
      >
        <View>
          <Text
            style={{
              fontSize: 18,
              color: "#181461",
            }}
          >
            Select the card
          </Text>
          <ScrollView
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{
              height: 200,
            }}
          >
            <Image source={require("../../assets/Images/Payments/Card.png")} />
            <Image source={require("../../assets/Images/Payments/Card2.png")} />
          </ScrollView>
          <Text
            style={{
              fontSize: 15,
              color: "#181461",
            }}
          >
            Manage Cards >
          </Text>
        </View>
        <View style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10
        }}>
          <MyButton color="#2A2AC0" title="Pay Now" txtColor="#fff" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECF1FA",
    alignItems: "center",
    justifyContent: "center",
  },
});
