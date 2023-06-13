import "react-native-gesture-handler";
import { useState } from "react";
import {
  PostsScreen,
  RegistrationScreen,
  LoginScreen,
  CreatePostsScreen,
  CommentsScreen,
  Button,
} from "./src/screens";
import { AntDesign } from "@expo/vector-icons";
import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const MainStack = createStackNavigator();

export default function App() {
  const [isLogIn, setIsLogIn] = useState(false);
  const [switcher, setSwitcher] = useState(false);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
  });

  const toggle = () => {
    setSwitcher(!switcher);
  };

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="CreatePostsScreen">
        <MainStack.Screen
          name="RegistrationScreen"
          component={RegistrationScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="CreatePostsScreen"
          component={CreatePostsScreen}
          options={{
            title: "Створити публікацію",
            headerStyle: {
              borderBottomColor: "rgba(0, 0, 0, 0.3)",
              borderBottomWidth: 1,
            },
            headerTitleAlign: "center",
            headerTitleStyle: {
              fontFamily: "Roboto-Medium",
              fontSize: 17,
              lineHeight: 22,

              color: "#212121",
            },
            headerLeft: () => (
              <AntDesign
                name="arrowleft"
                size={24}
                color="rgba(33, 33, 33, 0.8)"
                style={{ marginLeft: 16 }}
              />
            ),
          }}
        />
        <MainStack.Screen
          name="CommentsScreen"
          component={CommentsScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="PostsScreen"
          component={PostsScreen}
          options={{
            headerShown: false,
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
