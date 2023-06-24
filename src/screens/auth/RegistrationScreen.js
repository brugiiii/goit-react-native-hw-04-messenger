import {
  View,
  Image,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { MyAppTextInput } from "~/components/MyAppTextInput";

import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
// import { sendEmailValidationRequest } from "~/services/api";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
} from "firebase/auth";
import { auth } from "~/src/firebase/config";

import { AntDesign } from "@expo/vector-icons";
import backgroundImage from "~/assets/images/backgroundPhoto.jpeg";

export const RegistrationScreen = () => {
  const [login, setLogin] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(true);
  const [isInputFocused, setIsInputFocused] = useState(false);

  const navigation = useNavigation();

  const handleFocus = () => {
    setIsInputFocused(true);
  };

  const handleBlur = () => {
    setIsInputFocused(false);
  };

  const onSubmit = async () => {
    // const isValid = await sendEmailValidationRequest(email);

    // if (isValid) {
    //   setLogin("");
    //   setEmail("");
    //   setPassword("");
    //   navigation.navigate("Home");
    // } else {
    //   console.log("EMAIL WAS INVALID.");
    // }

    setLogin("");
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
                ...styles.registrationContainer,
                paddingBottom: isInputFocused ? 32 : 78,
              }}
            >
              <View style={styles.avatarContainer}>
                <Image style={styles.avatar} />
                <TouchableOpacity style={styles.addAvatarButton}>
                  <AntDesign name="pluscircleo" size={25} color="#FF6C00" />
                </TouchableOpacity>
              </View>
              <Text style={styles.title}>Реєстрація</Text>
              <View style={{ marginBottom: 16 }}>
                <View>
                  <MyAppTextInput
                    placeholder="Логін"
                    style={{
                      ...styles.input,
                      marginBottom: 16,
                    }}
                    autoCapitalize="none"
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    value={login}
                    onChangeText={setLogin}
                  />
                </View>
                <View>
                  <MyAppTextInput
                    placeholder="Адреса електронної пошти"
                    style={{
                      ...styles.input,
                      marginBottom: 16,
                    }}
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
                    placeholder="Пароль"
                    style={styles.input}
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
                <TouchableOpacity
                  style={styles.registerButtonContainer}
                  onPress={onSubmit}
                >
                  <Text style={styles.registerButtonText}>Зареєстуватися</Text>
                </TouchableOpacity>
              </View>

              <TouchableOpacity
                style={styles.logInButtonContainer}
                onPress={() => {
                  navigation.navigate("LoginScreen");
                }}
              >
                <Text style={styles.logInButtonText}>Вже є акаунт? Увійти</Text>
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
    justifyContent: "flex-end",
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  registrationContainer: {
    position: "relative",

    paddingTop: 92,
    paddingHorizontal: 16,

    backgroundColor: "#fff",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  avatarContainer: {
    position: "absolute",
    top: -60,
    left: "50%",
    transform: [{ translateX: -50 }],

    width: 120,
    height: 120,
    backgroundColor: "#F6F6F6",
    borderRadius: 16,
  },
  avatar: {},
  addAvatarButton: {
    position: "absolute",
    right: -12,
    bottom: 14,
  },
  title: {
    marginBottom: 32,

    fontFamily: "Roboto-Medium",
    fontWeight: 500,
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
    letterSpacing: 0.01,

    color: "#212121",
  },

  input: {
    paddingLeft: 16,

    height: 50,

    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,

    borderWidth: 1,
    borderRadius: 8,
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
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
  registerButtonContainer: {
    display: "flex",
    justifyContent: "center",

    height: 51,
    paddingLeft: 32,
    paddingRight: 32,

    backgroundColor: "#FF6C00",
    borderRadius: 100,
  },
  registerButtonText: {
    textAlign: "center",
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,

    color: "#fff",
  },
  logInButtonText: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    lineHeight: 19,
    textAlign: "center",

    color: "#1B4371",
  },
});
