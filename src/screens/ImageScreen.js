import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import ImageDetail from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View style={{padding: 18}}>
            <ImageDetail image={require('../../assets/forest.jpg')} text={"Forest"} />
            <ImageDetail image={require('../../assets/beach.jpg')} text={"Beach"} />
            <ImageDetail image={require('../../assets/mountain.jpg')} text={"Mountain"} />
        </View>
    )
};

const styles = StyleSheet.create({});

export default ImageScreen;
