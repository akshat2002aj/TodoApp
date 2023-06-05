import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import AddTodoModel from './addTodoModel';
import { IconButton } from 'react-native-paper';

const AddTodoButton = () => {
  const [visible, setVisible] = useState(false);
  return (
    <View>
      <TouchableOpacity onPress={() => setVisible(true)}>
        <View style={styles.container}>
          <IconButton icon={'plus'} size={25} iconColor={'#98A2B3'} />
          <Text style={styles.text}>AddTodo</Text>
        </View>
      </TouchableOpacity>
      <AddTodoModel visible={visible} setVisible={setVisible} />
    </View>
  );
};

export default AddTodoButton;

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
    color: '#ABB6C8',
    fontSize: 16,
    lineHeight: 24,
    fontWeight: '500',
  },
});
