import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {homeStyles} from './Styles';

export const NotFound = () => {
  return (
    <View style={homeStyles.listContainer}>
      <Text style={homeStyles.notFound}>User not found</Text>
    </View>
  );
};

export const GitHubProfile = ({user, navigation}) => {
  return (
    <FlatList
      data={user}
      // render items in list
      renderItem={item => (
        <FlatListView navigation={navigation} item={item?.item} />
      )}
      keyExtractor={item => item?.key}
      style={homeStyles.listView}
    />
  );
};

const FlatListView = ({item, navigation}) => {
  return (
    <View style={homeStyles.listContainer}>
      <Image style={homeStyles.avatar} source={{uri: item.avatar_url}} />
      <Text style={homeStyles.username}>{item?.login}</Text>
      <Text style={homeStyles.name}>{item?.name}</Text>
      {!!item?.bio && (
        <Text style={homeStyles.description}>
          <Text style={homeStyles.bioText}>Bio: </Text>
          <Text>{item?.bio}</Text>
        </Text>
      )}
      <Text
        style={homeStyles.followers}
        onPress={() => openUserProfile(item?.login, navigation)}>
        Followers: {item?.followers}
      </Text>
      <Text
        style={homeStyles.following}
        onPress={() => openUserProfile(item?.login, navigation)}>
        Following: {item?.following}
      </Text>
      <View style={homeStyles.itemSeparator} />
    </View>
  );
};

const openUserProfile = (user, navigation) => {
  navigation.navigate('Profile', {userProfile: `https://github.com/${user}`});
};
