import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, StatusBar, StyleSheet, Alert } from 'react-native';
import LinierGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SetInformationCard from '../components/SetInformationCard';
import { Container, CardWrapper } from '../styles/SetInformationStyles';
import firestore from '@react-native-firebase/firestore';

const SetInformation = ({navigation}) => {

    const [information, setInformation] = useState(null);
    const [loading, setLoading] = useState(true);
    const [deleted, setDeleted] = useState(false);

    const fetchInformation = async () => {
        try {
            const list = [];

            await firestore()
            .collection('information')
            .orderBy('publishTime', 'desc')
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach(doc => {
                    const {information, publishTime} = doc.data();
                    list.push({
                        id: doc.id,
                        information,
                        publishTime
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

    useEffect(() => {
        fetchInformation();
        setDeleted(false);
    }, [deleted])

    const handleDelete = (informationId) => {
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
                    onPress: () => deleteInformation(informationId),
                },
            ],
            {cancelable: false}
        )
    }

    const deleteInformation = (informationId) => {
        console.log('Current Post Id: ', informationId);

        firestore().collection('information')
        .doc(informationId)
        .delete()
        .then(() => {
            setDeleted(true);

            Alert.alert('Congratulations!', 'Information Deleted! 😥');
        })
        .catch((e) => {
            console.log('Error while deleting the Information!', e)
        })
    }

    return(
        <Container>
            <StatusBar backgroundColor='#F6BFBF' barStyle="light-content"/>
            <View style={styles.bgWrapper}>
                <CardWrapper>
                    <FlatList 
                        data= {information}
                        renderItem= {({item}) => <SetInformationCard item= {item} onDelete= {handleDelete} />}
                        keyExtractor= {item => item.id}
                        showsVerticalScrollIndicator= {false}
                    />
                </CardWrapper>
            </View>
            
            <View style={styles.wrapperCreate}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate('AddInformation')} 
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

export default SetInformation;