import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
} from "react-native";

import backgroundPhoto from "../../assets/images/backgroundPhoto.jpeg";

export const ProfileScreen = () => {
  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundPhoto} style={styles.backgroundPhoto}>
        <ScrollView style={styles.profile}>
          <Text style={styles.username}>Natali Romanova</Text>
          <View style={styles.post}></View>
          <View style={styles.post}></View>
          <View style={styles.post}></View>
          <View style={styles.post}></View>
          <View style={styles.post}></View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  backgroundPhoto: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",

    paddingTop: 147,
  },
  profile: {
    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    paddingTop: 92,
    paddingBottom: 43,
    paddingHorizontal: 16,
  },
  username: {
    marginBottom: 33,

    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",

    color: "#212121",
  },
  post: { height: 50, backgroundColor: "tomato" },
});
