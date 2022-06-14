import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Avatar, Title, Caption, Drawer, Text, TouchableRipple, Switch} from 'react-native-paper';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';

export function SetDrawerNavUser(props){

    const [isDarkTheme, setIsDarkTheme] = React.useState(false)

    const toggleTheme = () => {
        setIsDarkTheme(!isDarkTheme)
    }

    return(
        <View style={{flex: 1}}>
            <DrawerContentScrollView { ... props }>
                <View style={styles.drawerContent}>
                    <Drawer.Section title="Menu">
                        <DrawerItem 
                            icon= {({color, size}) => (
                                <SimpleLineIcons 
                                    name="home" 
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Home" 
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon= {({color, size}) => (
                                <Ionicons name="ios-shirt-outline" 
                                    color={color}
                                    size={size}
                                />
                            )}
                            label="Catalogue" 
                            onPress={() => {props.navigation.navigate('Catalogue')}}
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
                        <Entypo name="cycle" 
                            color={color}
                            size={size}
                        />
                    )}
                    label="Maintenance" 
                    onPress={() => {props.navigation.navigate('GetStarted')}}
                />
            </Drawer.Section>
        </View>
    )
}

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },

    userInfo: {
        paddingLeft: 100,
    },

    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },

    caption: {
        fontSize: 14,
        lineHeight: 14
    },

    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },

    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },

    paraghrap: {
        fontWeight: 'bold',
        marginRight: 3
    },

    drawerSection: {
        marginTop: 15
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