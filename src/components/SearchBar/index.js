import React, { useEffect, useState } from "react";
import { View, StyleSheet, TextInput, Keyboard } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import useDebounce from "../../utils/useDebounce";

const SearchBar = ({ onInput = () => {}, setLoading = () => {} }) => {
  const [searchText, setSearchText] = useState("");
  const debouncedValue = useDebounce(searchText, 200);

  useEffect(() => {
    onInput(debouncedValue);
  }, [debouncedValue]);

  const blur = () => {
    setSearchText("");
    Keyboard.dismiss();
  };

  const onSearch = (text) => {
    setLoading(true);
    setSearchText(text);
  };

  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={20} color="#ccc" />
      <TextInput
        style={styles.text}
        placeholder="Search"
        value={searchText}
        onChangeText={onSearch}
      />
      {searchText ? (
        <AntDesign name="closecircle" size={14} color="#ccc" onPress={blur} />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 44,
    width: "90%",
    marginTop: 8,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: "#ddd",
    alignItems: "center",
    flexDirection: "row",
    paddingHorizontal: 8,
  },
  text: {
    width: "88%",
    paddingHorizontal: 10,
  },
});

export default SearchBar;
