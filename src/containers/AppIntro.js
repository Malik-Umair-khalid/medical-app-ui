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

const App = ({navigation}) => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({ item }) => {
    return (
      <>
        <View
          style={{ flex: 0.3, justifyContent: "center", alignItems: "center" }}
        >
          <Image source={require("../../assets/Images/introHeader.png")} />
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
          <Text style={{ color: "#181461" }}>{item.HeaderDiscription}</Text>
        </View>
        <View
          style={{ flex: 0.6, justifyContent: "center", alignItems: "center" }}
        >
          <Image
            style={{ flexDirection: "row", width: "100%" }}
            source={item.image}
          />
        </View>
        <View style={{ flex: 0.1 }}></View>
      </>
    );
  };

  return (
    <>
      {showRealApp ? (
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
            <Text style={{ color: "#1C1C1C", fontSize: 15}}>
              Sign in to Continue
            </Text>
      
          <View
            style={{
              marginTop: 50,
              width: "100%",
              justifyContent: "space-around",
              alignItems: "center",
              height: "20%"
            }}
          >
            <MyButton onPress={()=> navigation.navigate("numberSign")} color="#2A2AC0" title="Sign in With Mobile Number" txtColor="#fff" />
            <Text>Or</Text>
            <MyButton color="#3A559F" title="Sign in With Facebook" txtColor="#fff" />
          </View>
          <View style={{position: "absolute", bottom: 10}}>
            <Text>By signing in, you accept our <Text style={{color: "#2A2AC0"}}> Terms and Conditions </Text></Text>
          </View>
        </View>
      ) : (
        <AppIntroSlider
          data={slides}
          renderItem={RenderItem}
          onDone={onDone}
          showSkipButton={true}
          onSkip={onSkip}
        />
      )}
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ECF1FA",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  // titleStyle: {
  //   padding: 10,
  //   textAlign: "center",
  //   fontSize: 18,
  //   fontWeight: "bold",
  // },
  // paragraphStyle: {
  //   padding: 20,
  //   textAlign: "center",
  //   fontSize: 16,
  // },
  // introImageStyle: {
  //   width: "100%",
  //   height: 200,
  // },
  // introTextStyle: {
  //   fontSize: 18,
  //   color: "white",
  //   textAlign: "center",
  //   paddingVertical: 30,
  // },
  // introTitleStyle: {
  //   fontSize: 25,
  //   color: "white",
  //   textAlign: "center",
  //   marginBottom: 16,
  //   fontWeight: "bold",
  // },
  heading: {
    fontWeight: "normal",
    fontSize: 25,
    color: "#2A2AC0",
  },
});

const slides = [
  {
    key: 1,
    HeaderDiscription: "Find Your Docter",
    image: require("../../assets/Images/intro1.png"),
    backgroundColor: "#ECF1FA",
  },
  {
    key: 2,

    HeaderDiscription: "Storage Your Medical Reports",
    image: require("../../assets/Images/intro2.png"),
    backgroundColor: "#ECF1FA",
  },
  {
    key: 3,

    HeaderDiscription: "Discuss in the forum",
    image: require("../../assets/Images/intro3.png"),
    backgroundColor: "#ECF1FA",
  },
];
