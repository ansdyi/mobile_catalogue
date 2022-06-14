import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import {GetStarted, SignIn} from '../containers/pagesAuth';
import RootUser from './User/RootUser';
import NavAdm from './Adm/NavAdm';


const Stack = createStackNavigator();
const Router = ({navigation}) => {
    return(
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Stack.Screen name="RootUser" component={RootUser} />
            <Stack.Screen name="GetStarted" component={GetStarted} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="Settings" component={NavAdm} />
        </Stack.Navigator>
    )
}

export default Router;