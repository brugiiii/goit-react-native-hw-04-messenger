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
    <ImageBackground source={backgroundPhoto} style={styles.backgroundPhoto}>
      <View style={styles.profile}>
        <TouchableOpacity
          style={styles.logoutIcon}
          onPress={() => navigation.navigate("LoginScreen")}
        >
          <MaterialIcons name="logout" size={24} color="#BDBDBD" />
        </TouchableOpacity>
        <View style={styles.avatarThumb}>
          <Image source={avatar} />
          <TouchableOpacity style={styles.deleteAvatarIcon}>
            <AntDesign name="closecircleo" size={25} color="#BDBDBD" />
          </TouchableOpacity>
        </View>
        <Text style={styles.username}>Natali Romanova</Text>
        <ScrollView style={{ marginTop: 32 }}>
          <View style={styles.post}>
            <View style={styles.postImageThumb}>
              <Image source={nature} />
            </View>
            <Text style={styles.postTitle}>Ліс</Text>
            <View style={styles.postInfo}>
              <View style={styles.stats}>
                <TouchableOpacity style={styles.stat}>
                  <FontAwesome name="comment" size={24} color="#FF6C00" />
                  <Text style={styles.statText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.stat}>
                  <AntDesign name="like2" size={24} color="#FF6C00" />
                  <Text style={styles.statText}>153</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={{ ...styles.stat, gap: 4 }}>
                <EvilIcons name="location" size={24} color="#BDBDBD" />
                <Text
                  style={{
                    ...styles.statText,
                    textDecorationLine: "underline",
                  }}
                >
                  Ukraine
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.post}>
            <View style={styles.postImageThumb}>
              <Image source={nature} />
            </View>
            <Text style={styles.postTitle}>Ліс</Text>
            <View style={styles.postInfo}>
              <View style={styles.stats}>
                <TouchableOpacity style={styles.stat}>
                  <FontAwesome name="comment" size={24} color="#FF6C00" />
                  <Text style={styles.statText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.stat}>
                  <AntDesign name="like2" size={24} color="#FF6C00" />
                  <Text style={styles.statText}>153</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={{ ...styles.stat, gap: 4 }}>
                <EvilIcons name="location" size={24} color="#BDBDBD" />
                <Text
                  style={{
                    ...styles.statText,
                    textDecorationLine: "underline",
                  }}
                >
                  Ukraine
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.post}>
            <View style={styles.postImageThumb}>
              <Image source={nature} />
            </View>
            <Text style={styles.postTitle}>Ліс</Text>
            <View style={styles.postInfo}>
              <View style={styles.stats}>
                <TouchableOpacity style={styles.stat}>
                  <FontAwesome name="comment" size={24} color="#FF6C00" />
                  <Text style={styles.statText}>8</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.stat}>
                  <AntDesign name="like2" size={24} color="#FF6C00" />
                  <Text style={styles.statText}>153</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={{ ...styles.stat, gap: 4 }}>
                <EvilIcons name="location" size={24} color="#BDBDBD" />
                <Text
                  style={{
                    ...styles.statText,
                    textDecorationLine: "underline",
                  }}
                >
                  Ukraine
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
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
