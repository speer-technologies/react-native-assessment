import React, {useState} from 'react';
import {View} from 'react-native';
import SearchInput from 'react-native-search-filter';
import {homeStyles} from './Styles';
import {GitHubProfile, NotFound} from './homeUtils';
import {
  SEARCH_PLACEHOLDER,
  SOMETHING_WENT_WRONG,
  USER_NOT_FOUND,
} from '../shared/Constants';

const HomeScreen = ({navigation}) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  // fetch users from github
  const fetchData = async userName => {
    try {
      const response = await fetch(`https://api.github.com/users/${userName}`);
      const responseData = await response.json();

      if (response?.status === 200) {
        data.push({
          avatar_url: responseData?.avatar_url,
          login: responseData?.login,
          name: responseData?.name,
          bio: responseData?.bio,
          followers: responseData?.followers,
          following: responseData?.following,
        });
        setData(data);
        setUser(responseData);
        setError(null);
      } else {
        setUser(null);
        setError(USER_NOT_FOUND);
      }
    } catch (error) {
      setUser(null);
      setError(SOMETHING_WENT_WRONG);
    }
  };

  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.searchContainer}>
        <SearchInput
          onChangeText={text => {
            fetchData(text);
          }}
          style={homeStyles.searchInput}
          placeholder={SEARCH_PLACEHOLDER}
        />
      </View>
      {error ? (
        <NotFound /> // called when user not found
      ) : user ? (
        <GitHubProfile user={data} navigation={navigation} /> // called when user found
      ) : null}
    </View>
  );
};

export default HomeScreen;
