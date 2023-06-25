import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { stateChangeUser } from "~/redux/auth/authOperations";
import { selectStateChange } from "~/redux/auth/authSelectors";

import useRoute from "../../router";

import { NavigationContainer } from "@react-navigation/native";

export const Main = () => {
  const stateChange = useSelector(selectStateChange);
  const dispatch = useDispatch();

  const routing = useRoute(stateChange);

  useEffect(() => {
    dispatch(stateChangeUser());
  }, []);

  return <NavigationContainer>{routing}</NavigationContainer>;
};

export default Main;
