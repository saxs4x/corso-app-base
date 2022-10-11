import React, {useState} from 'react';
import {
    View, 
    Button, 
    Text,
    StyleSheet
} from 'react-native';

const ColorItem = (props) => {
    const {redP, greenP, blueP} = props;

    const [red, setRed] = useState(redP);
    const [green, setGreen] = useState(greenP);
    const [blue, setBlue] = useState(blueP);

    return (
        <View>
            <View style={{backgroundColor: `rgb(${red}, 
                ${green}, ${blue})`}}>
        <Text>{`rgb(${red}, ${green}, ${blue})`}</Text>
            </View>
            <Button title="Aumenta Rosso" 
                    onPress={() => setRed(red + 100)}
            />
            <Button title="Diminuisci Rosso" 
                    onPress={() => setRed(red - 100)}
            />
            <Button title="Aumenta Verde" 
                    onPress={() => setGreen(green + 100)}
            />
            <Button title="Diminuisci Verde" 
                    onPress={() => setGreen(green - 100)}
            />
            <Button title="Aumenta Blu" 
                    onPress={() => setBlue(blue + 100)}
            />
            <Button title="Diminuisci Blu" 
                    onPress={() => setBlue(blue - 100)}
            />
        </View>
    )
};

const styles = StyleSheet.create({});

export default ColorItem;