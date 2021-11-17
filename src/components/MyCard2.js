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

function MyCard2({ title, src }) {
  return (
    <>
      <View
        style={{
          width: 300,
          flexDirection: "column",
          backgroundColor: "#fff",
          height: 130,
          marginLeft: 20,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,

          elevation: 5,
          borderRadius: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 0.4,
          }}
        >
          <View
            style={{
              flex: 0.5,
              padding: 10,
            }}
          >
            <Text
              style={{
                fontSize: 15,
              }}
            >
              Thu, 09 Apr
            </Text>
            <Text
              style={{
                fontSize: 10,
                color: "#B6B6B6",
                marginTop: 5,
              }}
            >
              3 Slots available
            </Text>
          </View>
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              flex: 0.5,
            }}
          >
            <TouchableOpacity
              style={{
                backgroundColor: "#2A2AC0",
                width: 85,
                alignItems: "center",
                padding: 5,
                borderRadius: 8,
              }}
            >
              <Text
                style={{
                  color: "#fff",
                }}
              >
                SEE ALL
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 0.4,
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            width: "100%"
          }}
        >
          <Text style={{
              borderColor: "#B6B6B6",
              borderWidth: 1,
              
              borderRadius: 5
              ,paddingHorizontal: 10
          }}>08:00</Text>
            <Text style={{
              borderColor: "#B6B6B6",
              borderWidth: 1,
              
              borderRadius: 5
              ,paddingHorizontal: 10
          }}>12:00</Text>
            <Text style={{
              borderColor: "#B6B6B6",
              borderWidth: 1,
              
              borderRadius: 5
              ,paddingHorizontal: 10
          }}>15:00</Text>
  
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  btn: {},
});

export default MyCard2;
