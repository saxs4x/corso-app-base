import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const CounterScreen = () => {
    // metodo default di creazione di uno state;
    const [count, setCount] = useState(0); // 0 valore iniziale
    const [isZero, setIsZero] = useState(true);

    useEffect(() => {
        if(count === 0){
            setIsZero(true)
        } else {
            setIsZero(false)
        }
    })
    
    return (
        <View style={styles.boxStyle}>
            <Button title="Aumenta" onPress={() => setCount(count + 1)}/>
            <Button title="Diminusci" onPress={() => setCount(count - 1)}/>
            <Button title="Azzera" onPress={() => setCount(0)}/>
            <Text style={styles.totLabel}>Conto: {count}</Text>
            {isZero && 
            <Text style={styles.notification}>
                Hai azzerato il conto!
                </Text>}
        </View>
    )
};

const styles = StyleSheet.create({
    boxStyle: {
        justifyContent: 'space-evenly',
        alignItems: 'stretch'
    },
    totLabel: {
        padding: 20,
        borderWidth: 4,
        textAlign: 'center',
        fontSize: 24,
        color: '#7233F0',
        borderColor: '#7233F0',
        fontWeight: 'bold'
    },
    notification: {
        backgroundColor: '#FFD966',
        padding: 10,
        fontWeight: 'bold'
    }
});

export default CounterScreen;