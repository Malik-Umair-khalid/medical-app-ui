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

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

const styles = StyleSheet.create({
  root: { flex: 1, padding: 20 },
  title: { textAlign: "center", fontSize: 30 },
  codeFieldRoot: {
    marginTop: 20,
    backgroundColor: "#fff",
    width: "94%",
    padding: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
    borderRadius: 5,
    marginBottom: 30,
  },

  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#fff",
    borderBottomColor: "gray",
    textAlign: "center",
  },
  focusCell: {
    borderBottomColor: "#2A2AC0",
  },

  heading: {
    fontWeight: "normal",
    fontSize: 25,
    color: "#2A2AC0",
  },
});

const CELL_COUNT = 6;

const App = () => {
  const [value, setValue] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ECF1FA",
      }}
    >
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
      <Text
        style={{
          color: "#181461",
          fontSize: 25,
          marginTop: 80,
          backgroundColor: "#ECF1FA",
        }}
      >
        Varification
      </Text>
      <Text style={{ color: "#1C1C1C", fontSize: 15 }}>Insert Code Here</Text>
      <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({ index, symbol, isFocused }) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}
          >
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
      <MyButton
        onPress={() => navigation.navigate("numberSign")}
        color="#2A2AC0"
        title="Continue"
        txtColor="#fff"
      />
    </View>
  );
};

export default App;
