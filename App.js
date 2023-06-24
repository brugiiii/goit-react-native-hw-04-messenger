import "react-native-gesture-handler";

import { Provider } from "react-redux";
import { store } from "~/redux/store";

import { NavigationContainer } from "@react-navigation/native";
import useRoute from "./router";

import { useFonts } from "expo-font";

export default function App() {
  const routing = useRoute(false);

  const [fontsLoaded] = useFonts({
    "Roboto-Regular": require("~/assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Medium": require("~/assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Bold": require("~/assets/fonts/Roboto-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <NavigationContainer>{routing}</NavigationContainer>
    </Provider>
  );
}
