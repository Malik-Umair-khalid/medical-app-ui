import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../containers/home";
import Splash from "../containers/Splash";
import AppIntro from "../containers/AppIntro";
import { onAuthStateChanged, auth } from "../config/Firebase";
import { useState } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { HeaderStyleInterpolators } from "@react-navigation/stack";
import Questions from "../containers/Questions";
import Result from "../containers/Result";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import store, { persistor } from "../store";
import NumberSignIn from "../containers/NumberSignIn";
import Varification from "../containers/Varifiation"

function AppRouter() {
  const Drawer = createDrawerNavigator();
  const [userAuth, setuserAuth] = useState(false);

  const Stack = createNativeStackNavigator();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const uid = user.uid;
      console.log(uid);
      setuserAuth(true);
    } else {
      setuserAuth(false);
      console.log("No USer");
    }
  });
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <Drawer.Navigator initialRouteName="signup">
            {userAuth ? (
              <>
                <Drawer.Screen
                  options={{
                    title: "Quiz App",
                    headerStyle: {
                      backgroundColor: "#22283e",
                    },
                    headerTintColor: "#fff",
                  }}
                  name="home"
                  component={Home}
                />
                <Drawer.Screen
                  options={{
                    drawerItemStyle: {
                      display: "none",
                    },
                    title: "Question",
                    headerStyle: {
                      backgroundColor: "#22283e",
                    },
                    headerTintColor: "#fff",
                  }}
                  name="questions"
                  component={Questions}
                />
                <Drawer.Screen
                  options={{
                    drawerItemStyle: {
                      // display: "none"
                    },
                    title: "Result",
                    headerStyle: {
                      backgroundColor: "#22283e",
                    },
                    headerTintColor: "#fff",
                  }}
                  name="result"
                  component={Result}
                />
              </>
            ) : (
              <>
                <Drawer.Screen
                  name="splash"
                  options={{
                    title: "Splash",
                    headerStyle: {
                      backgroundColor: "#22283e",
                    },
                    headerTintColor: "#fff",
                  }}
                  component={Splash}
                />
                <Drawer.Screen
                  name="appIntro"
                  options={{
                    title: "App Intro",
                    headerStyle: {
                      backgroundColor: "#22283e",
                    },
                    headerTintColor: "#fff",
                  }}
                  component={AppIntro}
                />
                <Drawer.Screen
                  name="numberSign"
                  options={{
                    title: "Number Signin",
                    headerStyle: {
                      backgroundColor: "#22283e",
                    },
                    headerTintColor: "#fff",
                  }}
                  component={NumberSignIn}
                />
                 <Drawer.Screen
                  name="varification"
                  options={{
                    title: "Varification",
                    headerStyle: {
                      backgroundColor: "#22283e",
                    },
                    headerTintColor: "#fff",
                  }}
                  component={Varification}
                />
              </>
            )}
          </Drawer.Navigator>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}

export default AppRouter;
