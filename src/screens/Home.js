import { PostsScreen, CreatePostsScreen, ProfileScreen } from "../screens";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tabs = createBottomTabNavigator();

export const Home = () => {
  return (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: "#FF6C00",
        inactiveTintColor: "gray",
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

//  <MainStack.Screen
//           name="CreatePostsScreen"
//           component={CreatePostsScreen}
//           options={{
//             ...headerStyles,
//             title: "Створити публікацію",
//             headerLeft: () => (
//               <AntDesign
//                 name="arrowleft"
//                 size={24}
//                 color="rgba(33, 33, 33, 0.8)"
//                 style={{ marginLeft: 16 }}
//               />
//             ),
//           }}
//         />
//         <MainStack.Screen
//           name="CommentsScreen"
//           component={CommentsScreen}
//           options={{
//             headerShown: false,
//           }}
//         />

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
