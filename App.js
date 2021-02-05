import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import color from "./Components/color";
import AppButton from "./Components/AppButton";
import TextButton from "./Components/TextButton";
import ChatBox from "./Components/ChatBox";
import ChatBoxDeleteButton from "./Components/ChatBoxDeleteButton";

export default function App() {
  const images = [
    { id: 1, imagelink: require("./assets/images/images.png") },
    { id: 2, imagelink: require("./assets/images/image1.jpg") },
    { id: 3, imagelink: require("./assets/images/image2.jpg") },
    { id: 4, imagelink: require("./assets/images/image3.jpg") },
    { id: 5, imagelink: require("./assets/images/images4.jpg") },
    { id: 6, imagelink: require("./assets/images/images4.jpg") },
  ];
  const messages = [
    {
      id: 1,
      profileimage: require("./assets/images/images.png"),
      name: "Muhammad Bilal",
      message: "How are You?",
      time: "14:00",
    },
    {
      id: 2,
      profileimage: require("./assets/images/image1.jpg"),
      name: "Ali Asad",
      message: "How are You?",
      time: "7:00",
    },
    {
      id: 3,
      profileimage: require("./assets/images/image2.jpg"),
      name: "Ibrahim Arif",
      message: "How are You?",
      time: "7:00",
    },
    {
      id: 4,
      profileimage: require("./assets/images/image3.jpg"),
      name: "Taha Ur Rahman",
      message: "How are You?",
      time: "7:00",
    },
    {
      id: 5,
      profileimage: require("./assets/images/images.png"),
      name: "Amman Naeem",
      message: "How are You?",
      time: "7:00",
    },
  ];
  const calls = [
    {
      id: 1,
      profileimage: require("./assets/images/images.png"),
      name: "Muhammad Bilal",
      message: "Call Missed",
      time: "14:00",
    },
  ];
  const textbutton = [
    {
      id: 1,
      text: "Message",
      onPress: () => {
        setdataitem(messages);
      },
    },
    { id: 2, text: "Calls", onPress: () => setdataitem(calls) },
    { id: 3, text: "Group", onPress: () => console.log("group") },
    { id: 4, text: "Create", onPress: () => console.log("create") },
  ];
  const RenderItem = [
    ({ item }) => (
      <ChatBox
        profile={item.profileimage}
        name={item.name}
        message={item.message}
        time={item.time}
        onPress={() => console.log("ChatBox Working")}
        rightaction={() => (
          <ChatBoxDeleteButton onPress={() => console.log("working")} />
        )}
      />
    ),
  ];
  const [dataitem, setdataitem] = useState(messages);
  return (
    <View style={styles.container}>
      <View style={styles.uppercontainer}>
        <Text style={styles.text}>Chat with {"\n"}friends</Text>
        <View
          style={{
            flex: 0.4,
            top: "15%",
            left: 20,
            flexDirection: "row",
          }}
          showsHorizontalScrollIndicator={false}
        >
          <FlatList
            style={styles.bubblelist}
            showsVerticalScrollIndicator={false}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            data={images}
            keyExtractor={(image) => image.id.toString()}
            renderItem={({ item, index }) => (
              <AppButton
                image={item.imagelink}
                onPress={() =>
                  console.log("Index:" + index + " Id: " + item.id)
                }
              />
            )}
          ></FlatList>
        </View>
        <View style={styles.optionbox}>
          <FlatList
            style={{ left: 20 }}
            horizontal={true}
            data={textbutton}
            keyExtractor={(option) => option.id.toString()}
            renderItem={({ item }) => (
              <TextButton text={item.text} onPress={item.onPress} />
            )}
          ></FlatList>
        </View>
      </View>
      <View style={styles.chatlist_container}>
        <FlatList
          horizontal={false}
          style={styles.chatlist}
          data={dataitem}
          keyExtractor={(message) => message.id.toString()}
          renderItem={RenderItem[0]}
        ></FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    marginTop: 25,
    backgroundColor: color.green,
    marginBottom: 20,
  },
  uppercontainer: {
    height: "40%",
    width: "100%",
    backgroundColor: color.green,
  },
  optionbox: {
    //backgroundColor: color.orange,
    height: 40,
    top: "30%",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    top: 30,
    left: 20,
    color: color.white,
    fontSize: 34,
    fontWeight: "600",
    fontFamily: "Roboto",
  },
  bubblelist: {
    top: 15,
    height: 70,
    flex: 1,
  },
  chatlist: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: color.white,
  },
  chatlist_container: {
    flex: 1,
    top: 20,
    backgroundColor: color.white,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    overflow: "hidden",
  },
});
