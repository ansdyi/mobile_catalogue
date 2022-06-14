import React, {useState} from 'react';
import { Text, StyleSheet, Alert, ActivityIndicator, StatusBar } from 'react-native';
import { Container, ContainerScroll, AddImage, InputWrapper, InputTitle, InputDescription, StatusWrapper, SubmitButton, SubmitButtonText } from '../styles/AddCatalogueStyles';
import ActionButton from 'react-native-action-button';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import firestore from '@react-native-firebase/firestore';
import { ScrollView } from 'react-native-gesture-handler';

const AddCatalogue = ({navigation}) => {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);
    const [transferred, setTransferred] = useState(0);
    const [title, setTitle] = useState(null);
    const [description, setDescription] = useState(null);

    const takePhotoFromCamera = () => {
        ImagePicker.openCamera({
          width: 1200,
          height: 780,
          cropping: true,
        }).then((image) => {
          console.log(image);
          const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
          setImage(imageUri);
        });
    };

    const choosePhotoFromLibrary = () => {
        ImagePicker.openPicker({
          width: 1200,
          height: 780,
          cropping: true,
        }).then((image) => {
          console.log(image);
          const imageUri = Platform.OS === 'ios' ? image.sourceURL : image.path;
          setImage(imageUri);
        });
    };

    const submitPost = async () => {
        const imageUrl = await uploadImage();
        console.log('Image Url: ', imageUrl);

        firestore()
        .collection('catalogue')
        .add({
            title: title,
            image: imageUrl,
            description: description,
            publishTime: firestore.Timestamp.fromDate(new Date()),
        })
        .then(() => {
            console.log('New Catalogue Added!');

            setTitle(null);
            setDescription(null);

            Alert.alert('Congratulations!', 'New Catalogue Published! 😋');

            navigation.goBack('SetCatalogue')

            
        })
        .catch((error) => {
            console.log('Something Went Wrong! 😟', error);
        })
    }

    const uploadImage = async () => {
        const uploadUri = image;
        let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);
    
        // Add Timestamp file Name 
        const extension = filename.split('.').pop() 
        const name = filename.split('.').slice(0, -1).join('.')
        filename = name + Date.now() + '.' + extension;
    
        setUploading(true)
        setTransferred(0)
    
        const storageRef = storage().ref(`catalogue/${filename}`);
        const task = storageRef.putFile(uploadUri);
    
        //Set Transferred State
        task.on('state_changed', (taskSnapshot) => {
            console.log(
                `${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`
            );
          
            setTransferred(
                Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100
            )
        });
    
        try {
          await task;

          const url = await storageRef.getDownloadURL();
    
          setUploading(false)
          setImage(null);

          return url;

        } catch(e) {
          console.log(e);
          return null;
        }
    };
 
    return(
        <Container>
            <ContainerScroll>
            <StatusBar backgroundColor='#F6BFBF' barStyle="light-content"/>
            <InputWrapper>
                {image !== null ? <AddImage source={{uri: image}}/> : null} 

                <InputTitle
                    placeholder= "Add Title Here"
                    multiline
                    numberOfLines= {2}
                    value= {title}
                    onChangeText={(content) => setTitle(content) }
                />
                <InputDescription
                    placeholder= "Add Description Here"
                    multiline
                    numberOfLines= {5}
                    value= {description}
                    onChangeText= {(content) => setDescription(content) }
                />

                {uploading ? (
                    <StatusWrapper>
                        <Text>{transferred} % Completed</Text>
                        <ActivityIndicator 
                            size= "large"
                            color= "#0000ff"
                        />
                    </StatusWrapper>
                ) : (
                    <SubmitButton onPress={submitPost}>
                        <SubmitButtonText>Save</SubmitButtonText>
                    </SubmitButton>
                )}
            </InputWrapper>
            </ContainerScroll>

            <ActionButton buttonColor="#F6BFBF">
                <ActionButton.Item
                buttonColor="#F6BFBF"
                title="Take Photo"
                onPress={takePhotoFromCamera}>
                    <Ionicons name="camera-outline" style={styles.actionButtonIcon} />
                </ActionButton.Item>
                <ActionButton.Item
                buttonColor="#F6BFBF"
                title="Choose Photo"
                onPress={choosePhotoFromLibrary}>
                    <Ionicons name="md-images-outline" style={styles.actionButtonIcon} />
                </ActionButton.Item>
            </ActionButton>
        </Container>
    )
}

const styles = StyleSheet.create({
    actionButtonIcon: {
        fontSize: 20,
        height: 22,
        color: 'white',
      },
})

export default AddCatalogue;