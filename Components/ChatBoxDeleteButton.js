import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import color from "./color";
import Icon from "react-native-vector-icons/Foundation";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
const ChatBoxDeleteButton = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.deletebox}>
        <Icon name={"trash"} size={30} color={color.white} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  deletebox: {
    backgroundColor: color.orange,
    width: 70,
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ChatBoxDeleteButton;
