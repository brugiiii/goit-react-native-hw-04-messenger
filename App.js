import "react-native-gesture-handler";

import { NavigationContainer } from "@react-navigation/native";
import Routes from "./Routes";

import { useFonts } from "expo-font";

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
      <Routes />
    </NavigationContainer>
  );
}
