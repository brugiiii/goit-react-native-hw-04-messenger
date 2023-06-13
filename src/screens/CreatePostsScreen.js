import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Platform,
} from "react-native";
import { Feather } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";
import defaultPhoto from "../../assets/images/defaultPhoto.png";

export const CreatePostsScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{ marginBottom: 32 }}>
        <View style={styles.photoThumb}>
          <Image source={defaultPhoto} />
        </View>
        <Text style={styles.photoText}>Завантажте фото</Text>
      </TouchableOpacity>
      <View style={styles.form}>
        <View style={{ marginBottom: 16 }}>
          <TextInput
            style={styles.input}
            placeholder="Назва..."
            placeholderTextColor="#bdbdbd"
          ></TextInput>
        </View>
        <View style={{ marginBottom: 32, position: "relative" }}>
          <EvilIcons
            name="location"
            size={24}
            color="#bdbdbd"
            style={styles.locationIcon}
          />
          <TextInput
            style={{ ...styles.input, paddingLeft: 28 }}
            placeholder="Місцевість..."
            placeholderTextColor="#bdbdbd"
          ></TextInput>
        </View>
        <TouchableOpacity style={styles.postButton}>
          <Text style={styles.postButtonText}>Опубліковати</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.deleteButton}>
        <Feather name="trash-2" size={24} color="#bdbdbd" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    paddingTop: Platform.OS === "ios" ? 32 : 12,
    paddingBottom: Platform.OS === "ios" ? 34 : 14,
    paddingHorizontal: 16,

    backgroundColor: "#fff",
  },

  photoThumb: {
    justifyContent: "center",
    alignItems: "center",

    height: 343,
    marginBottom: 8,

    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    borderWidth: 1,
    borderRadius: 8,
  },
  photoText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,

    color: "#BDBDBD",
  },
  form: {
    flex: 1,
  },
  locationIcon: {
    position: "absolute",
    top: "50%",
    left: 0,

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
    backgroundColor: "#f6f6f6",
  },
  postButtonText: {
    fontSize: 16,
    lineHeight: 19,

    color: "#BDBDBD",
  },
  deleteButton: {
    justifyContent: "center",
    alignItems: "center",

    marginLeft: "auto",
    marginRight: "auto",

    width: 70,
    height: 40,

    borderRadius: 20,
    backgroundColor: "#f6f6f6",
  },
});
