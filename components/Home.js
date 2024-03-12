import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      {/* üst kısım */}
      <View style={styles.top}>
        <View style={styles.language}>
          <Image
            style={styles.images}
            source={require("../assets/images/türk.png")}
          />
          <Text style={styles.text}>Turkish</Text>
        </View>
        <View style={styles.icon}>
          <AntDesign name="retweet" size={50} color="black" />
        </View>
        <View style={styles.language}>
          <Image
            style={styles.images}
            source={require("../assets/images/ing.png")}
          />
          <Text style={styles.text}>English</Text>
        </View>
      </View>

      {/* alt kısım */}
      <View style={styles.bottom}>
        <Text style={{ fontSize: 40, textAlign: "center" }}>
          Make your own dictionary.
        </Text>
        <TouchableOpacity onPress={()=> navigation.navigate("dictionary")}>
          <View style={styles.button}>
            <Text style={{ fontSize: 30, fontWeight: "bold" }}>
              Let's start
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f4f1de",
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    width: "100%",
    flex: 2,
  },
  language: {
    alignItems: "center",
    justifyContent: "center",
    gap: 5,
  },
  images: {
    width: 120,
    height: 120,
    borderRadius: 60,
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
  icon: {
    justifyContent: "center",
  },
  bottom: {
    width: "100%",
    flex: 3,
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 40,
  },
  button: {
    height: 70,
    width: 170,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 5,
    borderColor: "#d62828",
  },
});
