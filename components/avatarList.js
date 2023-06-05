import { View } from 'react-native';
import React from 'react';
import PersonAvatar from './personAvatar';

const data = [
  {
    uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
  },
  {
    uri: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg',
  },
  {
    uri: 'https://images.healthshots.com/healthshots/en/uploads/2020/12/08182549/positive-person.jpg',
  },
  {
    uri: 'https://cdn2.psychologytoday.com/assets/styles/manual_crop_1_91_1_1528x800/public/field_blog_entry_images/2018-09/shutterstock_648907024.jpg?itok=7lrLYx-B',
  },
];

const Avatars = () => {
  return (
    <View style={{ flexDirection: 'row', marginVertical: 15 }}>
      {data.map((value, index) => (
        <PersonAvatar
          leftMargin={(index + 1) * 2}
          uri={value.uri}
          key={index}
        />
      ))}
    </View>
  );
};

export default Avatars;
