import React, {useState} from 'react';
import {
    View, 
    Button, 
    StyleSheet
} from 'react-native';

const ColorItem = (props) => {
    const {redP, greenP, blueP} = props;

    const [red, setRed] = useState(redP);
    const [green, setGreen] = useState(greenP);
    const [blue, setBlue] = useState(blueP);

    return (
        <View>
            <View style={{
                        width: 100, 
                        height: 100, 
                        backgroundColor: `rgb(${red}, 
                        ${green}, ${blue})`}}>
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