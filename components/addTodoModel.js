import {
  View,
  Text,
  Modal,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import TodoSlice from '../features/todoSlice';
import { IconButton } from 'react-native-paper';

const AddTodoModel = (props) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');

  const addData = () => {
    dispatch(
      TodoSlice.actions.addTodoSuccess({
        name: name,
        completed: false,
      })
    );

    props.setVisible(false);
    setName('');
  };
  return (
    <Modal animationType={'fade'} transparent={false} visible={props.visible}>
      <View style={styles.container}>
        <View style={styles.modal}>
          <View style={{ alignItems: 'flex-end' }}>
            <IconButton
              icon="close"
              iconColor="red"
              size={25}
              onPress={() => props.setVisible(false)}
            />
          </View>
          <Text style={styles.header}>Add Todo</Text>
          <TextInput
            placeholder="Event Name"
            style={styles.input}
            value={name}
            onChangeText={(newText) => setName(newText)}
          />
          <TouchableOpacity disabled={!name} onPress={addData}>
            <Text style={styles.btn}>Add Todo</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

export default AddTodoModel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D7D7D7',
  },
  modal: {
    justifyContent: 'center',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    height: 270,
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#fff',
    paddingHorizontal: 10,
  },
  header: {
    textAlign: 'center',
    marginBottom: 20,
    fontSize: 20,
    color: '#5D6B98',
    fontWeight: '600',
  },
  input: {
    marginHorizontal: 5,
    height: 50,
    backgroundColor: '#F9F9FB',
    paddingHorizontal: 20,
    borderRadius: 10,
    color: '#30374F',
    fontSize: 16,
  },
  btn: {
    backgroundColor: '#7F56D9',
    padding: 10,
    textAlign: 'center',
    borderRadius: 10,
    marginHorizontal: 5,
    marginVertical: 20,
    color: '#fff',
    fontSize: 16,
  },
});
