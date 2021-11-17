import styled from 'styled-components'

function Login() {

const loginFunction = (e) => {
    e.preventDefault();

    console.log("Login button pressed")
}

    return (
        <Container>
            <LoginContainer>
                <form onSubmit={loginFunction}>
                    <UserID>
                        <input/>
                    </UserID>
                    <Password>
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
    border: 1px solid black;
    margin: 50px 10px 0 70%;
    display: flex;
    justify-content: center;

    form{
        border: 1px solid black;
        margin: 30px;
        display: flex;
        flex-direction: column;
    }
`
const UserID = styled.div`

`
const Password = styled.div`

`
const LoginButton = styled.div`

`