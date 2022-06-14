import React from 'react';
import { Card, Options, Delete, Information, NoData } from '../styles/SetInformationStyles';
import Ionicons from 'react-native-vector-icons/Ionicons';

const SetInformationCard = ({item, onDelete}) => {
    return (
        <Card>
            <Options>
                <Delete onPress={() => onDelete(item.id)}>
                    <Ionicons name= "trash-outline" size= {23}/>
                </Delete>
            </Options>

            {item.information !== null ? 
                <Information>{item.information}</Information> 
                : 
                <NoData>==== No Data Founded ====</NoData> 
            }
        </Card>
    )
}

export default SetInformationCard;