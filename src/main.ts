import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAI1jC0XhizjEbDtLSzXFMZIBN99bmjsZQ",
  authDomain: "peliculas-pac.firebaseapp.com",
  projectId: "peliculas-pac",
  storageBucket: "peliculas-pac.appspot.com",
  messagingSenderId: "673740437048",
  appId: "1:673740437048:web:98a09fd848d51679bc98cd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
