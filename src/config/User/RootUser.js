import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Feather from 'react-native-vector-icons/Feather';

import {Splash} from '../../containers/pagesAuth';
import {Information, Profile} from '../../containers/pagesUser';
import NavUser from './NavUser'

//Stack
const InformationStack = createStackNavigator();
const StackInformation = ({navigation}) => {
    return(
        <InformationStack.Navigator 
            screenOptions={{
                headerStyle: {backgroundColor: '#F6BFBF'},
                headerTintColor: '#fff',
                headerTitleStyle: {fontWeight: 'bold'}
            }}
        >
            <InformationStack.Screen 
                name="Information" 
                component={Information} 
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
        </InformationStack.Navigator>
    )
}

const ProfileStack = createStackNavigator();
const StackProfile = ({navigation}) => {
    return(
        <ProfileStack.Navigator 
            screenOptions={{
                headerStyle: {backgroundColor: '#F6BFBF'},
                headerTintColor: '#fff',
                headerTitleStyle: {fontWeight: 'bold'}
            }}
        >
            <ProfileStack.Screen 
                name="Profile" 
                component={Profile} 
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
        </ProfileStack.Navigator>
    )
}

//Router
const Stack = createStackNavigator();
const RootUser = ({navigation}) => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Home" component={NavUser} />
            <Stack.Screen name="Information" component={StackInformation} />
            <Stack.Screen name="Profile" component={StackProfile} />
        </Stack.Navigator>
    )
}

export default RootUser;