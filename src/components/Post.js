import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, View, TouchableOpacity, Text, Image } from "react-native";

import { LocationIcon, LikeIcon, CommentIcon } from "~/components/icons";

export const Post = ({ picture, name, location, coords }) => {
  const [likesCount, setLikesCount] = useState(0);

  const navigation = useNavigation();

  const onLikePress = () => {
    setLikesCount((prev) => (prev === 0 ? 1 : 0));
  };

  const leaveComment = () => {
    navigation.navigate("CommentsScreen", picture);
  };

  const viewLocation = () => {
    navigation.navigate("MapScreen", coords);
  };

  return (
    <View style={styles.post}>
      <View style={styles.postImageThumb}>
        <Image source={{ uri: picture }} style={{ height: "100%" }} />
      </View>
      <Text style={styles.postTitle}>{name}</Text>
      <View style={styles.postInfo}>
        <View style={styles.stats}>
          <TouchableOpacity style={styles.stat} onPress={leaveComment}>
            <CommentIcon color="#FF6C00" />
            <Text style={styles.statText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.stat} onPress={onLikePress}>
            <LikeIcon color={likesCount === 0 ? "#BDBDBD" : "#FF6C00"} />
            <Text style={styles.statText}>{likesCount}</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{ ...styles.stat, gap: 4 }}
          onPress={viewLocation}
        >
          <LocationIcon color="#BDBDBD" />
          <Text
            style={{
              ...styles.statText,
              textDecorationLine: "underline",
            }}
          >
            {location}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {
    paddingBottom: 32,
  },
  postImageThumb: {
    height: 240,
    marginBottom: 8,

    borderRadius: 8,
    overflow: "hidden",
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
