import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import Header from '../../components/header';
import SearchBar from '../../components/searchBar'

export default function Home() {
  const {top: safeTop} = useSafeAreaInsets();
  return (
    <View style={[styles.container, {paddingTop: safeTop}]}>
      <View style={styles.header}>
      <SearchBar/>
      <Header/>
      </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',
        // backgroundColor: 'plum'
    },
    header:{
      flexDirection: 'row',
      justifyContent:'space-between'
    },
    
})