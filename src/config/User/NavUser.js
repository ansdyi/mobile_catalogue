import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Entypo from 'react-native-vector-icons/Entypo';

import {Home, Catalogue, Information, Profile} from '../../containers/pagesUser';
import {SetDrawerNavUser} from './SetDrawerNavUser';


//Stack
const HomeStack = createStackNavigator();
const StackHome = ({navigation}) => {
    return(
        <HomeStack.Navigator 
            screenOptions={{
                headerStyle: {backgroundColor: '#F6BFBF'},
                headerTintColor: '#fff',
                headerTitleStyle: {fontWeight: 'bold'}
            }}
        >
            <HomeStack.Screen 
                name="Home" 
                component={Home} 
                options={{
                    headerLeft: () => (
                        <Entypo.Button 
                            name= "menu" 
                            size= {23} 
                            backgroundColor= "#F6BFBF"
                            onPress={() => navigation.openDrawer()}
                        />
                    )
                }}
            />
        </HomeStack.Navigator>
    )
}

const CatalogueStack = createStackNavigator();
const StackCatalogue = ({navigation}) => {
    return(
        <CatalogueStack.Navigator 
            screenOptions={{
                headerStyle: {backgroundColor: '#F6BFBF'},
                headerTintColor: '#fff',
                headerTitleStyle: {fontWeight: 'bold'}
            }}
        >
            <CatalogueStack.Screen 
                name="Catalogue" 
                component={Catalogue} 
                options={{
                    headerLeft: () => (
                        <Entypo.Button 
                            name= "menu" 
                            size= {23} 
                            backgroundColor= "#F6BFBF"
                            onPress={() => navigation.openDrawer()}
                        />
                    )
                }}
            />
        </CatalogueStack.Navigator>
    )
}

//Drawer Menu
const Drawer = createDrawerNavigator();
const NavUser = ({navigation}) => {
    return(
        <Drawer.Navigator drawerContent={props => <SetDrawerNavUser { ... props} />}>
            <Drawer.Screen name="Home" component={StackHome} />
            <Drawer.Screen name="Catalogue" component={StackCatalogue} />
        </Drawer.Navigator>
    )
}
export default NavUser;