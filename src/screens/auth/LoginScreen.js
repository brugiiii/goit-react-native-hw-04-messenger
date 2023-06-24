import { useState } from "react";
import {
  View,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { MyAppTextInput } from "~/components/MyAppTextInput";
import { useNavigation } from "@react-navigation/native";

// import { sendEmailValidationRequest } from "~/services/api";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "~/src/firebase/config";

import backgroundImage from "~/assets/images/backgroundPhoto.jpeg";

export const LoginScreen = () => {
  const [isKeyboardVisible, setIsKeyboardVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(true);
  const navigation = useNavigation();

  const handleFocus = () => {
    setIsKeyboardVisible(true);
  };

  const handleBlur = () => {
    setIsKeyboardVisible(false);
  };

  const onSubmit = async () => {
    // const isValid = await sendEmailValidationRequest(email);

    // if (isValid) {
    //   setEmail("");
    //   setPassword("");
    //   navigation.navigate("Home");
    // } else {
    //   console.log("EMAIL WAS INVALID.");
    // }

    setEmail("");
    setPassword("");
    navigation.navigate("Home");
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.backgroundImage}
          source={backgroundImage}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <View
              style={{
                ...styles.authorizeContainer,
                paddingBottom: isKeyboardVisible ? 32 : 144,
              }}
            >
              <Text style={styles.title}>Увійти</Text>

              <View>
                <View style={{ marginBottom: 16 }}>
                  <MyAppTextInput
                    style={styles.input}
                    placeholder="Адреса електронної пошти"
                    placeholderTextColor={"#BDBDBD"}
                    keyboardType="email-address"
                    autoCapitalize="none"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={email}
                    onChangeText={setEmail}
                  />
                </View>
                <View style={{ marginBottom: 43, position: "relative" }}>
                  <MyAppTextInput
                    style={styles.input}
                    placeholder="Пароль"
                    placeholderTextColor={"#BDBDBD"}
                    secureTextEntry={showPassword}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={password}
                    onChangeText={setPassword}
                  />
                  <TouchableOpacity
                    style={styles.showPasswordButton}
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Text style={styles.showPasswordButtonText}>
                      {showPassword ? "Показати" : "Приховати"}
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.logInButton} onPress={onSubmit}>
                  <Text style={styles.logInButtonText}>Увійти</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.registrationButton}
                onPress={() => {
                  navigation.navigate("RegistrationScreen");
                }}
              >
                <Text style={styles.registrationButtonText}>
                  Немає акаунту?
                  <Text style={{ textDecorationLine: "underline" }}>
                    Зареєструватися
                  </Text>
                </Text>
              </TouchableOpacity>
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  authorizeContainer: {
    paddingTop: 32,
    paddingHorizontal: 16,

    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  title: {
    marginBottom: 33,

    fontFamily: "Roboto-Medium",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",

    color: "#212121",
  },

  input: {
    height: 50,
    paddingLeft: 16,

    color: "#212121",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,

    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
  },
  showPasswordButton: {
    position: "absolute",
    top: 16,
    right: 16,
  },
  showPasswordButtonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,

    color: "#1B4371",
  },
  logInButton: {
    justifyContent: "center",
    alignItems: "center",

    height: 51,
    marginBottom: 16,

    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  logInButtonText: {
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",
    color: "#FFFFFF",
  },
  registrationButton: {},
  registrationButtonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",

    color: "#1B4371",
  },
});
