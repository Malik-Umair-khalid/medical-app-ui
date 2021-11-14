
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function MyAppointments({navigation}) {
  const [login, setlogin] = useState(false);
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <Button color="#1ec77f"  title="Logout" />
      ),
    });
  });
  return (  
    <View style={styles.container}>
        <Text>MyAppointments</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding:20
  },
});
