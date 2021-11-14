import * as React from "react";
import { View, Text, Image } from "react-native";
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
import Varification from "../containers/Varifiation";
import UserLocation from "../containers/UserLocation";
import CustomDrawer from "../components/CustomDrawer";
import Statics from "../containers/Statics";
import Settings from "../containers/Settings";
import NewAppointment from "../containers/NewAppoint";
import MyAppointments from "../containers/MyAppointments";
import MedicalRecords from "../containers/MedicalRecords";
import Help from "../containers/Help";
import Forums from "../containers/Forum";

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
          <Drawer.Navigator
            drawerContent={(props) => <CustomDrawer {...props} />}
            initialRouteName="appIntro"
            screenOptions={{
              drawerLabelStyle: {
                marginLeft: -25,
              },
            }}
          >
            <>
              <Drawer.Screen
                options={{
                  drawerItemStyle: {
                    display: "none",
                  },
                  title: "Dashboard",
                  headerStyle: {
                    backgroundColor: "#FFFFFF",
                    height: 150,
                  },
                  headerTintColor: "#181461",
                  headerTitleContainerStyle: {
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: 20,
                  },
                  headerTitleStyle: {
                    color: "#181461",
                    fontSize: 25,
                  },
                  headerLeftContainerStyle: {
                    justifyContent: "flex-start",
                    marginTop: 20,
                    padding: 10,
                  },
                  headerRightContainerStyle: {
                    justifyContent: "flex-start",
                    marginTop: 20,
                    padding: 10,
                  },
                }}
                name="home"
                component={Home}
              />
              <Drawer.Screen
                options={{
                  drawerItemStyle: {
                    display: "none",
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

              <Drawer.Screen
                name="splash"
                options={{
                  drawerItemStyle: {
                    display: "none",
                  },
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
                  drawerItemStyle: {
                    display: "none",
                  },
                  headerShown: false,
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
                  drawerItemStyle: {
                    display: "none",
                  },
                  headerShown: false,
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
                  drawerItemStyle: {
                    display: "none",
                  },
                  headerShown: false,
                  title: "Varification",
                  headerStyle: {
                    backgroundColor: "#22283e",
                  },
                  headerTintColor: "#fff",
                }}
                component={Varification}
              />
              <Drawer.Screen
                name="location"
                options={{
                  drawerItemStyle: {
                    display: "none",
                  },
                  headerShown: false,
                  title: "location",
                  headerStyle: {
                    backgroundColor: "#22283e",
                  },
                  headerTintColor: "#fff",
                }}
                component={UserLocation}
              />
              {/* SHOWN LINKS */}
              <Drawer.Screen
                name="MyAppointment"
                options={{
                  drawerIcon: () => (
                    <Image
                      source={require("../../assets/Images/DrawerImages/myapoint.png")}
                    />
                  ),

                  title: "My Appointment",
                  headerStyle: {
                    backgroundColor: "#22283e",
                  },
                  headerTintColor: "#fff",
                }}
                component={MyAppointments}
              />
              <Drawer.Screen
                name="NewAppointment"
                options={{
            
                  title: "Book an appointment",
                  headerStyle: {
                    backgroundColor: "#FFFFFF",
                    height: 150,
                  },
                  headerTintColor: "#181461",
                  headerTitleContainerStyle: {
                    display: "flex",
                    justifyContent: "flex-end",
                    marginBottom: 20,
                  },
                  headerTitleStyle: {
                    color: "#181461",
                    fontSize: 25,
                  },
                  headerLeftContainerStyle: {
                    justifyContent: "flex-start",
                    marginTop: 20,
                    padding: 10,
                  },
                  headerRightContainerStyle: {
                    justifyContent: "flex-start",
                    marginTop: 20,
                    padding: 10,
                  },
                  drawerIcon: () => (
                    <Image
                      source={require("../../assets/Images/DrawerImages/newappoint.png")}
                    />
                  ),
                }}
                component={NewAppointment}
              />
              <Drawer.Screen
                name="MedicalRecords"
                options={{
                  drawerIcon: () => (
                    <Image
                      source={require("../../assets/Images/DrawerImages/records.png")}
                    />
                  ),
                  title: "Medical Records",
                  headerStyle: {
                    backgroundColor: "#22283e",
                  },
                  headerTintColor: "#fff",
                }}
                component={MedicalRecords}
              />
              <Drawer.Screen
                name="Forums"
                options={{
                  drawerIcon: () => (
                    <Image
                      source={require("../../assets/Images/DrawerImages/forum.png")}
                    />
                  ),
                  title: "Forums",
                  headerStyle: {
                    backgroundColor: "#22283e",
                  },
                  headerTintColor: "#fff",
                }}
                component={Forums}
              />
            </>
            <Drawer.Screen
              name="statics"
              options={{
                drawerIcon: () => (
                  <Image
                    source={require("../../assets/Images/DrawerImages/stats.png")}
                  />
                ),
                title: "statics",
                headerStyle: {
                  backgroundColor: "#22283e",
                },
                headerTintColor: "#fff",
              }}
              component={Statics}
            />
            <Drawer.Screen
              name="Settings"
              options={{
                drawerIcon: () => (
                  <Image
                    source={require("../../assets/Images/DrawerImages/settings.png")}
                  />
                ),
                title: "Account Settungs",
                headerStyle: {
                  backgroundColor: "#22283e",
                },
                headerTintColor: "#fff",
              }}
              component={Settings}
            />

            <Drawer.Screen
              name="Help"
              options={{
                drawerIcon: () => (
                  <Image
                    source={require("../../assets/Images/DrawerImages/help.png")}
                  />
                ),
                title: "Help",
                headerStyle: {
                  backgroundColor: "#22283e",
                },
                headerTintColor: "#fff",
              }}
              component={Help}
            />
          </Drawer.Navigator>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
}

export default AppRouter;
