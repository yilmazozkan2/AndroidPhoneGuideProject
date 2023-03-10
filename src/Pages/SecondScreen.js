import { View, Text, Image, StyleSheet, Dimensions, StatusBar, ScrollView } from 'react-native'
import React from 'react'


export default function SecondPage(props) {
  const {imageUrl, title, description} = props.route.params
  return (
    <View style={styles.container}>
     <StatusBar
        backgroundColor="white"
        barStyle='dark-content'
      />
        <ScrollView>

        <Image resizeMode='stretch' style={styles.image} source={{ uri: imageUrl }} />
      
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      </ScrollView>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    backgroundColor: 'white',
    flex:1
    
  },
  image:{
    height: Dimensions.get('window').height / 4
  },
  title:{
    color:'black',
    fontSize: 18,
    marginLeft: 15,
    marginRight: 5,
    marginTop:7,
    fontWeight: 'bold'
  },
  description:{
    fontSize: 17,
    color: '#191919',
    textAlign: 'justify',
    marginLeft: 15,
    marginRight: 15,
    marginTop: 15,
    lineHeight: 27
  }
});