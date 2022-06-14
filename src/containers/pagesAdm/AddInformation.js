import React, {useState} from 'react';
import { Alert, StatusBar } from 'react-native';
import { Container, InputWrapper, InputInformation, SubmitButton, SubmitButtonText } from '../styles/AddInformationStyles';
import firestore from '@react-native-firebase/firestore';

const AddInformation = ({navigation}) => {
    const [information, setInformation] = useState(null);

    const submitPost = async () => {
        firestore()
        .collection('information')
        .add({
            information: information,
            publishTime: firestore.Timestamp.fromDate(new Date()),
        })
        .then(() => {
            console.log('New information Added!');

            setInformation(null);

            Alert.alert('Congratulations!', 'New information Published! 😋');

            navigation.goBack('SetInformation3')
        })
        .catch((error) => {
            console.log('Something Went Wrong! 😟', error);
        })
    }

    return(
        <Container>
                <StatusBar backgroundColor='#F6BFBF' barStyle="light-content"/>
                <InputWrapper>
                    <InputInformation
                        placeholder= "Add Information Here"
                        multiline
                        numberOfLines= {10}
                        value={information}
                        onChangeText={(content) => setInformation(content) }
                    />
                        <SubmitButton onPress={submitPost}>
                            <SubmitButtonText>Save</SubmitButtonText>
                        </SubmitButton>
                    
                </InputWrapper>
        </Container>
    )
}

export default AddInformation;