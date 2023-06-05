import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { IconButton } from 'react-native-paper';
import Todo from './todo';
import AddTodoButton from './addTodoButton';
import { useSelector, useDispatch } from 'react-redux';
import TodoSlice from '../features/todoSlice';

const TodoList = () => {
  const dispatch = useDispatch();

  const handleClick = (index) => {
    dispatch(TodoSlice.actions.handleCompleted(index));
  };

  const handleDelete = () => {
    dispatch(TodoSlice.actions.deleteAllTodoSuccess());
  };

  const data = useSelector((state) => state.todo);

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.subHeading}>Task List</Text>
        <IconButton
          icon="delete"
          iconColor="#F30000"
          onPress={handleDelete}
          disabled={data.todo.length === 0}
        />
      </View>
      <View>
        {data.todo.map((todo, index) => (
          <Todo
            key={index}
            name={todo.name}
            checked={todo.completed}
            id={index}
            onPress={() => handleClick(index)}
          />
        ))}
        {data.todo.length === 0 ? (
          <Text
            style={{
              color: 'red',
              fontSize: 14,
              textAlign: 'center',
              marginVertical: 15,
              fontWeight: '500',
            }}
          >
            No Todo Added Yet
          </Text>
        ) : (
          ''
        )}
      </View>
      <AddTodoButton />
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    marginTop: 15,
  },
  subHeading: {
    fontSize: 14,
    color: '#5D6B98',
    marginVertical: 12,
    fontWeight: '500',
  },
});
