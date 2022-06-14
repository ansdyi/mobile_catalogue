import React from 'react';
import { Text } from 'react-native';
import { Card, Options, DeleteProfile, ProfileImage, ProfileDescription } from '../styles/SetProfileStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SetProfileCard = ({item, onDelete}) => {
    return (
        <Card>
            <DeleteProfile onPress={() => onDelete(item.id)}>
                    <Ionicons name= "trash-outline" size= {23}/>
            </DeleteProfile>
            {item.image !== null ? 
                <ProfileImage source={{uri: item.image}}/> 
                : 
                <Text>==== No Data Founded ====</Text> 
            }
            <ProfileDescription>{item.description}</ProfileDescription>
            
            
        </Card>
    )
}

export default SetProfileCard;