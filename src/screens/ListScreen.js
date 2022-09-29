import React from 'react';
import {View, Text, FlatList, Button, StyleSheet} from 'react-native';

const ListScreen = () => {
    const courseList = [
        {name: "Christian", id: 0},
        {name: "Stefania", id: 1},
        {name: "Giacomo", id: 2},
        {name: "Francesca", id: 3},
        {name: "Barbara", id: 4},
        {name: "Luca", id: 5},
        {name: "Giorgio", id: 6},
        {name: "Rodrigue", id: 7},
    ];

    return (
        <View>
            <FlatList 
                data={courseList}
                showsVerticalScrollIndicator={false}
                renderItem={({item}) => <Text style={styles.listStyle}>{item.name}</Text>}
                keyExtractor={(item, key) => item.id}
             />
        </View>
    )
};

const styles = StyleSheet.create({
    
});

export default ListScreen;



