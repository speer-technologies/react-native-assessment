import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  Linking,
  Pressable,
} from "react-native";
import * as WebBrowser from "expo-web-browser";
import navigationService from "../../navigator/navigationService";
import { FontAwesome } from "@expo/vector-icons";

const UserList = ({ data = [], onRefresh = () => {} }) => {
  const [refreshing, setRefreshing] = useState(false);

  const _renderItem = ({ item }) => {
    return (
      <Pressable
        style={styles.itemContainer}
        onPress={() =>
          navigationService.navigate("Profile", { profile_url: item.url })
        }
      >
        <Image source={{ uri: item.avatar_url }} style={styles.profileImg} />

        <Text style={styles.text}>
          {"Username: "}
          <Text style={{ fontWeight: "700", fontSize: 16 }}>
            {item.login + "\n"}
          </Text>
          <Text
            style={styles.link}
            onPress={() => WebBrowser.openBrowserAsync(item.html_url)}
          >
            <FontAwesome name="external-link" size={9} /> Visit github profile
          </Text>
        </Text>
      </Pressable>
    );
  };

  const _empty = () => <Text>Not Found!!</Text>;

  const refresh = async () => {
    setRefreshing(true);
    await onRefresh();
    setRefreshing(false);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        extraData={data}
        refreshing={refreshing}
        onRefresh={refresh}
        renderItem={_renderItem}
        ListEmptyComponent={_empty}
        keyboardShouldPersistTaps={"always"}
        keyExtractor={(item, index) => item.id}
        ItemSeparatorComponent={() => <View style={{ height: 6 }} />}
        ListHeaderComponent={() => <View style={{ height: 6 }} />}
        ListFooterComponent={() => <View style={{ height: 6 }} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 49,
  },
  text: {
    marginStart: 25,
    fontSize: 14,
  },
  itemContainer: {
    width: "90%",
    alignSelf: "center",
    flexDirection: "row",
    height: 60,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    paddingStart: 6,
    borderRadius: 4,
    elevation: 2,
    backgroundColor: "#fff",
  },
  link: {
    lineHeight: 24,
    color: "#0645AD",
    fontSize: 10,
    textDecorationLine: "underline",
  },
});

export default UserList;
