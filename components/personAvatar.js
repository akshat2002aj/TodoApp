import { View, Text } from 'react-native';
import { Avatar } from 'react-native-paper';
import React from 'react';

const PersonAvatar = (props) => {
  return (
    <Avatar.Image
      size={24}
      source={{
        uri: props.uri,
      }}
      style={{ marginLeft: -props.leftMargin }}
    />
  );
};

export default PersonAvatar;
