import { useEffect, useState } from "react";

import { View, Text, StyleSheet, Image, FlatList } from "react-native";
import { useSelector } from "react-redux";
import { selectEmail, selectNickname } from "~/redux/auth/authSelectors";

import avatar from "~/assets/images/avatar60.png";

import { Post } from "~/components/Post";

export const DefaultScreen = ({ route }) => {
  const [posts, setPosts] = useState([]);
  const nickname = useSelector(selectNickname);
  const email = useSelector(selectEmail);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View style={styles.user}>
        <Image source={avatar} style={styles.avatar} />
        <View>
          <Text style={styles.nickname}>{nickname}</Text>
          <Text style={styles.email}>{email}</Text>
        </View>
      </View>
      <FlatList
        style={styles.posts}
        data={posts}
        renderItem={({ item: { picture, name, location, coords } }) => (
          <Post
            picture={picture}
            name={name}
            location={location}
            coords={coords}
          />
        )}
        keyExtractor={({ picture }) => picture}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingHorizontal: 16,
    paddingTop: 32,

    backgroundColor: "#fff",
  },
  posts: {
    flex: 1,

    marginBottom: "auto",
  },
  user: {
    flexDirection: "row",
    gap: 8,
    alignItems: "center",

    marginBottom: 32,
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
