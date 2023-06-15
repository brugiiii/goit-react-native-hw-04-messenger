import { PostsScreen, CreatePostsScreen, ProfileScreen } from "./index";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";

import Ionicons from "react-native-vector-icons/Ionicons";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

export const Home = () => {
  const navigation = useNavigation();

  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopColor: "rgba(0, 0, 0, 0.3)",
          borderTopWidth: 1,
          paddingTop: 8,

          alignItems: "center",
        },
        tabBarActiveTintColor: "#FF6C00",
        tabBarInactiveTintColor: "rgba(33, 33, 33, 0.8)",
        tabBarItemStyle: {
          borderRadius: 20,
          height: 40,
          maxWidth: 70,

          marginHorizontal: 15,
        },
        tabBarIcon: ({ color }) => {
          if (route.name === "PostsScreen") {
            return <Ionicons name="grid-outline" size={24} color={color} />;
          }
          if (route.name === "CreatePostsScreen") {
            return <AntDesign name="plus" size={24} color={color} />;
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
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
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
