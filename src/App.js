//do imports of packages here
//styled-components allow us to create custom tags and style them within the js file
import styled from 'styled-components' // do npm i styled-components to get this package
// react-router-dom used for routing
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';//do npm install react-router-dom to get this package 



// do elements(components) imports here
import Home from './components/Home';
import Login from './components/Login';
import PasswordReset from './components/PasswordReset';
import ChangePassword from './components/ChangePassword';
<<<<<<< Updated upstream:src/App.js
=======
import Video from './Video';
import Register from './components/Register';
import {AuthProvider} from './AuthContext'
import Dashboard from './components/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import Chat from './components/Chat';
// import SelectChat from './components/selectChat';
// import Wait from './components/Wait';
import {Switch} from "@material-ui/core";
>>>>>>> Stashed changes:client/src/App.js



function App() {
  return (
    <Container>
      <Router>
        <Routes>
          {/* in the new react router dom, you need to use the element={<component_name/>} */}
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/passwordreset" element={<PasswordReset/>} />
          <Route path="/changepassword" element={<ChangePassword/>} />
<<<<<<< Updated upstream:src/App.js
=======
          <Route path="/register" element={<Register/>} />
          <Route element={<PrivateRoute/>}>
          <Route path="/dashboard" element={<Dashboard/>} />
              <Route path="/chat" element={<Chat/>} />
              {/* <Route path="/selectchat" element={<SelectChat/>} /> */}
          <Route path="/video" element={<Video/>} />
              {/* <Route path="/wait" element={<Wait/>} /> */}
          </Route>
>>>>>>> Stashed changes:client/src/App.js
        </Routes>
      </Router>
    </Container>       
  );
}

export default App;

const Container = styled.div`

`