//do imports of packages here
import React, {useState, useEffect} from 'react';
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider,signInWithPopup} from "firebase/auth"
import {auth} from "./components/fire"
//styled-components allow us to create custom tags and style them within the js file
import styled from 'styled-components' // do npm i styled-components to get this package
// react-router-dom used for routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';//do npm install react-router-dom to get this package
//firebase


// do elements(components) imports here
import Home from './components/Home';
import Login from './components/Login';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@firebase/auth';



function App() {
  const [registerEmail, setRegisterEmail ] = useState("")
  const [registerPassword, setRegisterPassword ] = useState("")
  const [loginEmail, setLoginEmail ] = useState("")
  const [loginPassword, setLoginPassword ] = useState("")
 // const [emailError, setemailError ] = useState("")
 // const [passwordError, setpasswordError ] = useState("")

  const [user, setUser] = useState({})

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  })

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth,registerEmail,registerPassword)
    } catch (error){
      console.log(error.message);
    }
  
  }

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(auth, loginEmail,loginPassword)
    } catch (error){
      console.log(error.message);
    }
  }

  const logout = async () => {
    
    await signOut(auth);
  }

 /* const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result)
      })
      .catch((error) => {
        console.log(error);
      });
  }; */
 

  return (
    <Container>
      <Router>
        <Routes>
          {/* in the new react router dom, you need to use the element={<component_name/>} */}
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login loginEmail={loginEmail} setLoginEmail={setLoginEmail} 
            loginPassword={loginPassword} setLoginPassword={setLoginPassword} login={login}
          />} />
        </Routes>
      </Router>
    </Container>       
  );
}

export default App;

const Container = styled.div`

`