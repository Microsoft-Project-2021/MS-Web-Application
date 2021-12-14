import styled from "styled-components";
import {Link, useNavigate} from 'react-router-dom'//useNavigate helps in navigating to another url/page
import {useState} from 'react';
import LogInModal from "./PatientLogin";

function SignUpModal({ closeSignUpModal }, props ) {

    const [openSignUpModal, setOpenSignupModal] = useState(false)

    const {SignUpEmail,setSignUpEmail,SignUpPassword, setSignUpPassword, SignUp}= props;

    const navigate = useNavigate()

    const SignUpFunction = (e) => {
        e.preventDefault();

        console.log("SignUp button pressed")

        navigate('/')
    }
    return(
        <ModalContainer>
            <Background>
            <SignUpContainer>
                 <ExitButton>
                    <button onClick={() => closeSignUpModal(false)}>&times;</button>
                </ExitButton>
                <TitleHeader>
                    <h1>Sign Up</h1>
                </TitleHeader>
                <form onSubmit={SignUpFunction}>
                    <UserID>
                        {/* <label>User ID:</label> */}
                        <input type="text" autoFocus required value={SignUpEmail} onChange={(e)=> setSignUpEmail(e.target.value)} placeholder="Username/ID"/>    
                    </UserID>
                    <Password>
                        {/* <label>Password:</label> */}
                        <input input type="password" required value={SignUpPassword} onChange={(e)=> setSignUpPassword(e.target.value)} placeholder="Password"/>
                    </Password>
                    <ConfirmPassword>
                        {/* <label>Password:</label> */}
                        <input input type="password" required placeholder="Confirm Password"/>
                    </ConfirmPassword>
                {/*   <ErrorMsg>
                    <p>{passwordError}</p>
                </ErrorMsg>*/ }
                    <SignUpButton>
                        <button type="submit" onClick={SignUp}> SignUp </button>
                    </SignUpButton>
                    <ForgotPassword>
                        <Link className="link" to="/PasswordReset">Forgot Password?</Link>
                    </ForgotPassword>
                    <GoogleButton>
                        <button type="submit">
                            <img src="images/google_logo.svg" alt=""/>
                            Signup with Google</button>
                    </GoogleButton>
                </form>
            </SignUpContainer>
            </Background>
            {openSignUpModal && <SignUpModal closeSignUpModal={setOpenSignupModal}/>}
        </ModalContainer>
    )
    
}

export default SignUpModal

const ModalContainer =styled.div`
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

const SignUpContainer = styled.div`
    background-color: white;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; 
    height: 500px;
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

const ConfirmPassword = styled.div`
    display: flex;
    font-family: "Segoe UI";
    justify-content: center;
    margin-top: 50px;
    padding: 0 20px 0 20px;
`

const SignUpButton = styled.div`
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
const ToLogIn = styled.div`
    display: inline-flex;
    height:50px;
    justify-content: center;
    position: absolute;
    top: 50%;
    right: 28%;
    width: 120px;

    button{
        align-items: center;
        background-color: white;
        border: none;
        border-radius: 50px;
        cursor: pointer;
        display: inline-block;
        font-size: 25px;
        height: 40px;
        justify-content: center;
        line-height: 47px;
        outline: none;
        overflow: hidden;
        transition: all 0.25s ease-out;
        width: 40px;

        img {
            transform: scaleX(-1); /* flip horizontally */
            height: 20px;
            width: 20px;
            padding: 2px;
        }
    }

    button:hover{
        width: 120px;
        padding: 0 5px;
        display: flex;
        
    }

`