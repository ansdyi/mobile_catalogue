import React from 'react';
import { Card, CatalogueTitle, CatalogueImage, CatalogueDescription, Divider, Options, PublishTime } from '../styles/DisplayCatalogueStyles';
import moment from 'moment';

const DisplayCatalogueCard = ({item}) => {
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
            </Options>
        </Card>
    )
}

export default DisplayCatalogueCard;