import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import SearchBar from "../components/SearchBar";
import UserList from "../components/UserList";
import home from "../services/home";

const Home = () => {
  const [allUserList, setAllUserList] = useState([]);
  const [searchedUserList, setSearchedUserList] = useState([]);
  const [searchText, setSearchText] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchAllUser();
  }, []);

  const fetchAllUser = async () => {
    try {
      const response = await home.getAllUsers();
      setAllUserList(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSearch = async (text) => {
    try {
      setSearchText(text);
      if (text.trim() != "") {
        const response = await home.getSearchUser(text);
        setSearchedUserList(response.data.items);
        setLoading(false);
      } else {
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <SearchBar onInput={onSearch} setLoading={setLoading} />
      {loading ? <ActivityIndicator /> : null}
      <UserList
        data={searchText ? searchedUserList : allUserList}
        onRefresh={fetchAllUser}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    backgroundColor: "#fff",
  },
});

export default Home;
