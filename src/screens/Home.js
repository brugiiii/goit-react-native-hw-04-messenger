import { PostsScreen, CreatePostsScreen, ProfileScreen } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import { AntDesign } from "@expo/vector-icons";

const Tabs = createBottomTabNavigator();

export const Home = () => {
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
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarInactiveBackgroundColor: "#fff",
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
      tabBarOptions={{
        activeTintColor: "#fff",
        inactiveTintColor: "rgba(33, 33, 33, 0.8)",
      }}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{ ...headerStyles, title: "Публікації" }}
      />
      <Tabs.Screen name="CreatePostsScreen" component={CreatePostsScreen} />
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
