//do imports of packages here
import React, {useState, useEffect} from 'react';
//styled-components allow us to create custom tags and style them within the js file
import styled from 'styled-components' // do npm i styled-components to get this package
// react-router-dom used for routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';//do npm install react-router-dom to get this package
//firebase
import fire from './components/fire'; 



// do elements(components) imports here
import Home from './components/Home';
import Login from './components/Login';



function App() {

  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail('')
    setPassword('')
  }

  const clearErrors = () => {
    setEmailError('')
    setPasswordError('')
  }

  const handleLogin = () => {
    clearErrors()
    fire
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch(err => {
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break; 
        } 
      }); 
  }

  const handleSignUp = () => {
    clearErrors()
    fire
    .auth()
    .createUserWithEmailAndPassword(email,password)
    .catch(err => {
      switch(err.code){
        case "auth/email-already-in-use":
        case "auth/invalid-email":
          setEmailError(err.message);
          break;
        case "auth/weak-password":
          setPasswordError(err.message);
          break; 
      } 
    }); 
  }

  const handleLogout = () => {
    fire.auth().signOut()
  }

const authListener = () => {
  fire.auth().onAuthStateChanged(user => {
    if(user){
      clearInputs();
      setUser(user)
    } else {
      setUser('');
    }
  })
}

useEffect(() =>{
  authListener();
})

  return (
    <Container>
      <Router>
        <Routes>
          {/* in the new react router dom, you need to use the element={<component_name/>} */}
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login email={email} setEmail={setEmail} password={password} 
          setPassword = {setPassword} handleLogin={handleLogin} handleSignUp={handleSignUp} 
          hasAccount = {hasAccount} setHasAccount={setHasAccount} emailError={emailError} passwordError={passwordError}
          />} />
        </Routes>
      </Router>
    </Container>       
  );
}

export default App;

const Container = styled.div`

`