import React, { useEffect } from 'react';
import {View, StyleSheet, Alert, BackHandler} from 'react-native';
import {Avatar, Title, Caption, Drawer, Text, TouchableRipple, Switch} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function SetDrawerNavAdm(props){
    
    const [isDarkTheme, setIsDarkTheme] = React.useState(false)

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    const handleLogout = () => {
        Alert.alert(
            'Logout Button Pressed!',
            'Are you sure? 😟',
            [
                {
                    text: 'No',
                    onPress: () => console.log('Cancel Pressed!'),
                    style: 'cancel'
                },
                {
                    text: 'Yes',
                    onPress: () => props.navigation.replace('SignIn'),
                },
            ],
            {cancelable: false}
        )
    }

    return(
        <View style={styles.container}>
            <DrawerContentScrollView { ... props }>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfo}>
                        <Title style={styles.title}>Welcome Back</Title>
                        <Title style={styles.title}>Admin De' Ans Clothing</Title>
                    </View>

                    <Drawer.Section>
                        <DrawerItem 
                            icon= {({color, size}) => (
                                <SimpleLineIcons name="settings" 
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Settings" 
                            onPress={() => {props.navigation.navigate('Settings')}}
                        />
                    </Drawer.Section>

                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {toggleTheme()}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={isDarkTheme}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>

            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon= {({color, size}) => (
                        <MaterialCommunityIcons name="logout" 
                            color={color}
                            size={size}
                        />
                    )}
                    label="Logout" 
                    onPress={handleLogout}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    drawerContent: {
        flex: 1
    },

    userInfo: {
        paddingLeft: 16,
        paddingBottom: 8,
        marginBottom: 5,
        borderBottomColor: '#f4f4f4',
        borderBottomWidth: 1
    },

    title: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },

    preference: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16
    },
})