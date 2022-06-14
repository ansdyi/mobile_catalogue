import React, { useEffect } from 'react';
import {View, Text, StatusBar, Image, ScrollView, StyleSheet, Alert, BackHandler } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({navigation}) => {

    // useEffect(() => {
    //     const backAction = () => {
    //       Alert.alert("Hold on!", "Are you sure you want to go back?", [
    //         {
    //           text: "Cancel",
    //           onPress: () => null,
    //           style: "cancel"
    //         },
    //         { text: "YES", onPress: () => BackHandler.exitApp() }
    //       ]);
    //       return true;
    //     };
    
    //     const backHandler = BackHandler.addEventListener(
    //       "hardwareBackPress",
    //       backAction
    //     );
    
    //     return () => backHandler.remove();
    //   }, []);    

    return(
        <ScrollView style={styles.container}>
            <StatusBar backgroundColor='#F6BFBF' barStyle="light-content"/>
            {/* Information */}
            <View style={styles.wrapperInformatin}>
                <View style={styles.wrapperTextbuttonImage}>
                    <Text>For more Information about How to order or Want to ask something.</Text>
                    <TouchableOpacity 
                        style={styles.buttonImage} 
                        onPress={() => navigation.navigate('Information')} >
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
                    <Text>For those of you who want to know a little bit of De' Ans Clothing's Profile.</Text>
                    <TouchableOpacity 
                        style={styles.buttonImage} 
                        onPress={() => navigation.navigate('Profile')} >
                        <Image 
                            source={require('../../assets/image/Profile.png')} 
                            style={styles.image}/>
                        <View style={styles.imageBlur}></View>
                        <Text style={styles.text}>Click Here!</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.wrapperCopyrights}>
                <Text>Copyright 2020 © Anisa Damayanti for Kerja Praktek</Text>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2e64e515'
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
        height: 30, 
        alignItems: 'flex-end', 
        paddingRight: 15, 
        paddingTop: 7, 
        marginTop: 400
    }
})

export default Home;