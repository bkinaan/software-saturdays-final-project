// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOrmZAF1AHaCoI96z4oHc_VKWKPPe6fnQ",
  authDomain: "software-saturdays-final.firebaseapp.com",
  databaseURL: "https://software-saturdays-final-default-rtdb.firebaseio.com",
  projectId: "software-saturdays-final",
  storageBucket: "software-saturdays-final.appspot.com",
  messagingSenderId: "1080875423899",
  appId: "1:1080875423899:web:909aec23e082d35fad0e3e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export { database };