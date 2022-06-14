import React, {useEffect, useState} from 'react';
import { FlatList, StatusBar, StyleSheet} from 'react-native';
import DisplayProfileCard from '../components/DisplayProfileCard';
import { Container, CardWrapper } from '../styles/DisplayProfileStyles';
import firestore from '@react-native-firebase/firestore';

const Profile = ({navigation}) => {

    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const list = [];
    
                await firestore()
                .collection('profile')
                .orderBy('publishTime', 'desc')
                .get()
                .then((querySnapshot) => {
                    querySnapshot.forEach(doc => {
                        const {image, description, publishTime} = doc.data();
                        list.push({
                            id: doc.id,
                            image,
                            description,
                            publishTime
                        });
                    })
                })
    
                setProfile(list);
    
                if(loading) {
                    setLoading(false);
                }
    
                console.log('Profile: ', profile)
    
            } catch(e) {
                console.log(e);
            }
        }

        fetchProfile();
    }, [])

    return(
        <Container>
            <StatusBar backgroundColor='#F6BFBF' barStyle="light-content"/>
                <CardWrapper>
                    <FlatList 
                        data= {profile}
                        renderItem= {({item}) => <DisplayProfileCard item= {item}/>}
                        keyExtractor= {item => item.id}
                        showsVerticalScrollIndicator= {false}
                    />
                </CardWrapper>
        </Container>
    )
}

export default Profile;