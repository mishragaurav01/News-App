import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'

type Props = {}

const Header = (props: Props) => {
  return (
    <View style={styles.container}>
      <Image source={{uri: "https://randomuser.me/api/portraits/men/75.jpg"}} style={styles.userImg}/>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
        paddingHorizontal: 20,
    },
    userImg:{
        width: 50,
        height: 50,
        borderRadius: 30
    }
})