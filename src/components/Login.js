import styled from 'styled-components'
import {Link, useNavigate} from 'react-router-dom'//useNavigate helps in navigating to another url/page

function Login() {

const navigate = useNavigate()

const loginFunction = (e) => {
    e.preventDefault();

    console.log("Login button pressed")

    navigate('/')
}

    return (
        <Container>
            {/* this is how you use images that are in the public folder */}
            {/* <img src="images/MS_login_UI.jpeg" alt="" /> */}
            <LoginContainer>
                <h3>Log In</h3>
                <form onSubmit={loginFunction}>
                    <UserID>
                        <input placeholder="Username/ID"/>
                    </UserID>
                    <Password>
                        <input placeholder="Password"/>
                    </Password>
                    <LoginButton>
                        <button type="submit"> Login </button>
                    </LoginButton>
                    <ForgotPassword>
                        <Link class="link" to="/">Forgot Password?</Link>
                    </ForgotPassword>
                </form>
            </LoginContainer>
                
        </Container>
    )
}

export default Login

const Container = styled.div`
    /* border: 1px solid black; */
    height: 97vh;
    padding: 10px;
    background-image: url("images/Background-Image.svg");
    background-repeat: no-repeat;
    background-size: cover;     
`
const LoginContainer = styled.div`
    /* border: 1px solid black; */
    background-color: white;
    height: 600px;
    padding: 20px 0 0 0;
    border-radius: 15px;
    margin: 50px 20px 0 70%;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;   

    h3{
        text-align: center;
        font-size: 44px;
    }

    form{
        /* border: 1px solid black; */
        padding: 30px 25px;
        margin: 70px 20px;
        height: 400px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;

        input{
            width: 100%;
            outline: none;
            border: none;
            font-size: 20px;
            border-bottom: 1px solid lightgrey;
        }
    }
`
const UserID = styled.div`
    /* border: 1px solid black;  */
    display: flex;
    justify-content: center;
`
const Password = styled.div`
    margin: 75px 0 0 0;
    display: flex;
    justify-content: center;
`
const LoginButton = styled.div`
    /* border: 1px solid black; */
    margin: 100px 0 0 0;
    display: flex;
    justify-content: center;
    width: 100%;

    button{
        width: 50%;
        font-size: 20px;
        margin: 0px 11% 0 11%;
        padding: 15px;
        color: white;
        background-color: lightskyblue;
        border-radius: 30px;
        cursor: pointer;
    }
`
const ForgotPassword = styled.div`
    display: flex;
    justify-content: center;

    .link{
        text-decoration: none;
        color: inherit;
        font-size: 15px;
        margin-top: 7px;
    }    
`