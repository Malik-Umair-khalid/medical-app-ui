// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import {
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   Button,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import AppIntroSlider from "react-native-app-intro-slider";
// import MainLogo from "../components/MainLogo";

// const slides = [
//   {
//     key: 1,
//     headerImage: MainLogo,
//     text: "Description.\nSay something cool",
//     image: require("../../assets/Images/intro1.png"),
//     backgroundColor: "#ECF1FA",
//   },
//   {
//     key: 2,
//     headerImage: MainLogo,
//     HeaderDiscription: "Storage Your Medical Reports",
//     image: require("../../assets/Images/intro2.png"),
//     backgroundColor: "#ECF1FA",
//   },
//   {
//     key: 3,
//     headerImage: MainLogo,
//     HeaderDiscription: "Discuss in the forum",
//     image: require("../../assets/Images/intro3.png"),
//     backgroundColor: "#ECF1FA",
//   },
// ];

// function Login({ navigation }) {
//   const renderItem = ({ item }) => {
//     <View style={styles.slide}>
//       <MainLogo />
//       <Text style={styles}>{item.HeaderDiscription}</Text>
//       <Image source={item.image} />
//       <Text style={styles}>{item.text}</Text>
//     </View>;
//   };

//   return (
//     <>
//       <AppIntroSlider
//         renderItem={(item) => (
//           <View style={styles.slide}>
//             <MainLogo />
//             <Text style={styles}>{item.HeaderDiscription}</Text>
//             <Image source={item.image} />
//             <Text style={styles}>{item.text}</Text>
//           </View>
//         )}
//         data={slides}
//       />
//     </>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#ECF1FA",
//     alignItems: "center",
//     // justifyContent: "center",
//     padding: 20,
//     fontFamily: "Arial, Helvetica, sans-serif",
//   },
//   heading: {
//     fontWeight: "normal",
//     fontSize: 25,
//   },
//   para: {
//     fontWeight: "300",
//     fontSize: 14,
//     color: "gray",
//   },
//   input: {
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     padding: 10,
//     width: 95 + "%",
//     borderRadius: 100,
//     backgroundColor: "#f2f2f2",
//     color: "gray",
//     marginTop: 20,
//     maxHeight: 100,
//     height: 70,
//     borderColor: "#f2f2f2",
//   },
//   button: {
//     alignItems: "center",
//     backgroundColor: "#1ec77f",
//     padding: 10,
//     width: "100%",
//     paddingTop: 25,
//     paddingBottom: 25,
//     borderRadius: 100,
//   },
//   slide: {
//     flex: 1,
//   },
// });

// export default Login;

// React Native App Intro Slider using AppIntroSlider
// https://aboutreact.com/react-native-app-intro-slider/
// Simple Intro Slider

// import React in our code
import React, { useState } from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  Button,
} from "react-native";

//import AppIntroSlider to use it
import AppIntroSlider from "react-native-app-intro-slider";
import MainLogo from "../components/MainLogo";

const App = () => {
  const [showRealApp, setShowRealApp] = useState(false);

  const onDone = () => {
    setShowRealApp(true);
  };
  const onSkip = () => {
    setShowRealApp(true);
  };

  const RenderItem = ({ item }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: item.backgroundColor,
          alignItems: "center",
          justifyContent: "space-around",
          paddingBottom: 100,
        }}
      >
        <Image source={require("../../assets/Images/introHeader.png")} />
        <Text style={styles.introTitleStyle}>{item.text}</Text>
        <Image style={styles.introImageStyle} source={item.image} />
        <Text style={styles.introTextStyle}>{item.text}</Text>
      </View>
    );
  };

  return (
    <>
      {showRealApp ? (
        <SafeAreaView style={styles.container}>
          <View style={styles.container}>
            <Text style={styles.titleStyle}>
              React Native App Intro Slider using AppIntroSlider
            </Text>
            <Text style={styles.paragraphStyle}>
              This will be your screen when you click Skip from any slide or
              Done button at last
            </Text>
            <Button
              title="Show Intro Slider again"
              onPress={() => setShowRealApp(false)}
            />
          </View>
        </SafeAreaView>
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
    backgroundColor: "#fff",
    alignItems: "center",
    padding: 10,
    justifyContent: "center",
  },
  titleStyle: {
    padding: 10,
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
  paragraphStyle: {
    padding: 20,
    textAlign: "center",
    fontSize: 16,
  },
  introImageStyle: {
    width: "100%",
    height: 200,
  },
  introTextStyle: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    marginBottom: 16,
    fontWeight: "bold",
  },
});

const slides = [
  {
    key: 1,

    text: "Description.\nSay something cool",
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
