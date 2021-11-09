import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3kcJ2TwekWEPqjDKlxz0OqsmFM8kDFCY",
  authDomain: "reactfirebase-3ebc3.firebaseapp.com",
  projectId: "reactfirebase-3ebc3",
  storageBucket: "reactfirebase-3ebc3.appspot.com",
  messagingSenderId: "478173404899",
  appId: "1:478173404899:web:d563dc7d93ec026ef9afd6",
  measurementId: "G-F4XM3PLMDH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(<App />, document.getElementById("root"));
