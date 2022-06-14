import React from 'react';
import { Card, DescInformation, NoData } from '../styles/DisplayInformationStyles';

const SetInformationCard = ({item}) => {
    return (
        <Card>
            {item.information !== null ? 
                <DescInformation>{item.information}</DescInformation> 
                : 
                <NoData>==== No Data Founded ====</NoData> 
            }
        </Card>
    )
}

export default SetInformationCard;