import React, {useState} from 'react';
import { 
    View, 
    Text, 
    StyleSheet, 
    TouchableOpacity,
    FlatList} 
from 'react-native';
import ColorItem from '../components/ColorItem';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    const randomColor = () => {
        setRed(Math.floor(Math.random() * 256));
        setGreen(Math.floor(Math.random() * 256));
        setBlue(Math.floor(Math.random() * 256));
    
        return `rgb(${red}, ${green}, ${blue})`;
    } 
    
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
                return <ColorItem   redP={red} 
                                    greenP={green} 
                                    blueP={blue}/>
            }}
        />
    </View>
   )
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