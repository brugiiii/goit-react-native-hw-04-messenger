import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";

import backgroundPhoto from "~/assets/images/backgroundPhoto.jpeg";
import avatar from "~/assets/images/avatar120.png";

import { useDispatch, useSelector } from "react-redux";
import { signout } from "~/redux/auth/authOperations";
import { selectNickname } from "~/redux/auth/authSelectors";

import { LogoutIcon, CloseCircleIcon } from "~/components/icons";

export const ProfileScreen = () => {
  const [posts, setPosts] = useState([]);
  const nickname = useSelector(selectNickname);
  const dispatch = useDispatch();

  return (
    <ImageBackground source={backgroundPhoto} style={styles.backgroundPhoto}>
      <View style={styles.profile}>
        <TouchableOpacity
          style={styles.logoutIcon}
          onPress={() => dispatch(signout())}
        >
          <LogoutIcon color="#BDBDBD" />
        </TouchableOpacity>
        <View style={styles.avatarThumb}>
          <Image source={avatar} />
          <TouchableOpacity style={styles.deleteAvatarIcon}>
            <CloseCircleIcon color="#BDBDBD" />
          </TouchableOpacity>
        </View>
        <Text style={styles.username}>{nickname}</Text>
        <FlatList
          style={{ marginTop: 32 }}
          data={posts}
          renderItem={({ item: { picture, name, location } }) => (
            <Post picture={picture} name={name} location={location} />
          )}
          keyExtractor={({ item: picture }) => picture}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundPhoto: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",

    paddingTop: 147,
  },
  container: {
    flex: 1,
    position: "relative",
    backgroundColor: "#FFF",
  },
  profile: {
    position: "relative",

    flex: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    backgroundColor: "#FFF",

    paddingTop: 92,
    paddingBottom: 11,
    paddingHorizontal: 16,
  },
  username: {
    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,

    color: "#212121",
  },
  logoutIcon: {
    position: "absolute",
    top: 22,
    right: 16,
  },
  avatarThumb: {
    position: "absolute",
    top: -60,
    left: "50%",
    marginLeft: -50,

    width: 120,
    height: 120,

    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  deleteAvatarIcon: {
    position: "absolute",
    right: -25 / 2,
    bottom: 9,
  },
});
