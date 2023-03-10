import { StyleSheet } from 'react-native';
export default StyleSheet.create({
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