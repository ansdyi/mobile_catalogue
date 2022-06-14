import React, {useEffect, useState} from 'react';
import { FlatList } from 'react-native';
import DisplayCatalogueCard from '../components/DisplayCatalogueCard';
import { Container, CardWrapper } from '../styles/DisplayCatalogueStyles';
import firestore from '@react-native-firebase/firestore';

const Catalogue = () => {

    const [catalogue, setCatalogue] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCatalogue = async () => {
            try {
                const list = [];
    
                await firestore()
                .collection('catalogue')
                .orderBy('publishTime', 'desc')
                .get()
                .then((querySnapshot) => {
                    // console.log('Total Catalogue: ', querySnapshot.size)
                    querySnapshot.forEach(doc => {
                        const {title, image, description, publishTime} = doc.data();
                        list.push({
                            id: doc.id,
                            title,
                            image,
                            description,
                            publishTime
                        });
                    })
                })
    
                setCatalogue(list);
    
                if(loading) {
                    setLoading(false);
                }
    
                console.log('Catalogue: ', catalogue)
    
            } catch(e) {
                console.log(e);
            }
        }

        fetchCatalogue();
    }, [])

    return(
        <Container>
            <CardWrapper>
                <FlatList 
                    data= {catalogue}
                    renderItem= {({item}) => <DisplayCatalogueCard item= {item}/>}
                    keyExtractor= {item => item.id}
                    showsVerticalScrollIndicator= {false}
                />
            </CardWrapper>
        </Container>
    )
}

export default Catalogue;