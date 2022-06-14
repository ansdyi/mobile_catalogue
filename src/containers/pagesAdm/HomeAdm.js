import React, { useEffect } from 'react';
import {View, Text, Button, BackHandler, Alert } from 'react-native';

const HomeAdm = ({navigation}) => {
    useEffect(() => {
        const backAction = () => {
            Alert.alert("Hold on!", "Are you sure you want to exit?", [
            {
              text: "Cancel",
              onPress: () => null,
              style: "cancel"
            },
            { text: "YES", onPress: () => BackHandler.exitApp() }
            ]);
            return true;
        };
    
        const backHandler = BackHandler.addEventListener(
            "hardwareBackPress",
            backAction
        );
    
        return () => backHandler.remove();
    }, []);

    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home</Text>
            {/* <Button title="Go to Catalogue" onPress={() => navigation.navigate('Catalogue')}/> */}
        </View>
    )
}

export default HomeAdm;