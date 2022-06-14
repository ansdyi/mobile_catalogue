import React from 'react';
import { Text } from 'react-native';
import { Card, CatalogueTitle, CatalogueImage, CatalogueDescription, PublishTime, Divider, Options, DeleteCatalogue } from '../styles/SetCatalogueStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import moment from 'moment';

const SetCatalogueCard = ({item, onDelete}) => {
    return (
        <Card>
            <CatalogueTitle>{item.title}</CatalogueTitle>
            {item.image !== null ? 
                <CatalogueImage source={{uri: item.image}}/> 
                : 
                <Text>==== No Data Founded ====</Text> 
            }
            <CatalogueDescription>{item.description}</CatalogueDescription>
            <Divider/>
            <Options>
                <PublishTime>{moment (item.publishTime.toDate()).fromNow()}</PublishTime>
                <DeleteCatalogue onPress={() => onDelete(item.id)}>
                    <Ionicons name= "trash-outline" size= {23}/>
                </DeleteCatalogue>
            </Options>
            
        </Card>
    )
}

export default SetCatalogueCard;