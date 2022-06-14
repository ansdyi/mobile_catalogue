import React from 'react';
import {View, StyleSheet, Alert, BackHandler} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';

import {SetCatalogue, SetInformation, SetProfile} from '../../containers/pagesAdm';
import {AddCatalogue, AddInformation, EditInformation, AddProfile, HomeAdm} from '../../containers/pagesAdm';
import {SetDrawerNavAdm} from './SetDrawerNavAdm';


// Stack for Drawer Menu (Settings)
const SettingsStack = createStackNavigator();
const StackSettings = ({navigation}) => {
    return(
        <SettingsStack.Navigator 
            screenOptions={{
                headerStyle: {backgroundColor: '#F6BFBF'},
                headerTintColor: '#fff',
                headerTitleStyle: {fontWeight: 'bold'}
            }}
        >
            <SettingsStack.Screen 
                name="Settings" 
                component={TabSettings} 
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
        </SettingsStack.Navigator>
    )
}

//Drawer Menu (Home & Settings)
const AdmDrawer = createDrawerNavigator();
const DrawerAdm = ({navigation}) => {
    return(
        <AdmDrawer.Navigator drawerContent={props => <SetDrawerNavAdm { ... props} />}>
            <AdmDrawer.Screen name="Settings" component={StackSettings} />
        </AdmDrawer.Navigator>
    )
}

//Top Tab for Settings (Catalogue, Information, Profile)
const SettingsTab = createMaterialTopTabNavigator();
const TabSettings = ({navigation}) => {
    return (
      <SettingsTab.Navigator
        initialRouteName="SetCatalogue"
        tabBarOptions={{
          activeTintColor: 'black',
          inactiveTintColor: '#ACA6A1',
          labelStyle: { fontSize: 14, fontWeight: 'bold' },
          style: { backgroundColor: 'white' },
        }}
      >
        <SettingsTab.Screen
          name="Catalogue"
          component={SetCatalogue}
          options={{ tabBarLabel: 'Catalogue' }}
        />
        <SettingsTab.Screen
          name="Information"
          component={SetInformation}
          options={{ tabBarLabel: 'Information' }}
        />
        <SettingsTab.Screen
          name="Profile"
          component={SetProfile}
          options={{ tabBarLabel: 'Profile' }}
        />
      </SettingsTab.Navigator>
    );
}

//Stack For Catalogue (Add Catalogue)
const AddCatalogueStack = createStackNavigator();
const StackAddCatalogue = ({navigation}) => {

    const handlCancel = () => {
        Alert.alert(
            'Cancel Button Pressed!',
            'Are you sure? 😟',
            [
                {
                    text: 'No',
                    onPress: () => console.log('Cancel Pressed!'),
                    style: 'cancel'
                },
                {
                    text: 'Yes',
                    onPress: () => navigation.goBack(),
                },
            ],
            {cancelable: false}
        )
    }

    return(
        <AddCatalogueStack.Navigator 
            screenOptions={{
                headerStyle: {backgroundColor: '#F6BFBF'},
                headerTintColor: '#fff',
                headerTitleStyle: {fontWeight: 'bold'}
            }}
        >
            <AddCatalogueStack.Screen 
                name="Upload New Catalogue" 
                component={AddCatalogue} 
                options={{
                    headerLeft: () => (
                        <Feather.Button 
                            name= "arrow-left-circle" 
                            size= {23} 
                            backgroundColor= "#F6BFBF"
                            onPress={handlCancel}
                        />
                    )
                }}
            />
        </AddCatalogueStack.Navigator>
    )
}

