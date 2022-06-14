import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StatusBar, StyleSheet, Alert } from 'react-native';
import LinierGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SetProfileCard from '../components/SetProfileCard';
import { Container, CardWrapper } from '../styles/SetProfileStyles';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
 
const SetProfile = ({navigation}) => {

    const [profile, setProfile] = useState(null);
    const [loading, setLoading] = useState(true);
    const [deleted, setDeleted] = useState(false);

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

    useEffect(() => {
        fetchProfile();
        setDeleted(false);
    }, [deleted])

    const handleDelete = (profileId) => {
        Alert.alert(
            'Delete Button Pressed!',
            'Are you sure? 😟',
            [
                {
                    text: 'No',
                    onPress: () => console.log('Cancel Pressed!'),
                    style: 'cancel'
                },
                {
                    text: 'Yes',
                    onPress: () => deleteProfile(profileId),
                },
            ],
            {cancelable: false}
        )
    }

    const deleteProfile = (profileId) => {
        console.log('Current Post Id: ', profileId);

        firestore().collection('profile')
        .doc(profileId)
        .get()
        .then(documentSnapshot => {
            if(documentSnapshot.exists) {
                const {image} = documentSnapshot.data()

                if( image !== null ){
                    const storageRef = storage().refFromURL(image)
                    const imageRef = storage().ref(storageRef.fullPath)

                    imageRef
                    .delete()
                    .then(() => {
                        console.log(`${image} has been deleted succesfully!`)
                        deleteFirestoreData(profileId);
                        setDeleted(true);
                    })
                    .catch((e) => {
                        console.log('Error while deleting the Profile!', e)
                    })
                //if the post image is not available
                } else {
                    deleteFirestoreData(profileId);
                }
            }
        })
    }

    const deleteFirestoreData = (profileId) => {
        firestore()
        .collection('profile')
        .doc(profileId)
        .delete()
        .then(() => {
            Alert.alert('Congratulations!', 'Profile Deleted! 😥');
        })
        .catch(e => console.log('Error deleting Profile', e))
    }

    return(
        <Container>
            <StatusBar backgroundColor='#F6BFBF' barStyle="light-content"/>
            <View style={styles.bgWrapper}>
                <CardWrapper>
                    <FlatList 
                        data= {profile}
                        renderItem= {({item}) => <SetProfileCard item= {item} onDelete= {handleDelete} />}
                        keyExtractor= {item => item.id}
                        showsVerticalScrollIndicator= {false}
                    />
                </CardWrapper>
            </View>
            
            <View style={styles.wrapperCreate}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('AddProfile')} 
                    style={styles.buttonCreate}>
                    <LinierGradient
                        colors={['#F5E2D6', '#F6BFBF']}
                        style={styles.buttonCreate}
                    >
                        <Text style={styles.textCreate}>Upload New</Text>
                    </LinierGradient>
                </TouchableOpacity>
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    bgWrapper: {
        flex: 1
    },

    wrapperCreate: {
        borderTopWidth: 1,
        borderColor: '#F2F5FB',
        backgroundColor: 'white', 
        height: 55, 
        alignItems: 'center',
        paddingTop: 10
    },

    buttonCreate: {
        backgroundColor: 'pink', 
        height: 35,
        width: 120, 
        borderRadius: 10, 
        alignItems: 'center'
    },

    textCreate: {
        paddingTop: 8, 
        fontWeight: 'bold', 
        color: 'white', 
        fontSize: 15
    }
})

export default SetProfile;