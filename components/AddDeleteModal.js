import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef, useState } from "react";
import { Modal } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { addNewWord, deleteWord } from "../Redux/WordSlice";

export default function AddDeleteModal({
  showModal,
  setShowModal,
  addWord,
  setAddWord,
  setIndex,
  index,
}) {
  
  //? store a abonelik
  const {words} = useSelector((store) => store);
  //! dispatch fonksiyonu
  const dispatch = useDispatch();

  // ? ing kelimeyi tutan state
  const [engWord, setEngWord] = useState("");

  // ? Türkçe kelimeyi tutan state
  const [trWord, setTrWord] = useState("");

  //! kelime ekleme fonksiyonu
  const handleAdd = () => {
    if (engWord && trWord) {
      dispatch(
        addNewWord({
          id: new Date().getTime(),
          en: engWord,
          tr: trWord,
        })
      );
    } else {
      setEngWord("");
      setTrWord("");
      alert("Please fill in the empty fields !");
      return;
    }

    setEngWord("");
    setTrWord("");
  };

  //! kelime silme fonksiyonu
  const handleDelete = (item) => {
    if (item.index === words.length - 1) {
      setIndex(item.index - 1);
    }

    dispatch(deleteWord(item.item.id));
  };

  return (
    <Modal visible={showModal} animationType="slide" transparent>
      <View style={styles.modul}>
        {/* modal kapatma kısmı */}
        <TouchableOpacity
          onPress={() => {
            setShowModal(false), setAddWord(false);
          }}
        >
          <View style={styles.modulInnerTop}>
            <FontAwesome5 name="xbox" size={40} color="#d62828" />
          </View>
        </TouchableOpacity>
        {/* modal içeriği */}
        {addWord ? (
          <View style={styles.modulInnerBottom}>
            <TextInput
              value={engWord}
              onChangeText={(e) => setEngWord(e)}
              placeholder="English"
              style={styles.input}
            />
            <TextInput
              value={trWord}
              onChangeText={(e) => setTrWord(e)}
              placeholder="Turkish"
              style={styles.input}
            />
            <TouchableOpacity onPress={handleAdd}>
              <View style={styles.saveButton}>
                <Text
                  style={{
                    fontSize: 30,
                    fontWeight: "bold",
                    color: "#fff",
                    letterSpacing: 3,
                  }}
                >
                  Save
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.modulInnerBottom}>
            <FlatList
              showsVerticalScrollIndicator={false}
              data={words}
              keyExtractor={(item) => item.id}
              renderItem={(item) => {
                return (
                  <View style={styles.wordCard}>
                    <View style={{ flex: 4, alignItems: "center" }}>
                      <Text style={{ fontSize: 25, fontWeight: 700 }}>
                        {item.item.en}
                      </Text>
                    </View>
                    <View style={{ flex: 1 }}>
                      <TouchableOpacity onPress={() => handleDelete(item)}>
                        <FontAwesome5 name="xbox" size={30} color="#d62828" />
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              }}
            ></FlatList>
          </View>
        )}
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  modul: {
    backgroundColor: "#fff",
    width: "100%",
    height: 320,
    position: "absolute",
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modulInnerTop: {
    width: "100%",
    alignItems: "flex-end",
    marginTop: 10,
    paddingRight: 10,
  },
  modulInnerBottom: {
    width: "100%",
    height: "100%",
    justifyContent: "flex-start",
    alignItems: "center",
    gap: 30,
  },
  input: {
    width: 200,
    height: 40,
    paddingLeft: 12,
    backgroundColor: "#BDC9D5",
    borderRadius: 10,
    fontSize: 20,
    fontWeight: "700",
    textTransform: "capitalize",
  },
  saveButton: {
    width: 120,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: "#d62828",
    Width: 3,
    borderColor: "#fff",
  },
  wordCard: {
    width: 300,
    height: 45,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "red",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 10,
  },
});
