import React from 'react';
import {View, Text, StatusBar} from 'react-native';

const Settings = ({navigation}) => {
    //  useEffect(() => {
    //     const backAction = () => {
    //         Alert.alert("Hold on!", "Are you sure you want to exit?", [
    //         {
    //           text: "Cancel",
    //           onPress: () => null,
    //           style: "cancel"
    //         },
    //         { text: "YES", onPress: () => BackHandler.exitApp() }
    //         ]);
    //         return true;
    //     };
    
    //     const backHandler = BackHandler.addEventListener(
    //         "hardwareBackPress",
    //         backAction
    //     );
    
    //     return () => backHandler.remove();
    // }, []);

    return(
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <StatusBar backgroundColor='#F6BFBF' barStyle="light-content"/>
            <Text>Settings</Text>
        </View>
    )
}

export default Settings;