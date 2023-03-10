import React from "react";
import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10,
    },

    image: {
        height: Dimensions.get('window').height / 4,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,

    },
    title: {
        fontSize: 16,
        color:'black',
        fontWeight: 'bold',
        marginBottom: 3
    },
    description: {
        fontSize: 15,
        overflow:"visible"

    },
    inner_container:{
        padding: 5
    }
})