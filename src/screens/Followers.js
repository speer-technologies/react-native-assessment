import React, { useEffect, useState } from "react";
import { View, StyleSheet, ActivityIndicator } from "react-native";
import UserList from "../components/UserList";
import home from "../services/home";

const Followers = (props) => {
  const { url } = props.route.params;

  const [listData, setListData] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (url) {
      fetchData();
    }
  }, [url]);

  const fetchData = async () => {
    try {
      const response = await home.getApiResponse(url);
      setListData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (loading) return <ActivityIndicator />;

  return (
    <View style={styles.container}>
      <UserList data={listData} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
});

export default Followers;
