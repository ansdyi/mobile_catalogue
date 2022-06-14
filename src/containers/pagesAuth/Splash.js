import React, { useEffect } from 'react';
import {View, StyleSheet, Dimensions, StatusBar} from 'react-native';
import * as Animatable from 'react-native-animatable';

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace('Home')
        }, 2000)
    })

    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#F6BFBF' barStyle="light-content"/>
            <View style={styles.header}>
                <Animatable.Image 
                animation="fadeIn"
                duraton="1500"
                source={require('../../assets/logo/DALogoCircle.png')}
                style={styles.logo}
                resizeMode="stretch"
                />
            </View>
        </View>
    )
}

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6BFBF'
    },

    header: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center'
    },

    logo: {
        width: height_logo,
        height: height_logo
    }
})

export default Splash;