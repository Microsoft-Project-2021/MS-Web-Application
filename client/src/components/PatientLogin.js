import styled from "styled-components";
import {Link, useNavigate} from 'react-router-dom'//useNavigate helps in navigating to another url/page
import {useState} from 'react';
import SignUpModal from "./PatientSignup";

function LogInModal({ closeLogInModal }, props ) {

    const [openSignUpModal, setOpenSignupModal] = useState(false)
    const [openLoginModal, setOpenLoginModal] = useState(false)

    const ToggleModal = () => {
        setOpenLoginModal(openLoginModal);
        setOpenSignupModal(!openSignUpModal);
    }

    const {loginEmail,setLoginEmail,loginPassword, setLoginPassword, login}= props;

    const navigate = useNavigate()

    const loginFunction = (e) => {
        e.preventDefault();

        console.log("Login button pressed")

        navigate('/')
    }
    return(
        <Container>
            <Background>
            <LogInContainer>
                 <ExitButton>
                    <button onClick={() => closeLogInModal(false)}>&times;</button>
                </ExitButton>
                <TitleHeader>
                    <h1>Log In</h1>
                </TitleHeader>
                <form onSubmit={loginFunction}>
                    <UserID>
                        {/* <label>User ID:</label> */}
                        <input type="text" autoFocus required value={loginEmail} onChange={(e)=> setLoginEmail(e.target.value)} placeholder="Username/ID"/>    
                    </UserID>
                    <Password>
                        {/* <label>Password:</label> */}
                        <input input type="password" required value={loginPassword} onChange={(e)=> setLoginPassword(e.target.value)} placeholder="Password"/>
                    </Password>
                {/*   <ErrorMsg>
                    <p>{passwordError}</p>
                </ErrorMsg>*/ }
                    <LoginButton>
                        <button type="submit" onClick={login}> Login </button>
                    </LoginButton>
                    <ForgotPassword>
                        <Link className="link" to="/PasswordReset">Forgot Password?</Link>
                    </ForgotPassword>
                    <GoogleButton>
                        <button type="submit">
                            <img src="images/google_logo.svg" alt=""/>
                            Continue with Google</button>
                    </GoogleButton>
                </form>         
            </LogInContainer>
            </Background>
            {openLoginModal && <LogInModal closeLogInModal={setOpenLoginModal} />}
        </Container>
    )
    
}

export default LogInModal

const Container =styled.div`
height: 100vh;
margin-top: -100px;
width: 100vw;   
`
const Background =styled.div`
align-content: center;
background-color: rgba(0,0,0, 35%);
display: flex;
height: 100vh;
justify-content: center;
position: fixed;
width: 100vw;
`
const LogInContainer = styled.div`
    background-color: white;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 
    height: 450px;
    margin-top: 100px;
    padding: 20px;
    position: fixed;
    width: 300px;
    z-index: 1;
    

    input{
        border: none;
        border-bottom: 1px solid lightgrey;
        font-size: 17px;
        outline: none;
        width: 100%;
    }

    input::placeholder{
        text-align: center;
    }

    .link{
        color: inherit;
        font-family: "Segoe UI";
        font-size: 15px;
        margin-top: 15px;
        text-decoration: none;
        opacity: 70%;
    } 

`
const TitleHeader = styled.div`

    h1{
        font-family: Calibri;
        font-size: 37px;
        font-weight: 500;
        margin-bottom: 50px; 
        margin-top: 20px;
        text-align: center;
    }
`
const ExitButton = styled.div`
    
    button{
        background: none;
        border: none;
        color: inherit;
        cursor: pointer;
        display: flex;
        float: right;
        font-size: 25px;
        justify-content: flex-end;
    }

    button:hover{
        color: crimson;
    }
`
const UserID = styled.div`
    display: flex;
    font-family: "Segoe UI";
    justify-content: center;
    margin-top: 50px;
    padding: 0 20px 0 20px;
`

const Password = styled.div`
    display: flex;
    font-family: "Segoe UI";
    justify-content: center;
    margin-top: 50px;
    padding: 0 20px 0 20px;
`

const LoginButton = styled.div`
    display: flex;
    justify-content: center;
    margin: 50px 0 0 0;
    width: 100%;
    
    button{
        background-color: #1E90FF;
        border:none;
        border-radius: 50px;
        color: white;
        cursor: pointer;
        font-family: Calibri;
        font-size: 20px;
        margin: 0px 20px 0 20px;
        padding: 15px 10px 15px 10px;
        width: 40%;
    }
`
const ForgotPassword = styled.div`
    display: flex;
    justify-content: center;   
`
const GoogleButton = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
    
    button{
        display: flex;
        background-color: white;
        border-color: lightgrey;
        font-family: "Segoe UI";
        font-weight: 400;
        font-size: 15px;
        padding: 10px 15px;
        border-radius: 2em;

        img{
            margin-right: 5px;
        }
    }
`