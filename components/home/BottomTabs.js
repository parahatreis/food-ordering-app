import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";

export default function BottomTabs() {
  return (
    <View style={styles.wrapper}>
      <IconButton icon='home' text='Home' />
      <IconButton icon='search' text='Browse' />
      <IconButton icon='shopping-bag' text='Grocery' />
      <IconButton icon='receipt' text='Orders' />
      <IconButton icon='user' text='Account' />
    </View>
  )
}

const IconButton = ({ icon, text }) => (
  <TouchableOpacity>
    <FontAwesome5
      name={icon}
      size={25}
      style={styles.icon}
    />
    <Text style={styles.iconText}>{text}</Text>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    margin: 10,
    marginHorizontal: 30,
    justifyContent: 'space-between',
  },
  // icon button
  icon: {
    marginBottom: 3,
    alignSelf: 'center',
  },
  iconText: {
    fontSize: 12,
  }
})