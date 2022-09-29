import React from "react";
import { Text, StyleSheet } from "react-native"; // blocco 1 import 

const text = 'PROBLEMA RISOLTO'

const ComponentScreen = () => {
    return <Text style={styles.textStyle} >{text}</Text>
}; // blocco 2 funzione che torna JSX

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 34,
    } 
}); // blocco 3 aggiungi stile

export default ComponentScreen; // blocco 4 rendo disponibile il componente al resto dell'applicativo
