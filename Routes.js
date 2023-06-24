import { useState } from "react";

import { RegistrationScreen, LoginScreen } from "~/screens";
import {
  PostsScreen,
  CreatePostsScreen,
  ProfileScreen,
} from "~/screens/index.js";

import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import {
  PlusIcon,
  ArrowLeftIcon,
  GridIcon,
  PersonIcon,
} from "~/components/icons";

const Tabs = createBottomTabNavigator();
const MainStack = createStackNavigator();

export const Routes = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const switchLoggedIn = () => {
    setIsLoggedIn((prev) => !prev.isLoggedIn);
  };

  return isLoggedIn ? (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarStyle: {
          borderTopColor: "rgba(0, 0, 0, 0.3)",
          borderTopWidth: 1,
          paddingTop: 9,
          paddingBottom: 54,

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
            return <GridIcon name="grid-outline" size={24} color={color} />;
          }
          if (route.name === "CreatePostsScreen") {
            return <PlusIcon color="#FFF" />;
          }
          if (route.name === "ProfileScreen") {
            return <PersonIcon name="person-outline" size={24} color={color} />;
          }
        },
      })}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{ headerShown: false }}
      />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={({ navigation }) => ({
          tabBarStyle: { display: "none" },
          ...headerStyles,
          title: "Створити публікацію",
          headerLeft: () => (
            <ArrowLeftIcon
              color="rgba(33, 33, 33, 0.8)"
              style={{ marginLeft: 16 }}
              onPress={() => navigation.navigate("PostsScreen")}
            />
          ),
          tabBarItemStyle: {
            ...createPostsTabStyles,
          },
        })}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tabs.Navigator>
  ) : (
    <MainStack.Navigator initialRouteName="RegistrationScreen">
      <MainStack.Screen
        name="RegistrationScreen"
        component={RegistrationScreen}
        options={{
          headerShown: false,
        }}
        params={switchLoggedIn}
      />
      <MainStack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          headerShown: false,
        }}
      />
    </MainStack.Navigator>
  );
};

const createPostsTabStyles = {
  maxWidth: 70,
  height: 40,
  marginHorizontal: 31,

  borderRadius: 20,
  backgroundColor: "#FF6C00",
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

export default Routes;
