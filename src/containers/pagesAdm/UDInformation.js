import React, {Component} from 'react';
import {View, Text, Button, BackHandler, Image, ScrollView, StyleSheet } from 'react-native';
import LinierGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';

class UDInformation extends Component{
    constructor(props) {
        super(props);
        //  
      }

    render() {
        return(
            <View style={styles.container}>
                <ScrollView style={styles.container}>
                    {/* Information */}
                    <View style={styles.wrapperInformatin}>
                        <View style={styles.wrapperTextbuttonImage}>
                            <Text>For more Information about How to order or Want to ask something.</Text>
                            <TouchableOpacity 
                                style={styles.buttonImage} 
                                onPress={() => this.props.navigation.navigate('FormInformation')} >
                                <Image 
                                    source={require('../../assets/image/Information.png')} 
                                    style={styles.image}/>
                                <View style={styles.imageBlur}></View>
                                <Text style={styles.text}>Click Here!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* Profile */}
                    <View style={styles.wrapperProfile}>
                        <View style={styles.wrapperTextbuttonImage}>
                            <Text>For those of you who want to know a little bit of Profile.</Text>
                            <TouchableOpacity 
                                style={styles.buttonImage} 
                                onPress={() => this.props.navigation.navigate('UDInformation')} >
                                <Image 
                                    source={require('../../assets/image/Profile.png')} 
                                    style={styles.image}/>
                                <View style={styles.imageBlur}></View>
                                <Text style={styles.text}>Click Here!</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
                <View style={styles.wrapperCopyrights}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate('FormInformation')} style={{backgroundColor: 'pink', height: 35, width: 100, borderRadius: 10, alignItems: 'center'}}>
                        <LinierGradient
                            colors={['#F5E2D6', '#F6BFBF']}
                            style={{backgroundColor: 'pink', height: 35, width: 100, borderRadius: 10, alignItems: 'center'}}
                        >
                            <Text style={{paddingTop: 8, fontWeight: 'bold', color: 'white', fontSize: 15}}>Create</Text>
                        </LinierGradient>
                    </TouchableOpacity>
                </View>
            </View>
            
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    wrapperInformatin: {
        marginVertical: 10, 
        backgroundColor: 'white'
    },
    
    wrapperTextbuttonImage: {
        paddingVertical: 10, 
        paddingHorizontal: 15, 
        marginBottom: 5
    },

    wrapperProfile: {
        backgroundColor: 'white'
    },

    buttonImage: {
        marginTop: 10, 
        position: 'relative'
    },

    image: {
        height: 200,
        width: '100%', 
        borderRadius: 10
    },

    imageBlur: {
        width: '100%', 
        height: '100%', 
        position: 'absolute', 
        top: 0, 
        left: 0,  
        borderRadius: 10, 
        backgroundColor: 'black', 
        opacity: 0.4
    },

    text: {
        fontWeight: 'bold', 
        position: 'absolute', 
        top: 15, 
        left: 15, 
        color: 'white'
    },

    wrapperCopyrights: {
        backgroundColor: 'white', 
        height: 55, 
        alignItems: 'center',
        paddingTop: 10
    }
})

export default UDInformation;