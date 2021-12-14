import styled from  'styled-components'
import {Link, Navigate} from 'react-router-dom'
import React from 'react'
import {Helmet} from 'react-helmet'
import {useState} from 'react';
import LogInModal from './PatientLogin';
import SignUpModal from './PatientSignup';

function Header() {
    
    const [openSignUpModal, setOpenSignupModal] = useState(false)
    const [openLoginModal, setOpenLoginModal] = useState(false)

    return (

        <Container>

            <Helmet>
                <title>OmniDoc KE</title>
            </Helmet>

            <Logo>OmniDoc</Logo>

            <NavBar>
                <button class="link">Home</button>
                <button class="link">Partners</button>
                <button class="link">Services</button>
                <button class="link">About us</button>
            </NavBar>

            <SignIn>
                <button 
                    class="auth" 
                    onClick={
                        () => {
                            setOpenSignupModal(true);
                            }
                        }>Signup</button>
                        <button 
                    class="auth" 
                    onClick={
                        () => {
                            setOpenLoginModal(true);
                            }
                        }>Login</button>
            
            </SignIn>
            {openLoginModal && <LogInModal closeLogInModal={setOpenLoginModal} />}
            {openSignUpModal && <SignUpModal closeSignUpModal={setOpenSignupModal}/>}
        </Container>
    )
}

export default Header

const Container = styled.div`
    height: 100px;
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075)!important;
`

const Logo = styled.div`
    display: inline;
    font-family: "Segoe UI";
    font-weight: 630;
    font-size: 3em;
    color: #1e90ff;
`
const NavBar = styled.div`
    display: inline-flex;
    margin-left: 50px;

    .link{
        background: white;
        border: none;
        color: inherit;
        font-family: "Segoe UI";
        font-size: 20px;
        height: 100px;
        margin-right: 50px;
        width: 100px;
    }

    .link:hover{
        background: #1e90ff;
        border: 2px #1e90ff;
        color: white;
    }
`
const SignIn = styled.div`
    display: inline-flex;
    float: right;
    height: 100px;
    margin: auto 20px;

    .auth{
        background: white;
        border: none;
        font-family: "Segoe UI";
        font-size: 20px;
        height: 100px;
        margin: auto 0px auto 20px;
        width: 100px;
    }

    .auth:hover, .auth:active{
        background: #1e90ff;
        color: white;
        border: none;
    }
`
