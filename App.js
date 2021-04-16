import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';

const App = () => {
  const [image, setImage] = useState(
    'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg',
  );

  const takePhotoFromCamera = () => {
    console.log('Open Camera');
    ImagePicker.openCamera({
      width: 300,
      height: 400,
      cropping: true,
    }).then((image) => {
      console.log(image);
      setImage(image.path);
    });
  };
  const choosePhotoFromLibrary = () => {
    console.log('Open Gallery');
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
    }).then((image) => {
      console.log(image);
      setImage(image.path);
    });
  };

  return (
    <View style={styles.container}>
      <Text>Image Picker</Text>
      <Image
        source={{
          uri: image,
        }}
        style={{height: 400, width: 300}}
      />
      <TouchableOpacity style={styles.btn} onPress={takePhotoFromCamera}>
        <Text style={styles.btnText}>Open Camera</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btn} onPress={choosePhotoFromLibrary}>
        <Text style={styles.btnText}>Open Gallery</Text>
      </TouchableOpacity>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  btn: {
    backgroundColor: '#000',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  btnText: {
    color: '#fff',
  },
});
