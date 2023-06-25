import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  updateProfile,
  signOut,
} from "firebase/auth";
import { auth } from "~/firebase/config";

import { updateUserProfile, authStateChange, authSignOut } from "./authSlice";

export const signUp =
  ({ email, password, login }) =>
  async (dispatch) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);

      const user = await auth.currentUser;

      await updateProfile(user, {
        displayName: login,
      });

      const { displayName, uid, email } = await auth.currentUser;

      dispatch(
        updateUserProfile({ nickname: displayName, userId: uid, email })
      );
    } catch (error) {
      console.log(error);
    }
  };

export const logIn =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const user = await await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
    } catch (error) {
      console.log(error);
    }
  };

export const signout = () => async (dispatch) => {
  await signOut(auth);

  dispatch(authSignOut());
};

export const stateChangeUser = () => async (dispatch) => {
  onAuthStateChanged(auth, (user) => {
    console.log("user: ", user);
    if (user) {
      const { displayName, uid, email } = user;

      dispatch(
        updateUserProfile({ nickname: displayName, userId: uid, email })
      );
      dispatch(authStateChange(true));
    }
  });
};
