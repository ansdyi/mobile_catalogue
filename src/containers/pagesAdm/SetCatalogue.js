import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StatusBar, StyleSheet, Alert } from 'react-native';
import LinierGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SetCatalogueCard from '../components/SetCatalogueCard';
import { Container, CardWrapper } from '../styles/SetCatalogueStyles';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';

const SetCatalogue = ({navigation}) => {

    const [catalogue, setCatalogue] = useState(null);
    const [loading, setLoading] = useState(true);
    const [deleted, setDeleted] = useState(false);

    const fetchCatalogue = async () => {
        try {
            const list = [];

            await firestore()
            .collection('catalogue')
            .orderBy('publishTime', 'desc')
            .get()
            .then((querySnapshot) => {
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

    useEffect(() => {
        fetchCatalogue();
        setDeleted(false);
    }, [deleted])

    const handleDelete = (catalogueId) => {
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
                    onPress: () => deleteCatalogue(catalogueId),
                },
            ],
            {cancelable: false}
        )
    }

    const deleteCatalogue = (catalogueId) => {
        console.log('Current Post Id: ', catalogueId);

        firestore().collection('catalogue')
        .doc(catalogueId)
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
                        deleteFirestoreData(catalogueId);
                        setDeleted(true);
                    })
                    .catch((e) => {
                        console.log('Error while deleting the Catalogue!', e)
                    })
                //if the post image is not available
                } else {
                    deleteFirestoreData(catalogueId);
                }
            }
        })
    }

    const deleteFirestoreData = (catalogueId) => {
        firestore()
        .collection('catalogue')
        .doc(catalogueId)
        .delete()
        .then(() => {
            Alert.alert('Congratulations!', 'Catalogue Deleted! 😥');
        })
        .catch(e => console.log('Error deleting Catalogue', e))
    }

    return(
        <Container>
            <StatusBar backgroundColor='#F6BFBF' barStyle="light-content"/>
            <View style={styles.bgWrapper}>
                <CardWrapper>
                    <FlatList 
                        data= {catalogue}
                        renderItem= {({item}) => <SetCatalogueCard item= {item} onDelete= {handleDelete} />}
                        keyExtractor= {item => item.id}
                        showsVerticalScrollIndicator= {false}
                    />
                </CardWrapper>
            </View>
            
            <View style={styles.wrapperCreate}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('AddCatalogue')} 
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

export default SetCatalogue;