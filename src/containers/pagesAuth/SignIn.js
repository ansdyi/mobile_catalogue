import React, {Component} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Platform, TextInput, StatusBar, Alert, ScrollView} from 'react-native';
import LinierGradient from 'react-native-linear-gradient';
import * as Animatable from 'react-native-animatable';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';

import firebase from '../../config/firebase';

class SignIn extends Component{
    constructor(props) {
        super(props);
        this.state = {
            email: '', 
            password: '', 
            error: '', 
            loading: false,
        };
    }

    onLoginPress() {
        if (this.state.email && this.state.password){
            this.setState({error: '', loading: true})
            const {email, password} = this.state;
            firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
                Alert.alert('Congratulations!', 'Login succesfully! 😍')
                this.setState({error: '', loading: false});
                this.props.navigation.replace('Settings');
            })
            .catch(() => {
                this.setState({error: 'Authentication failed', loading: false});
                Alert.alert('Sorry!', 'Email & Password Wrong! 😟')
            });
        } else{
            Alert.alert('Sorry!', 'Email & Password Empty! 😟')
        }
    }

    render() {
        return(
            <View style={styles.container}>
            <StatusBar backgroundColor='#F6BFBF' barStyle="light-content"/>
            <View style={styles.header}>
                <Text style={styles.textHeader}>Login With Your Private Account!</Text>
            </View>
            <Animatable.View 
                animation="fadeInUpBig"
                style={styles.footer}
            >
                <ScrollView>
                <Text style={styles.textFooter}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome5
                        name="user"
                        color='black'
                        size={20}
                    />
                    <TextInput
                        value={this.state.email}
                        onChangeText={email => this.setState({email})}
                        style={styles.textInput}
                        placeholder= "Your Email"
                        autoCapitalize="none"
                    />
                </View>

                <Text style={[styles.textFooter, {marginTop:35}]}>Password</Text>
                <View style={styles.action}>
                    <Feather
                        name="lock"
                        color='black'
                        size={20}
                    />
                    <TextInput
                        value={this.state.password}
                        onChangeText={password => this.setState({password})}
                        style={styles.textInput}
                        placeholder= "Your Password"
                        secureTextEntry={true}
                        autoCapitalize="none"
                    />
                </View>

                <View style={styles.button}>
                    <TouchableOpacity 
                        style={styles.signIn}
                        onPress={this.onLoginPress.bind(this)}
                    >
                        <LinierGradient
                            colors={['#F5E2D6', '#F6BFBF']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSignIn, {color:'white'}]}>Login</Text>
                        </LinierGradient>
                    </TouchableOpacity>
                </View>
                </ScrollView>
            </Animatable.View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F6BFBF'
    },

    header: {
        flex: 5,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 30
    },

    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },

    textHeader: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 30
    },

    textFooter: {
        color: 'black',
        fontSize: 18
    },

    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },

    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#05375a',
        fontSize: 17
    },

    button: {
        alignItems: 'center',
        marginTop: 50
    },

    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },

    textSignIn: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})

export default SignIn;