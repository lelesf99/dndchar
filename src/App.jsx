import './css/App.css';
import React, { Suspense, lazy, useState } from 'react';
import { Routes, Route, Outlet, } from 'react-router-dom';
import { onAuthStateChanged, getAuth } from 'firebase/auth';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4DrYIu5wkZ6Z24y2JFB-7PWPcjwuX6PU",
  authDomain: "dndchar-143e9.firebaseapp.com",
  projectId: "dndchar-143e9",
  storageBucket: "dndchar-143e9.appspot.com",
  messagingSenderId: "1077981407053",
  appId: "1:1077981407053:web:99afc6ea1df4005a90f904"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

const Login = lazy(() => import('./routes/Login'));
const Signup = lazy(() => import('./routes/Signup'));
const Profile = lazy(() => import('./routes/Profile'));
const CharBuilder = lazy(() => import('./routes/CharBuilder'));
const Home = lazy(() => import('./routes/Home'));

function App() {

  const [user, setUser] = useState(null);


  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      setUser(user);
      // ...
    } else {
      // User is signed out
      setUser(user);
    }
  });

  return (
    <div className='App'>
      <Suspense fallback={<div className="loading"></div>}>
        <Routes>
          <Route path="/" element={<Login user={user}></Login>} />
          <Route path="signup" element={<Signup></Signup>} />
          <Route path=":uid" element={<Profile user={user}></Profile>} >
            <Route path="" element={<Home user={user}></Home>} />
            <Route path="CharBuilder" element={<CharBuilder user={user} ></CharBuilder>} />
          </Route>
        </Routes>
      </Suspense>
      <Outlet />
    </div>
  );
}

export default App;
