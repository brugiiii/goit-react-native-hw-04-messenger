import { View, Text, StyleSheet, Image } from "react-native";
import avatar from "~/assets/images/avatar60.png";

export const PostsScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.posts}>
        <View style={styles.post}>
          <Image source={avatar} style={styles.avatar} />
          <View>
            <Text style={styles.nickname}>Natali Romanova</Text>
            <Text style={styles.email}>email@example.com</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 16,
    paddingVertical: 32,

    backgroundColor: "#fff",
  },
  posts: {
    flex: 1,

    marginBottom: "auto",
  },
  post: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",
  },
  avatar: {
    borderRadius: 16,
  },
  nickname: {
    fontFamily: "Roboto-Bold",
    fontSize: 13,
    lineHeight: 15,

    color: "#212121",
  },
  email: {
    fontFamily: "Roboto-Regular",
    fontSize: 11,
    lineHeight: 13,

    color: "rgba(33, 33, 33, 0.8)",
  },
});
