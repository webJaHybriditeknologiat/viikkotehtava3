import React from 'react';
import { Appbar } from 'react-native-paper';

// The CustomAppBar component receives navigation and back props.
export default function CustomAppBar({ navigation, back }) {
  return (
    <Appbar.Header>
      {/* If user can navigate back (on SecondScreen), back button is displayed */}
      {back ? (
        <Appbar.BackAction onPress={navigation.goBack} />
      ) : null}
      
      {/* Title on the right side of the back button and on the left side of the forward button */}
      <Appbar.Content title="MD Nav Demo" />
      
      {/* If user can’t navigate back (on HomeScreen), display arrow-right icon, which can be used to navigate to the SecondScreen */}
      {!back ? (
        <Appbar.Action icon="arrow-right" onPress={() => navigation.navigate('Second')} />
      ) : null}
    </Appbar.Header>
  );
}
