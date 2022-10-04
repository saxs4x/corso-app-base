import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity } 
from 'react-native';

const ColorScreen = () => {
   return (
    <View>
        <TouchableOpacity>
            <Text>Aggiungi Rosso</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>Aggiungi Verde</Text>
        </TouchableOpacity>
        <TouchableOpacity>
            <Text>Aggiungi Blu</Text>
        </TouchableOpacity>
        <View style={{
            backgroundColor: `rgb(0, 0, 0)`, 
            width: 100, height: 100                  
        }}>
        </View>
    </View>
   )
}

const styles = StyleSheet.create({});

export default ColorScreen;