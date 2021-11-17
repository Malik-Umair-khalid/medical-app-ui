import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  ScrollView,
} from "react-native";
import MyInput from "../components/MyInput";
import MyButton from "../components/Button";
import calender from "../../assets/Images/NewAppointMent/calender.png";
import search from "../../assets/Images/NewAppointMent/search.png";
import location from "../../assets/Images/NewAppointMent/location.png";
import MyRow from "../components/MyRow";
import row1 from "../../assets/Images/NewAppointMent/row1.png";
import row2 from "../../assets/Images/NewAppointMent/row2.png";
import row3 from "../../assets/Images/NewAppointMent/row3.png";
import row4 from "../../assets/Images/NewAppointMent/row4.png";
import rating1 from "../../assets/Images/NewAppointMent/rating1.png";
import rating2 from "../../assets/Images/NewAppointMent/rating2.png";
import rating3 from "../../assets/Images/NewAppointMent/rating3.png";
import rating4 from "../../assets/Images/NewAppointMent/rating4.png";
import filter from "../../assets/Images/NewAppointMent/filter.png";
export default function NewAppointment({ navigation }) {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <Image source={require("../../assets/Images/user.png")} />
      ),
    });
  });
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => navigation.openDrawer()}
        >
          <Image source={require("../../assets/Images/Dashboard/menu.png")} />
        </TouchableOpacity>
      ),
    });
  });
  return (
    <View style={styles.container}>
      <SafeAreaView
        style={{
          flex: 0.4,
          backgroundColor: "#E5EAF3",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 120,
        }}
      >
        <MyInput title="Docter, Specialities" src={search} />
        <MyInput title="Select Area" src={location} />
        <MyInput title="Select Date" src={calender} />
        <MyButton color="#2A2AC0" title="Search" txtColor="#fff" />
      </SafeAreaView>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "space-between",
          padding: 30,
          marginTop: 100,
        }}
      >
        <Text   style={{fontSize: 20}}>All Specialities</Text>
        <Image source={filter} />
      </View>
      <ScrollView
        style={{ flex: 0.6, width: "100%" }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        <MyRow src={row1} rating={rating1} />
        <MyRow onPress={()=>navigation.navigate("MyBooking")} src={row2} rating={rating2} />
        <MyRow src={row3} rating={rating3} />
        <MyRow src={row4} rating={rating4} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5EAF3",
    alignItems: "center",
    justifyContent: "center",
  },
});
