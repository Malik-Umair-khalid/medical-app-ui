
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Help() {
  const [login, setlogin] = useState(false);

  return (  
    <View style={styles.container}>
        <Text>Help</Text>
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
