import styled from 'styled-components'
import {Link, useNavigate} from 'react-router-dom'//useNavigate helps in navigating to another url/page

function PasswordReset() {

const navigate = useNavigate()

const passwordResetFunction = (e) => {
    e.preventDefault();

    console.log("Pasword Reset Submit button pressed")

    navigate('/ChangePassword')
}

    return (
        <Container>
            {/* this is how you use images that are in the public folder */}
            {/* <img src="images/MS_login_UI.jpeg" alt="" /> */}
            <LoginContainer>
                <h1>Reset Password</h1>
                <form onSubmit={passwordResetFunction}>
                    <UserID>
                        {/* <label>User ID:</label> */}
                        <input placeholder="Username/ID"/>
                    </UserID>
                    <LoginButton>
                        <button type="submit"> Submit </button>
                    </LoginButton>
                    <BackToLogin>
                        <Link class="link" to="/Login">Back To Login</Link>
                    </BackToLogin>
                </form>
            </LoginContainer>
                
        </Container>
    )
}

export default PasswordReset

const Container = styled.div`
    /* border: 1px solid black; */
    height: auto;
    width:  auto;
    padding: 10px;
    background-image: url("images/bg_img.svg");
    background-repeat: no-repeat;
    background-size: cover;    
`
const LoginContainer = styled.div`
    /* border: 1px solid black; */
    background-color: white;
    height: 600px;
    /* width: 400px; */
    padding: 20px 0 0 0;
    border-radius: 15px;
    margin: 50px 20px 0 70%;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;   

    h1{
        font-family:Calibri;
        font-size: 60px;
        font-weight:500;
        text-align: center;
        /* margin-top: 50px; */
        /* border: 1px solid black; */
    }

    form{
        /* border: 1px solid black; */
        padding: 30px 25px;
        margin: 70px 20px;
        height: 400px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        /* justify-content: center; */

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
    font-family: "Segoe UI"
`
const LoginButton = styled.div`
    /* border: 1px solid black; */
    margin: 70px 0 0 0;
    display: flex;
    justify-content: center;
    width: 100%;
    
    button{
        width: 50%;
        font-family: Calibri;
        font-size: 25px;
        margin: 0px 11% 0 11%;
        padding: 15px;
        color: white;
        background-color: #1E90FF;
        border-radius: 50px;
        border:none;
        cursor: pointer;
    }
`
const BackToLogin = styled.div`
    display: flex;
    justify-content: center;

    .link{
        text-decoration: none;
        color: inherit;
        font-family: "Segoe UI";
        font-size: 15px;
        margin-top: 15px;
    }    
`