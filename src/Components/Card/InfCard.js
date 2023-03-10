import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import styles from "./Card.style"
import { useNavigation } from '@react-navigation/native';



const InfCard = ({ datums }) => {
  const navigation = useNavigation();
  const navigateToPage = () => {
  const param = {
      imageUrl: datums.imageUrl,
      title: datums.title,
      description: datums.description
  };
    navigation.navigate('SecondScreen', param);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={navigateToPage}
      >
        <Image resizeMode='stretch' style={styles.image} source={{ uri: datums.imageUrl }} />
        <View style={styles.inner_container}>
          <Text style={styles.title}>{datums.title}</Text>
          <Text ellipsizeMode='tail' numberOfLines={3} style={styles.description}>{datums.description}</Text>
        </View>
      </TouchableOpacity>

    </View>

  )
}
export default InfCard;