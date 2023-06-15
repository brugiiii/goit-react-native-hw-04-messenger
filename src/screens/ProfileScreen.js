import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

import backgroundPhoto from "~/assets/images/backgroundPhoto.jpeg";
import avatar from "~/assets/images/avatar120.png";
import nature from "~/assets/images/nature.png";
import { MaterialIcons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export const ProfileScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ImageBackground source={backgroundPhoto} style={styles.backgroundPhoto}>
        <ScrollView style={styles.profile}>
          <MaterialIcons
            name="logout"
            size={24}
            color="#BDBDBD"
            style={styles.logoutIcon}
            onPress={() => navigation.navigate("LoginScreen")}
          />
          <View style={styles.avatarThumb}>
            <Image source={avatar} />
            <TouchableOpacity style={styles.deleteAvatarIcon}>
              <AntDesign name="closecircleo" size={25} color="#BDBDBD" />
            </TouchableOpacity>
          </View>
          <Text style={styles.username}>Natali Romanova</Text>
          <View style={styles.post}>
            <View style={styles.postImageThumb}>
              <Image source={nature} />
            </View>
            <Text style={styles.postTitle}>Ліс</Text>
            <View style={styles.postInfo}>
              <View style={styles.stats}>
                <View style={styles.stat}>
                  <FontAwesome name="comment" size={24} color="#FF6C00" />
                  <Text style={styles.statText}>8</Text>
                </View>
                <View style={styles.stat}>
                  <AntDesign name="like2" size={24} color="#FF6C00" />
                  <Text style={styles.statText}>153</Text>
                </View>
              </View>
              <View style={{ ...styles.stat, gap: 4 }}>
                <EvilIcons name="location" size={24} color="#BDBDBD" />
                <Text
                  style={{
                    ...styles.statText,
                    textDecorationLine: "underline",
                  }}
                >
                  Ukraine
                </Text>
              </View>
            </View>
          </View>
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
    position: "relative",

    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,

    paddingTop: 92,
    paddingBottom: 43,
    paddingHorizontal: 16,
  },
  username: {
    marginBottom: 33,

    textAlign: "center",
    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,

    color: "#212121",
  },
  logoutIcon: {
    position: "absolute",
    top: -70,
    right: 0,
  },
  avatarThumb: {
    position: "absolute",
    top: -152,
    left: "50%",
    marginLeft: -60,

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
  post: {
    marginLeft: "auto",
    marginRight: "auto",

    marginBottom: 32,
  },
  postImageThumb: {
    marginBottom: 8,
  },
  postTitle: {
    marginBottom: 8,

    fontFamily: "Roboto-Medium",
    fontSize: 16,
    lineHeight: 19,

    color: "#212121",
  },
  postInfo: { flexDirection: "row" },
  stats: {
    flexDirection: "row",
    gap: 24,

    marginRight: "auto",
  },
  stat: {
    flexDirection: "row",
    alignItems: "center",

    gap: 6,
  },
  statText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,

    color: "#212121",
  },
});
