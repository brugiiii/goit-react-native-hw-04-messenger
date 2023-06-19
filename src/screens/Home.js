import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Platform } from "react-native";

import { PostsScreen, CreatePostsScreen, ProfileScreen } from "./index";

import Ionicons from "react-native-vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

export const Home = ({ navigation, route }) => {
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopColor: "rgba(0, 0, 0, 0.3)",
          borderTopWidth: 1,
          paddingTop: 9,
          paddingBottom: Platform.OS === "android" ? 54 : 34,

          alignItems: "center",
        },
        tabBarActiveTintColor: "#FF6C00",
        tabBarInactiveTintColor: "rgba(33, 33, 33, 0.8)",

        tabBarItemStyle: {
          height: 40,
          maxWidth: 40,
        },
        tabBarIcon: ({ color }) => {
          if (route.name === "PostsScreen") {
            return <Ionicons name="grid-outline" size={24} color={color} />;
          }
          if (route.name === "CreatePostsScreen") {
            return <AntDesign name="plus" size={24} color={"#fff"} />;
          }
          if (route.name === "ProfileScreen") {
            return <Ionicons name="person-outline" size={24} color={color} />;
          }
        },
      })}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          ...headerStyles,
          title: "Публікації",
          headerRight: () => (
            <MaterialIcons
              name="logout"
              size={24}
              color="#BDBDBD"
              style={{ marginRight: 16 }}
              onPress={() => navigation.navigate("LoginScreen")}
            />
          ),
        }}
      />
      <Tabs.Screen
        onPress={() => {
          console.log(1);
        }}
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          tabBarStyle: { display: "none" },
          ...headerStyles,
          title: "Створити публікацію",
          headerLeft: () => (
            <AntDesign
              name="arrowleft"
              size={24}
              color="rgba(33, 33, 33, 0.8)"
              style={{ marginLeft: 16 }}
              onPress={() => navigation.navigate("PostsScreen")}
            />
          ),
          tabBarItemStyle: {
            ...createPostsTabStyles,
          },
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  );
};

const headerStyles = {
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
};

const createPostsTabStyles = {
  maxWidth: 70,
  height: 40,
  marginHorizontal: 31,

  borderRadius: 20,
  backgroundColor: "#FF6C00",
};
