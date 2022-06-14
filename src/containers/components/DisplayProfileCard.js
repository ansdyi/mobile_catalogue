import React from 'react';
import { Text } from 'react-native';
import { Card, ProfileImage, ProfileDescription } from '../styles/DisplayProfileStyles';

const DisplayProfileCard = ({item, onDelete}) => {
    return (
        <Card>
            {item.image !== null ? 
                <ProfileImage source={{uri: item.image}}/> 
                : 
                <Text>==== No Data Founded ====</Text> 
            }
            <ProfileDescription>{item.description}</ProfileDescription>
        </Card>
    )
}

export default DisplayProfileCard;