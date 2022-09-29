import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CounterScreen = () => {
    return (
        <View>
            <Button title="Aumenta" />
            <Button title="Diminusci" />
            <Text style={{textAlign: 'center'}}>Conto: 0</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center'
    }
});

export default CounterScreen;