import { View, Text, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import Avatars from '../components/avatarList';
import TodoList from '../components/todoList';
import Header from '../components/Header';

const Home = () => {
  return (
    <ScrollView>
      <View style={styles.home}>
        <Text style={styles.header}>Task Details</Text>
        <Header />
        <Avatars />
        <TodoList />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    marginHorizontal: 17,
    flex: 1,
    marginTop: 57,
    backgroundColor: '#D7D7D7',
    marginBottom: 20,
  },
  header: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '500',
    color: '#111322',
    marginVertical: 24,
    lineHeight: 24,
  },
});
