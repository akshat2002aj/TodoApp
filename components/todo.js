import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { IconButton } from 'react-native-paper';
import React from 'react';

const Todo = (props) => {
  const handleTodo = (e) => {
    console.log(e);
  };
  return (
    <TouchableOpacity onPress={() => props.onPress()}>
      <View style={styles.container}>
        <IconButton
          icon={
            props.checked ? 'check-circle' : 'checkbox-blank-circle-outline'
          }
          size={25}
          iconColor={props.checked ? '#7F56D9' : '#98A2B3'}
        />
        <Text style={styles.text}>{props.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Todo;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 72,
    marginVertical: 6,
    backgroundColor: '#F9F9FB',
  },
  text: {
    marginLeft: 5,
    color: '#30374F',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
  },
});