//Stack For Information (Add Information)
const AddInformationStack = createStackNavigator();
const StackAddInformation = ({navigation}) => {

    const handlCancel = () => {
        Alert.alert(
            'Cancel Button Pressed!',
            'Are you sure? 😟',
            [
                {
                    text: 'No',
                    onPress: () => console.log('Cancel Pressed!'),
                    style: 'cancel'
                },
                {
                    text: 'Yes',
                    onPress: () => navigation.goBack(),
                },
            ],
            {cancelable: false}
        )
    }

    return(
        <AddInformationStack.Navigator 
            screenOptions={{
                headerStyle: {backgroundColor: '#F6BFBF'},
                headerTintColor: '#fff',
                headerTitleStyle: {fontWeight: 'bold'}
            }}
        >
            <AddInformationStack.Screen 
                name="Upload New Information" 
                component={AddInformation} 
                options={{
                    headerLeft: () => (
                        <Feather.Button 
                            name= "arrow-left-circle" 
                            size= {23} 
                            backgroundColor= "#F6BFBF"
                            onPress={handlCancel}
                        />
                    )
                }}
            />
        </AddInformationStack.Navigator>
    )
}

//Stack For Information (Edit Information)
const EditInformationStack = createStackNavigator();
const StackEditInformation = ({navigation}) => {
    return(
        <EditInformationStack.Navigator 
            screenOptions={{
                headerStyle: {backgroundColor: '#F6BFBF'},
                headerTintColor: '#fff',
                headerTitleStyle: {fontWeight: 'bold'}
            }}
        >
            <EditInformationStack.Screen 
                name="Edit Information" 
                component={EditInformation} 
                options={{
                    headerLeft: () => (
                        <Feather.Button 
                            name= "arrow-left-circle" 
                            size= {23} 
                            backgroundColor= "#F6BFBF"
                            onPress={() => navigation.goBack()}
                        />
                    )
                }}
            />
        </EditInformationStack.Navigator>
    )
}

//Stack For Information (Add Profile)
const AddProfileStack = createStackNavigator();
const StackAddProfile = ({navigation}) => {

    const handlCancel = () => {
        Alert.alert(
            'Cancel Button Pressed!',
            'Are you sure? 😟',
            [
                {
                    text: 'No',
                    onPress: () => console.log('Cancel Pressed!'),
                    style: 'cancel'
                },
                {
                    text: 'Yes',
                    onPress: () => navigation.goBack(),
                },
            ],
            {cancelable: false}
        )
    }

    return(
        <AddProfileStack.Navigator 
            screenOptions={{
                headerStyle: {backgroundColor: '#F6BFBF'},
                headerTintColor: '#fff',
                headerTitleStyle: {fontWeight: 'bold'}
            }}
        >
            <AddProfileStack.Screen 
                name="Upload New Profile" 
                component={AddProfile} 
                options={{
                    headerLeft: () => (
                        <Feather.Button 
                            name= "arrow-left-circle" 
                            size= {23} 
                            backgroundColor= "#F6BFBF"
                            onPress={handlCancel}
                        />
                    )
                }}
            />
        </AddProfileStack.Navigator>
    )
}

const HomeAdmStack = createStackNavigator();
const StackHomeAdm = ({navigation}) => {
    return(
        <HomeAdmStack.Navigator 
            screenOptions={{
                headerStyle: {backgroundColor: '#F6BFBF'},
                headerTintColor: '#fff',
                headerTitleStyle: {fontWeight: 'bold'}
            }}
        >
            <HomeAdmStack.Screen 
                name="Edit Information" 
                component={HomeAdm} 
                options={{
                    headerLeft: () => (
                        <Feather.Button 
                            name= "arrow-left-circle" 
                            size= {23} 
                            backgroundColor= "#F6BFBF"
                            onPress={() => navigation.goBack()}
                        />
                    )
                }}
            />
        </HomeAdmStack.Navigator>
    )
}

const Stack = createStackNavigator();
const NavAdm = ({navigation}) => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            
            <Stack.Screen name="DrawerAdm" component={DrawerAdm} />
            <Stack.Screen name="AddCatalogue" component={StackAddCatalogue} />
            <Stack.Screen name="AddInformation" component={StackAddInformation} />
            <Stack.Screen name="EditInformation" component={StackEditInformation} />
            <Stack.Screen name="AddProfile" component={StackAddProfile} />
            <Stack.Screen name="HomeAdm" component={StackHomeAdm} />
        </Stack.Navigator>
    )
}

export default NavAdm;