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
        <View>
            <Button title="Aumenta" onPress={() => setCount(count + 1)}/>
            <Button title="Diminusci" onPress={() => setCount(count - 1)}/>
            <Button title="Azzera" onPress={() => setCount(0)}/>
            <Text style={{textAlign: 'center'}}>Conto: {count}</Text>
            {isZero && 
            <Text style={{textAlign: 'center'}}>
                Hai azzerato il conto!
                </Text>}
        </View>
    )
};

const styles = StyleSheet.create({
    
});

export default CounterScreen;