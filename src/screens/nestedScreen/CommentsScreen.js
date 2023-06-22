import {
  View,
  StyleSheet,
  Image,
  TextInput,
  Keyboard,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
} from "react-native";

import { ArrowUp } from "~/components/icons";

export const CommentsScreen = ({ route: { params: picture } }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.pictureThumb}>
          <Image source={{ uri: picture }} style={{ height: "100%" }} />
        </View>
        <View style={styles.comments}></View>
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
        >
          <View style={styles.inputThumb}>
            <TextInput
              placeholder="Коментувати..."
              placeholderTextColor={"#BDBDBD"}
              style={styles.input}
            />
            <TouchableOpacity style={styles.sendButton}>
              <ArrowUp color="#FFF" />
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    backgroundColor: "#FFF",

    paddingTop: 32,
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  pictureThumb: {
    height: 240,
    marginBottom: 32,

    borderRadius: 8,
    overflow: "hidden",
  },
  comments: {
    marginBottom: "auto",
    paddingBottom: 31,
  },
  inputThumb: { position: "relative" },
  input: {
    borderRadius: 100,
    backgroundColor: "#F6F6F6",

    height: 50,

    paddingLeft: 16,
    fontSize: 16,

    borderWidth: 1,
    borderColor: "#E8E8E8",
  },
  sendButton: {
    position: "absolute",
    top: "50%",
    right: 8,

    justifyContent: "center",
    alignItems: "center",

    width: 34,
    height: 34,
    marginTop: -17,

    backgroundColor: "#FF6C00",
    borderRadius: 50,
  },
});
