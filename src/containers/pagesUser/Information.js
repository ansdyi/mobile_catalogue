import React, {useEffect, useState} from 'react';
import { FlatList, StatusBar } from 'react-native';
import DisplayInformationCard from '../components/DisplayInformationCard';
import { Container, CardWrapper } from '../styles/DisplayInformationStyles';
import firestore from '@react-native-firebase/firestore';

const Information = ({navigation}) => {

    const [information, setInformation] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchInformation = async () => {
            try {
                const list = [];
    
                await firestore()
                .collection('information')
                .orderBy('publishTime', 'desc')
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach(doc => {
                        const {information} = doc.data();
                        list.push({
                            id: doc.id,
                            information
                        });
                    })
                })
    
                setInformation(list);
    
                if(loading) {
                    setLoading(false);
                }
    
                console.log('Information: ', information)
    
            } catch(e) {
                console.log(e);
            }
        }

        fetchInformation();
    })

    return(
        <Container>
            <StatusBar backgroundColor='#F6BFBF' barStyle="light-content"/>
                <CardWrapper>
                    <FlatList 
                        data= {information}
                        renderItem= {({item}) => <DisplayInformationCard item= {item} />}
                        keyExtractor= {item => item.id}
                        showsVerticalScrollIndicator= {false}
                    />
                </CardWrapper>
        </Container>
    )
}

export default Information;