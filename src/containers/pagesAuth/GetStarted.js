import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Dimensions, StatusBar} from 'react-native';
import LinierGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import * as Animatable from 'react-native-animatable';

const GetStarted = ({navigation}) => {
    return(
        <View style={styles.container}>
            <StatusBar backgroundColor='#F6BFBF' barStyle="light-content"/>
            <View style={styles.header}>
                <Animatable.Image 
                animation="bounceIn"
                duraton="1500"
                source={require('../../assets/logo/DALogoCircle.png')}
                style={styles.logo}
                resizeMode="stretch"
                />
            </View>
            <Animatable.View 
                style={styles.footer}
                animation="fadeInUpBig"    
            >
                <Text style={styles.title}>Welcome Back Our Admin!</Text>
                <Text style={styles.title}>Please Login First!</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
                        <LinierGradient
                            colors={['#F5E2D6', '#F6BFBF']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSignIn}>Get Started</Text>
                            <MaterialIcons
                                name="navigate-next"
                                color="#fff"
                                size={25}
                            />
                        </LinierGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
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

    footer: {
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 50,
        paddingHorizontal: 30
    },

    logo: {
        width: height_logo,
        height: height_logo
    },

    title: {
        color: 'black',
        fontSize: 23,
        fontWeight: 'bold'
    },

    text: {
        color: 'gray',
        marginTop:5
    },

    button: {
        alignItems: 'center',
        marginTop: 30
    },

    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },

    textSignIn: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 17
    }
})

export default GetStarted;