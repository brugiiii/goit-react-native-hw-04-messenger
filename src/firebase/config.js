// Для роботи із firebase обовʼязково треба ініціалізувати проект
import { initializeApp } from "firebase/app";
// Функція для підключення авторизації в проект
import { getAuth } from "firebase/auth";
// Функція для підключення бази даних у проект
import { getFirestore } from "firebase/firestore";
// Функція для підключення сховища файлів в проект
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCOFxZgM18qjPnZKPJK5lG32joGioLo-8Q",
  authDomain: "fir-auth-786d4.firebaseapp.com",
  projectId: "fir-auth-786d4",
  storageBucket: "fir-auth-786d4.appspot.com",
  messagingSenderId: "885602414342",
  appId: "1:885602414342:web:46d75bea793b089baff887",
  measurementId: "G-7GGB1D1CWL",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
