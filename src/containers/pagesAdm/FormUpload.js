import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Platform, Image, Alert, ActivityIndicator} from 'react-native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import LinierGradient from 'react-native-linear-gradient';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';

const FormUpload = () => {
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);

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
    const uploadUri = image;
    let filename = uploadUri.substring(uploadUri.lastIndexOf('/') + 1);

    // Add Timestamp file Name 
    const extension = filename.split('.').pop() 
    const name = filename.split('.').slice(0, -1).join('.')
    filename = name + Date.now() + '.' + extension

    setUploading(true)
    setTransferred(0)

    const task = storage().ref(filename).putFile(uploadUri);

    //Set Transferred State
    task.on('state_changed', taskSnapshot => {
      console.log(`${taskSnapshot.bytesTransferred} transferred out of ${taskSnapshot.totalBytes}`);
      
      setTransferred(
        Math.round(taskSnapshot.bytesTransferred / taskSnapshot.totalBytes) * 100
      )
    });

    try {
      await task;

      setUploading(false)
      Alert.alert(
        'Image Uploaded!',
        'Your image has been uploaded to the Firebase Cloud Storage Successfully!'
      )
    } catch(e) {
      console.log(e);
    }

    setImage(null)
  };

  // const url = async () => { 
  //   await storage()
  //   .ref(filename)
  //   .getDownloadURL();
  // }

  // const ref = async () => { 
  //   storage().ref(filename);
  //   ref.getDownloadURL()
  //  .then((url) => {
  //      console.log(url);
  //  })
  // }

  return (
    <View style={styles.container}>
      
      {image !== null ? (
        <Image source={{uri: image}} style={styles.imageBox} />
      ) : null}
      
        <Text>Add</Text>
        {uploading ? (
          <View style={styles.wrapperCreate}>
            <Text>{transferred} % Completed!</Text>
            <ActivityIndicator size='large' color='gray' />
          </View>
        ) : (
          <View style={styles.wrapperCreate}>
          <TouchableOpacity 
            onPress={submitPost} 
            style={styles.buttonCreate}>
            <LinierGradient
              colors={['#F5E2D6', '#F6BFBF']}
              style={styles.buttonCreate}
            >
              <Text style={styles.textCreate}>Post</Text>
            </LinierGradient>
            </TouchableOpacity>
          </View>
        )}

        {/* <View>
          <Image source={ref} style={{ height: 25, width: 25}}/>
        </View>
         */}
    
      <ActionButton buttonColor="#F6BFBF">
        <ActionButton.Item
          buttonColor="#F6BFBF"
          title="Take Photo"
          onPress={takePhotoFromCamera}>
          <Icon name="camera-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
        <ActionButton.Item
          buttonColor="#F6BFBF"
          title="Choose Photo"
          onPress={choosePhotoFromLibrary}>
          <Icon name="md-images-outline" style={styles.actionButtonIcon} />
        </ActionButton.Item>
      </ActionButton>

      
    </View>
  );
};

export default FormUpload;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  actionButtonIcon: {
    fontSize: 20,
    height: 22,
    color: 'white',
  },

  imageBox: {
    marginTop: 180,
    marginBottom: 15,
    width: '100%',
    height: 275,
  },
  wrapperCreate: {
    height: 55, 
    alignItems: 'center',
    paddingTop: 10
},

buttonCreate: {
    backgroundColor: 'pink', 
    height: 35,
    width: 100, 
    borderRadius: 10, 
    alignItems: 'center'
},

textCreate: {
    paddingTop: 8, 
    fontWeight: 'bold', 
    color: 'white', 
    fontSize: 15
}
});
