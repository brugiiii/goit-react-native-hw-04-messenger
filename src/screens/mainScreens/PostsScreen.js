import {
  CommentsScreen,
  MapScreen,
  DefaultScreen,
} from "~/screens/nestedScreens";
import { createStackNavigator } from "@react-navigation/stack";

import { useDispatch } from "react-redux";
import { signout } from "~/redux/auth/authOperations";

import { ArrowLeftIcon, LogoutIcon } from "~/components/icons";

const NestedStack = createStackNavigator();

export const PostsScreen = () => {
  const dispatch = useDispatch();

  return (
    <NestedStack.Navigator initialRouteName="DefaultScreen">
      <NestedStack.Screen
        name="DefaultScreen"
        component={DefaultScreen}
        options={{
          ...headerStyles,
          title: "Публікації",
          headerLeft: null,
          headerRight: () => (
            <LogoutIcon
              color="#BDBDBD"
              style={{ marginRight: 16 }}
              onPress={() => {
                dispatch(signout());
              }}
            />
          ),
        }}
      />

      <NestedStack.Screen
        name="MapScreen"
        component={MapScreen}
        options={({ navigation }) => ({
          ...headerStyles,
          headerTitle: "Мапа",
          headerLeft: () => (
            <ArrowLeftIcon
              color="rgba(33, 33, 33, 0.8)"
              style={{ marginLeft: 16 }}
              onPress={() => {
                navigation.goBack();
              }}
            />
          ),
        })}
      />

      <NestedStack.Screen
        name="CommentsScreen"
        component={CommentsScreen}
        options={({ navigation }) => ({
          ...headerStyles,
          headerTitle: "Коментарі",
          headerLeft: () => (
            <ArrowLeftIcon
              color="rgba(33, 33, 33, 0.8)"
              style={{ marginLeft: 16 }}
              onPress={() => navigation.goBack()}
            />
          ),
        })}
      />
    </NestedStack.Navigator>
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
