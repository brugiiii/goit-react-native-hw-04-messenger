// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyAdIOWxWp3KsLJk4zaIXr_00BLpY-yuax4",
  authDomain: "phoneapp-2e007.firebaseapp.com",
  databaseURL: "https://phoneapp-2e007.firebaseio.com",
  projectId: "phoneapp-2e007",
  storageBucket: "phoneapp-2e007.appspot.com",
  messagingSenderId: "299150646985",
  appId: "app-id",
  measurementId: "G-measurement-id",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
