import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <Form>
                <form>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                    <input></input>
                </form>
            </Form>
                
        </Container>
    )
}

export default Login

const Container = styled.div`
    /* border: 1px solid black; */
    padding: 10px;
    
`
const Form = styled.div`
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