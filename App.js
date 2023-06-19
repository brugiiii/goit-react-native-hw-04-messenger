import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { RegistrationScreen, LoginScreen } from "~/screens/auth";
import { Home } from "~/screens/Home";
import { MapScreen } from "~/screens/MapScreen";

import { useFonts } from "expo-font";
import { AntDesign } from "@expo/vector-icons";

const MainStack = createStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("~/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("~/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("~/assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="Home">
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
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />

        <MainStack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{
            headerLeft: () => (
              <AntDesign
                name="arrowleft"
                size={24}
                color="rgba(33, 33, 33, 0.8)"
                style={{ marginLeft: 16 }}
                onPress={() => {}}
              />
            ),
          }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
