import { View, Text, StyleSheet, TextInput } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons'
import { Colors } from '../constants/Colors'

type Props = {}

const searchBar = (props: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <Ionicons name='search-outline' size={25} color={Colors.iconGrey} />
        <TextInput
          placeholder='Search'
          placeholderTextColor={Colors.textDark}
          style={styles.searchText}
          autoCapitalize='none'
        />
      </View>
    </View>
  )
}

export default searchBar

const styles = StyleSheet.create({
  container:{
    marginHorizontal: 20,
    flex: 1
  },
  searchBar:{
    backgroundColor: '#E4E4E4',
    paddingHorizontal: 12,
    paddingVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
    gap: 10,
    alignItems: 'center'
  },
  searchText:{
    fontSize: 14,
    flex: 1,
    color: Colors.textDark

  }
})