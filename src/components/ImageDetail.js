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
        borderWidth: 1,
        borderColor: '#696969b8',
        borderRadius: 5,
        marginBottom: 24,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    imageStyle: {
        width: 200,
        height: 133
    },
    textStyle: {
        fontWeight: 'bold'
    }
    
});

export default ImageDetail;