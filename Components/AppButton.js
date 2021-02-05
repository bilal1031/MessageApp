import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableNativeFeedback,
  View,
} from "react-native";
import color from "./color";

const AppButton = ({ image, onPress }) => {
  return (
    <TouchableNativeFeedback onPress={onPress}>
      <View style={styles.icircle}>
        <Image source={image} style={styles.image} />
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  icircle: {
    height: 70,
    width: 70,
    backgroundColor: color.grey,
    borderRadius: 35,
    overflow: "hidden",
    marginRight: 10,
  },
  image: { height: "100%", width: "100%" },
});
export default AppButton;
