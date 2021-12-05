//do imports of packages here
import React from 'react';
//styled-components allow us to create custom tags and style them within the js file
import styled from 'styled-components' // do npm i styled-components to get this package
// react-router-dom used for routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';//do npm install react-router-dom to get this package 
import firebase from "./firebase";


// do elements(components) imports here
import Home from './components/Home';
import Login from './components/Login';
import UI from './components/ChatWithDoctor';



function App() {
  return (
    <Container>
      <Router>
        <Routes>
          {/* in the new react router dom, you need to use the element={<component_name/>} */}
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/chat" element={<UI/>} />
        </Routes>
      </Router>
    </Container>       
  );
}

export default App;

const Container = styled.div`

`