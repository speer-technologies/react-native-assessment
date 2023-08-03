import React from 'react';
import {WebView} from 'react-native-webview';
import {profileStyles} from './Styles';

const ProfileScreen = ({route}) => {
  const userProfile = route?.params?.userProfile;
  return <WebView source={{uri: userProfile}} style={profileStyles.webView} />;
};

export default ProfileScreen;
