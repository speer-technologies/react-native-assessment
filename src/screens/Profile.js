import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  Image,
  Pressable,
} from "react-native";
import RepoList from "../components/RepoList";
import navigationService from "../navigator/navigationService";
import home from "../services/home";

const Profile = (props) => {
  const { profile_url } = props.route.params;

  const [profileData, setProfileData] = useState(false);
  const [repo, setRepo] = useState([]);

  useEffect(() => {
    if (profile_url) {
      fetchProfile();
      fetchRepo();
    }
  }, [profile_url]);

  const fetchProfile = async () => {
    try {
      const response = await home.getApiResponse(profile_url);
      setProfileData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchRepo = async () => {
    try {
      const response = await home.getApiResponse(profile_url + "/repos");
      setRepo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const Info = ({ data, title, onPress }) => {
    return (
      <Pressable style={styles.infoItem} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.infoData}>{data}</Text>
      </Pressable>
    );
  };

  if (profileData == false) return <ActivityIndicator />;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={{ uri: profileData.avatar_url }} />
      </View>
      <View style={styles.headerName}>
        <Text style={styles.name}>{profileData.name}</Text>
        <Text style={styles.username}>@{profileData.login}</Text>
        <View style={styles.info}>
          <Info data={profileData.public_repos} title="Repos" />
          <Info
            data={profileData.followers}
            title="Followers"
            onPress={() =>
              navigationService.navigate("Followers", {
                url: profileData.followers_url,
              })
            }
          />
          <Info
            data={profileData.following}
            title="Followings"
            onPress={() =>
              navigationService.navigate("Followers", {
                url: profileData.url + "/following",
              })
            }
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          width: "100%",
        }}
      >
        <RepoList data={repo} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  header: {
    width: "90%",
    alignItems: "center",
    marginTop: 20,
  },
  headerName: {
    paddingStart: 12,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 6,
  },
  name: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 12,
  },
  username: {
    fontSize: 13,
    fontWeight: "400",
    color: "#aaa",
    textAlign: "center",
  },
  info: {
    flexDirection: "row",
  },
  infoItem: {
    height: 80,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 12,
  },
  infoData: {
    fontSize: 17,
    fontWeight: "600",
  },
});

export default Profile;
