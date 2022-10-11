import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const ImageDetail = props => {
    console.log(props);

    return (
        <View style={styles.containerStyle}>
            <Image style={styles.imageStyle} source={props.image} />
            <Text style={styles.textStyle}>{props.text}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    containerStyle: {
        borderWidth: 4,
        borderColor: '#5FB0FF',
        borderRadius: 5,
        marginBottom: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    imageStyle: {
        width: 200,
        height: 133
    },
    textStyle: {
        fontWeight: 'bold',
        padding: 10,
        color: '#5FB0FF'
    }
    
});

export default ImageDetail;