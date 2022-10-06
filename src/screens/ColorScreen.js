import React, {useState} from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    FlatList, 
    useColorScheme} 
from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    console.log(colors)
   return (
    <View>
        <TouchableOpacity style={styles.button} onPress={() => {
            setColors([...colors, randomColor()])
        }}>
            <Text>Genera Colore</Text>
        </TouchableOpacity>
        <FlatList 
            data={colors}
            keyExtractor={(item) => item}
            renderItem={({item}) => {
                return <View style={styles.colorBox}>
                    <Text>{item}</Text>
                    </View>
            }}
        />
    </View>
   )
}

const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
} 

const styles = StyleSheet.create({
    button: {
        padding: 10,
        borderWidth: 1,
        alignItems: 'center'
    },
    colorBox: {
        width: 100,
        height: 100
    }
});

export default ColorScreen;