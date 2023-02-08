import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { ChatRoom } from "./components/ChatRoom";
import { SignIn } from "./components/SignIn";
import { SignOut } from "./components/SignOut";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ_4pkkRsCBE8e4rsP9OAIoK2aTMZEQYs",
  authDomain: "react-chat-2d9a4.firebaseapp.com",
  projectId: "react-chat-2d9a4",
  storageBucket: "react-chat-2d9a4.appspot.com",
  messagingSenderId: "106825283107",
  appId: "1:106825283107:web:5435b8e3a8ba15f4eca396",
  measurementId: "G-PH5KH0EGDZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const firestore = getFirestore(app);
function App() {
  const [user] = useAuthState(auth);

  return (
    <div className='App'>
      <header>
        <h1 className='text-white font-black text-3xl m-4'>
        Lgroup (حلاق الرحمة) emergency chat
        </h1>
      </header>

      <section className='flex w-full h-[689px] justify-center items-center'>
        {user ? (
          <ChatRoom firestore={firestore} auth={auth} />
        ) : (
          <SignIn auth={auth} />
        )}
      </section>
      <SignOut auth={auth} />
    </div>
  );
}

export default App;
