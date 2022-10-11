import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
    <View style={styles.boxStyle} >
        <Text style={styles.textStyle1} >Box Screen</Text>
        <Text style={styles.textStyle2} >Box Screen</Text>
        <Text style={styles.textStyle3} >Box Screen</Text>
    </View>
    )
}

const styles = StyleSheet.create({
    boxStyle: {
        borderWidth: 2,
        alignItems: 'stretch',
        flexDirection: 'row',
        height: 100
    },
    textStyle1: {
        borderWidth: 2,
        flex: 1,
        borderColor: 'red',
    },
    textStyle2: {
        borderWidth: 2,
        flex: 5,
        borderColor: 'red',
    },
    textStyle3: {
        borderWidth: 2,
        flex: 6,
        borderColor: 'red',
    }
});

export default BoxScreen;