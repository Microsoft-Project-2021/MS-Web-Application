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
        </Routes>
      </Router>
    </Container>       
  );
}

export default App;

const Container = styled.div`

`