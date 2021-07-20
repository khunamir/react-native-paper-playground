import React from 'react';
import {View, Text, Button} from 'react-native';
import {globalStyles} from '../styles/globalStyles';

export default function HomeScreen() {
  return (
    <View style={globalStyles.container}>
      <Text>Home Screen</Text>
      <Button
        title="Go to details"
        onPress={() => navigation.navigate('Details')}
      />
    </View>
  );
}