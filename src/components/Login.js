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
            <LoginContainer>
                <h3>Log In</h3>
                <form onSubmit={loginFunction}>
                    <UserID>
                        <label>User ID:</label>
                        <input/>
                    </UserID>
                    <Password>
                        <label>Password:</label>
                        <input/>
                    </Password>
                    <LoginButton>
                        <button type="submit"> Login </button>
                    </LoginButton>
                </form>
            </LoginContainer>
                
        </Container>
    )
}

export default Login

const Container = styled.div`
    /* border: 1px solid black; */
    padding: 10px;
    
`
const LoginContainer = styled.div`
    /* border: 1px solid black; */
    padding: 20px 0 0 0;
    margin: 50px 10px 0 70%;
    justify-content: center;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;   

    h3{
        text-align: center;
        /* margin-top: 50px; */
        /* border: 1px solid black; */
    }

    form{
        /* border: 1px solid black; */
        padding: 0 25px;
        margin: 20px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;

        input{
            width: 70%;
        }
    }
`
const UserID = styled.div`
    display: flex;
    justify-content: space-between;
`
const Password = styled.div`
    margin: 15px 0 0 0;
    display: flex;
    justify-content: space-between;
`
const LoginButton = styled.div`
    /* border: 1px solid black; */
    /* margin-top: 15px; */
    display: flex;
    justify-content: right;
    width: 100%;

    button{
        width: 50%;
        margin: 15px 11%;
    }
`