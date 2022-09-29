import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = ({navigation})=>  {
  
  return (
    <View>
      <Button 
            onPress={()=> navigation.navigate('Component')}
            title="Vai a Component Screen"/>
      <Button 
            onPress={()=> navigation.navigate('List')}
            title="Vai a List Screen"/>
      <Button
            onPress={()=> navigation.navigate('Picture')} 
            title="Vai a Image Screen" />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;