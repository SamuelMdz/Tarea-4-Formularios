import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  item: {
    padding: 2,
    margin: 2,
    fontSize: 14
  },
});

export default function UserList({user}){
  return <View><Text style={styles.item}>❣ {user.name} ❊ {user.accountNumber} ❊ {user.age} ❊ {user.phone} </Text></View>
}