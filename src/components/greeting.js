import React from 'react';
import { Text, Image, View } from 'react-native';
// import la imagen
import greeting_android from '../assets/images/greeting_android.png';

const Greeting = ({ name }) => {
    return (
        <View>
            <Text>Hello AGAIN, {name}!</Text>
            <Image source={greeting_android} style={{ width: 200, height: 200 }} />
        </View>
    );
};

export default Greeting;