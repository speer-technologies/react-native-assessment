import React from "react";
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
import { AntDesign, Feather, FontAwesome } from "@expo/vector-icons";

const RepoList = ({ data = [] }) => {
  const _renderItem = ({ item }) => {
    return (
      <Pressable style={styles.itemContainer}>
        <View style={styles.itemContentContainer}>
          <Text style={{ fontWeight: "700", fontSize: 14 }}>{item.name}</Text>
          <Text style={styles.description} numberOfLines={1}>
            {item.description}
          </Text>
          <View style={styles.repoInfo}>
            <View style={{ ...styles.info, marginStart: 2 }}>
              <FontAwesome
                name="code-fork"
                style={{ textAlign: "center" }}
                size={18}
                color="#444"
              />
              <Text style={styles.infoText}>{item.forks_count}</Text>
            </View>
            <View style={styles.info}>
              <AntDesign
                name="warning"
                style={{ textAlign: "center" }}
                size={18}
                color="#444"
              />
              <Text style={styles.infoText}>{item.open_issues}</Text>
            </View>
            <View style={styles.info}>
              <Feather
                name="eye"
                style={{ textAlign: "center" }}
                color="#444"
                size={18}
              />
              <Text style={styles.infoText}>{item.watchers}</Text>
            </View>
            <View style={{ ...styles.info, width: 80 }}>
              <FontAwesome
                name="code"
                style={{ textAlign: "center" }}
                size={18}
                color="#444"
              />
              <Text style={styles.infoText}>
                {item.language ? item.language : "-"}
              </Text>
            </View>
          </View>
        </View>
        <Pressable
          style={styles.redirect}
          onPress={() => WebBrowser.openBrowserAsync(item.html_url)}
        >
          <Feather name="external-link" size={20} color="#0645AD" />
        </Pressable>
      </Pressable>
    );
  };

  const _empty = () => <Text>Not Found!!</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={_renderItem}
        ListEmptyComponent={_empty}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "90%",
    alignSelf: "center",
  },
  profileImg: {
    width: 50,
    height: 50,
    borderRadius: 4,
  },
  itemContainer: {
    height: 110,
    flexDirection: "row",
    alignItems: "center",
    borderBottomWidth: 0.5,
    borderBottomColor: "#ccc",
  },
  redirect: {
    width: "10%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  itemContentContainer: {
    width: "90%",
    height: "100%",
    paddingTop: 6,
    justifyContent: "space-around",
  },
  repoInfo: {
    flex: 0.8,
    flexDirection: "row",
  },
  info: {
    marginStart: 24,
    justifyContent: "space-around",
    alignItems: "center",
  },
  infoText: {
    fontSize: 12,
  },
  description: {
    fontSize: 11,
    fontWeight: "400",
    color: "#555",
  },
});

export default RepoList;
