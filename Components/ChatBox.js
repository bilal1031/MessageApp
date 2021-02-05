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
import { Swipeable } from "react-native-gesture-handler";
import color from "./color";

const ChatBox = ({
  profile,
  name,
  message,
  time,
  onPress,
  rightaction,
  leftaction,
}) => {
  return (
    <Swipeable renderRightActions={rightaction} renderLeftActions={leftaction}>
      <TouchableNativeFeedback onPress={onPress}>
        <View style={styles.box_area}>
          <View style={styles.image_area}>
            <Image style={styles.image} source={profile} />
          </View>
          <View style={styles.text_area}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <Text style={[styles.text, { color: color.shadyblue, left: 10 }]}>
                {name}
              </Text>
              <Text style={styles.text}>{time}</Text>
            </View>
            <Text style={[styles.text, { fontSize: 16, left: 15 }]}>
              {message}
            </Text>
          </View>
        </View>
      </TouchableNativeFeedback>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  box_area: {
    flexDirection: "row",
    height: 90,
    width: "100%",
    padding: 5,
    backgroundColor: color.white,
    overflow: "hidden",
    alignSelf: "center",
  },
  image_area: {
    height: 70,
    width: 70,
    overflow: "hidden",
    borderRadius: 35,
    top: 5,
    left: 5,
  },
  image: { height: 70, width: 70 },
  text_area: {
    // backgroundColor: color.green,
    width: "75%",
    left: 10,
    flexDirection: "column",
  },
  text: { color: color.grey, top: 10, fontSize: 20 },
});

export default ChatBox;
