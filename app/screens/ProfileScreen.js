import {StyleSheet, StatusBar, TouchableOpacity, Text, ScrollView, TouchableWithoutFeedback, Image, Alert } from 'react-native';
import React, {useRef, useState, useEffect} from 'react';
import {Block, Loader, Typography} from '../components/index';
import {colors} from '../theme';
import Header from '../navigation/Header';
import routes from '../navigation/routes';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ImagePicker from 'react-native-image-picker';


// let options = {
//   title: 'Select Avatar',
//   customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
//   storageOptions: {
//     skipBackup: true,
//     path: 'images'
//   }
// };

const ProfileScreen = ({navigation}) => {
  const scrollView = useRef();
  const [loading, setLoading] = useState(false);
  const [imageUri, setImageUri] = useState();

  const getUserInfo = async () => {
    // setLoading(true);
    // const result = await usersApi.getUserInfo();

    // if (!result.problem) {
    //     if (result.data.imageUrl) {
    //         const uri = result.data.imageUrl;
    //         setImageUri(uri);
    //     }
    //     setProfile(result.data);
    // }

    // setLoading(false);
};

useEffect(() => {
    getUserInfo();
}, []);

const launchImageLibrary = () => {
  let options = {
    storageOptions: {
      skipBackup: true,
      path: 'images'
    }
  };
  ImagePicker.launchImageLibrary(options, (response) => {
    console.log('Response = ', response);

    if (response.didCancel) {
      console.log('User cancelled image picker');
    } else if (response.error) {
      console.log('ImagePicker Error: ', response.error);
    } else if (response.customButton) {
      console.log('User tapped custom button: ', response.customButton);
      // eslint-disable-next-line no-alert
      alert(response.customButton);
    } else {
      const source = { uri: response.uri };
      console.log('response', JSON.stringify(response));
      // this.setState({
      //   filePath: response,
      //   fileData: response.data,
      //   fileUri: response.uri
      // });
    }
  });
};

// const chooseImage = async () => {
//     // const permission = await imagePicker.requestPermission();

//     // if (permission) {
//     //     const result = await imagePicker.pickImage();
//     //     if (result) {
//     //         setImageUri(result.uri);
//     //         await imagePicker.uploadImage(result);
//     //     }
//     // }

//     // else {
//     //     Alert.alert('Please Enable permission in settings to access your Image Library!!')
//     // }
// };

const removeImage = () => {
    Alert.alert('Are you Want to Delete the Image!');
};

  return (
    <Block flex={1}>
      <StatusBar backgroundColor={colors.white} barStyle="light-content" />
      <Header title="Profile" header />
      <Block flex={1} style={styles.container}>
        <ScrollView ref={scrollView} showsHorizontalScrollIndicator={false} style={styles.scrollview}>
        <Block flex={false}>
                    <Block flex={false} center middle style={styles.imageActionBlock}>
                        {
                            !loading ? (
                                <>
                                    <Block flex={false} center middle style={styles.imageBlock}>
                                        {
                                            imageUri && (
                                                <TouchableWithoutFeedback onPress={removeImage}>
                                                    <Image
                                                        style={styles.profilePic}
                                                        resizeMode="cover"
                                                        source={{ uri: imageUri }}
                                                    />
                                                </TouchableWithoutFeedback>
                                            )
                                        }
                                        {
                                            !imageUri && (
                                                <TouchableOpacity onPress={launchImageLibrary}>
                                                    <Ionicons
                                                        name="camera-outline"
                                                        color={colors.primary}
                                                        size={40}
                                                    />
                                                </TouchableOpacity>
                                            )
                                        }
                                    </Block>
                                    <TouchableOpacity onPress={launchImageLibrary}>
                                        <Typography bold dark title>Change Picture</Typography>
                                    </TouchableOpacity>
                                </>
                            ) : (
                                <Loader />
                            )
                        }
                    </Block>
                </Block>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.PERSONALINFO)}>
        <Text>Personal Info</Text>
        <MaterialIcons name="arrow-forward-ios" size={30} color={colors.lightblack} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.VEHICLEINFO)}>
        <Text>Vehicle Info</Text>
        <MaterialIcons name="arrow-forward-ios" size={30} color={colors.lightblack} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.PASSWORDCHANGE)}>
        <Text>Change Password</Text>
        <MaterialIcons name="arrow-forward-ios" size={30} color={colors.lightblack} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(routes.DELETEACCOUNT)}>
        <Text>Delete Account</Text>
        <MaterialIcons name="arrow-forward-ios" size={30} color={colors.lightblack} />
      </TouchableOpacity>
        </ScrollView>
      </Block>
    </Block>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container : {
      flex : 1,
      padding : 10
  },
  scrollview : {
    flex : 1
  },
  button: {
    height : 55,
    alignItems : 'center',
    flexDirection : 'row',
    backgroundColor: '#f2f2f2',
    justifyContent : 'space-between',
    padding: 10,
    marginBottom : 10,
    borderRadius : 13.75
  },
  loadingBlock: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
},
imageActionBlock: {
    height: 220,
    marginBottom: 10
},
imageBlock: {
    height: 180,
    width: 180,
    borderRadius: 90,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.light,
    marginBottom: 10
},
profilePic: {
    height: 180,
    width: 180,
    borderRadius: 90
}
});
