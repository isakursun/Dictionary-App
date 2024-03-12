import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import AddDeleteModal from "./AddDeleteModal";
import { useSelector } from "react-redux";

export default function Dictionary() {
  const words = useSelector((store) => store.words);
  // ? modalı gösterme state i
  const [showModal, setShowModal] = useState(false);
  // ? modalın içeriğini belirleyecek olan state
  const [addWord, setAddWord] = useState(false);
  //? göstereceğimiz kelimeyi belirlediğimiz state
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      {/* kelimeler */}
      <View
        style={{
          width: "100%",
          height: 300,
          flexDirection: "row",
          backgroundColor: "#fff",
          justifyContent: "space-between",
          borderTopStartRadius: 10,
          borderTopEndRadius: 10,
          borderBottomLeftRadius: 100,
          borderBottomRightRadius: 100,
        }}
      >
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              if (index == 0) {
                return;
              } else setIndex((prev) => prev - 1);
            }}
          >
            <AntDesign name="leftcircle" size={50} color="black" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flex: 4,
            justifyContent: "space-evenly",
            alignItems: "center",
          }}
        >
          {words.length ? (
            <View
              style={{
                flex: 4,
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: 40, fontWeight: "bold" }}>
                {words[index]?.en}
              </Text>
              <Text
                style={{ fontSize: 30, fontWeight: "bold", color: "#939393" }}
              >
                {words[index]?.tr}
              </Text>
            </View>
          ) : (
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>
              Please add a word.
            </Text>
          )}
        </View>
        <View
          style={{
            flex: 2,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              if (index == words.length - 1) {
                return;
              } else {
                setIndex((prev) => prev + 1);
              }
            }}
          >
            <AntDesign name="rightcircle" size={50} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      {/* ekleme çıkarma */}
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          justifyContent: "center",
          gap: 50,
          marginTop: 50,
        }}
      >
        <TouchableOpacity onPress={() => setShowModal(true)}>
          <View>
            <AntDesign name="minuscircle" size={60} color="#DD1E1E" />
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            setShowModal(true), setAddWord(true);
          }}
        >
          <View style={{ backgroundColor: "#fff", borderRadius: 30 }}>
            <AntDesign name="pluscircle" size={60} color="#2786E7" />
          </View>
        </TouchableOpacity>
      </View>

      {/* modal kısmı */}
      <AddDeleteModal
        showModal={showModal}
        setShowModal={setShowModal}
        addWord={addWord}
        setAddWord={setAddWord}
        setIndex={setIndex}
        index={index}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f4f1de",
  },
});
