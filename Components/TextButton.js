import { StatusBar } from "expo-status-bar";

import React, { useState } from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableNativeFeedback,
  View,
} from "react-native";
import color from "./color";

const TextButton = ({ text, onPress }) => {
  const [coloris, setcolor] = useState(color.green);
  return (
    <TouchableHighlight
      underlayColor={color.lightgreen}
      style={[
        styles.text_encap,
        {
          backgroundColor: coloris,
        },
      ]}
      onPress={() => {
        onPress();
        //setcolor(coloris == color.lightgreen ? color.green : color.lightgreen);
      }}
    >
      <Text style={styles.text}>{text}</Text>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  text_encap: {
    height: 30,
    width: 80,
    borderRadius: 20,
    //backgroundColor: color.lightgreen,

    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 16,
    color: color.white,
  },
});
export default TextButton;
