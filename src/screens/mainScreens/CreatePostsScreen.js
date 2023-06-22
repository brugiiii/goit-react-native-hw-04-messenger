import { useState, useEffect } from "react";

import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";

import { Camera } from "expo-camera";
import * as Location from "expo-location";
import * as MediaLibrary from "expo-media-library";

import {
  FlipCameraIcon,
  CameraIcon,
  LocationIcon,
  TrashIcon,
} from "~/components/icons";

export const CreatePostsScreen = ({ navigation }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraRef, setCameraRef] = useState(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const [isCameraReady, setIsCameraReady] = useState(false);
  const [picture, setPicture] = useState("");
  const [isPreview, setIsPreview] = useState(false);
  const [name, setName] = useState("");
  const [location, setLocation] = useState("");
  const [coords, setCoords] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      await Location.requestForegroundPermissionsAsync();
      await MediaLibrary.requestPermissionsAsync();

      setHasPermission(status === "granted");
    })();
  }, []);

  const takePicture = async () => {
    if (cameraRef) {
      const { uri } = await cameraRef.takePictureAsync();

      Alert.alert("", "Save this photo?", [
        {
          text: "NO",
          onPress: () => {},
          style: "cancel",
        },
        {
          text: "YES",
          onPress: async () => await MediaLibrary.createAssetAsync(uri),
        },
      ]);

      setPicture(uri);
      setIsPreview(true);
    }

    const {
      coords: { latitude, longitude },
    } = await Location.getCurrentPositionAsync();

    setCoords({ latitude, longitude });
  };

  const editPicture = () => {
    setPicture("");
    setIsPreview(false);
  };

  const switchCamera = () => {
    setType((prevCameraType) =>
      prevCameraType === Camera.Constants.Type.back
        ? Camera.Constants.Type.front
        : Camera.Constants.Type.back
    );
  };

  const onCameraReady = () => {
    setIsCameraReady(true);
  };

  const resetData = () => {
    setName("");
    setLocation("");
    setPicture("");
  };

  const publish = () => {
    navigation.navigate("DefaultScreen", { name, location, picture, coords });
    resetData();
  };

  const canPublished = picture && name.length > 2 && location.length > 2;

  const deleteData = () => {
    !picture && name.length === 0 && location.length === 0
      ? Alert.alert("There is nothing to delete")
      : Alert.alert("", "Are you sure, you want to delete?", [
          {
            text: "Cancel",
            onPress: () => console.log("Cancel Pressed"),
            style: "cancel",
          },
          {
            text: "OK",
            onPress: () => resetData(),
          },
        ]);
  };

  if (hasPermission === null) {
    return <View />;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView style={styles.container}>
        <Camera
          onCameraReady={onCameraReady}
          style={{
            ...styles.camera,
            backgroundColor: isCameraReady ? "transparent" : "#E8E8E8",
          }}
          type={type}
          ref={setCameraRef}
        >
          {picture && (
            <Image source={{ uri: picture }} style={styles.picture} />
          )}
          <TouchableOpacity
            onPress={takePicture}
            disabled={picture ? true : false}
            style={{
              ...styles.takePictureIconThumb,
              backgroundColor: picture ? "#FFFFFF30" : "#FFF",
            }}
          >
            <CameraIcon color={picture ? "#FFF" : "#BDBDBD"} />
          </TouchableOpacity>
          {!isPreview && (
            <TouchableOpacity
              style={styles.flipIconThumb}
              onPress={switchCamera}
            >
              <FlipCameraIcon color="#BDBDBD" />
            </TouchableOpacity>
          )}
        </Camera>

        <TouchableOpacity onPress={editPicture}>
          <Text style={styles.pictureText}>
            {picture ? "Редагувати фото" : "Завантажте фото"}
          </Text>
        </TouchableOpacity>

        <View style={styles.form}>
          <View style={{ marginBottom: 16 }}>
            <TextInput
              style={styles.input}
              placeholder="Назва..."
              placeholderTextColor="#BDBDBD"
              onChangeText={setName}
              value={name}
            ></TextInput>
          </View>
          <View style={{ marginBottom: 32, position: "relative" }}>
            <LocationIcon color="#BDBDBD" style={styles.locationIcon} />
            <TextInput
              style={{ ...styles.input, paddingLeft: 28 }}
              placeholder="Місцевість..."
              placeholderTextColor="#bdbdbd"
              onChangeText={setLocation}
              value={location}
            ></TextInput>
          </View>

          <TouchableOpacity
            onPress={publish}
            disabled={!canPublished}
            style={{
              ...styles.postButton,

              backgroundColor: canPublished ? "#FF6C00" : "#F6F6F6",
            }}
          >
            <Text
              style={{
                ...styles.postButtonText,
                color: canPublished ? "#FFF" : "#BDBDBD",
              }}
            >
              Опубліковати
            </Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.deleteButton} onPress={deleteData}>
          <TrashIcon color="#BDBDBD" />
        </TouchableOpacity>
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: 32,
    paddingHorizontal: 16,

    backgroundColor: "#fff",
  },
  camera: {
    position: "relative",

    justifyContent: "center",
    alignItems: "center",

    height: 240,
    marginBottom: 8,

    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
    overflow: "hidden",
  },
  picture: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  takePictureIconThumb: {
    padding: 18,
    borderRadius: 50,
  },
  flipIconThumb: {
    position: "absolute",
    bottom: 8,
    right: 8,
  },
  pictureText: {
    marginBottom: 32,

    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,

    color: "#BDBDBD",
  },
  form: {
    // flex: 1,
    marginBottom: 120,
  },
  locationIcon: {
    position: "absolute",
    top: "50%",
    left: 0,
    zIndex: 999,

    marginTop: -10,
  },
  input: {
    height: 50,

    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,

    color: "#212121",
    borderBottomColor: "#E8E8E8",
    borderBottomWidth: 1,
  },
  postButton: {
    alignItems: "center",

    paddingVertical: 16,

    borderRadius: 100,
  },
  postButtonText: {
    fontSize: 16,
    lineHeight: 19,
  },
  deleteButton: {
    justifyContent: "center",
    alignItems: "center",

    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 68,

    width: 70,
    height: 40,

    borderRadius: 20,
    backgroundColor: "#f6f6f6",
  },
});
