import firebase from "../firebase";
import React from 'react';
import styled from 'styled-components'
import {Link, useNavigate} from 'react-router-dom'

//useNavigate helps in navigating to another url/page


var myName = prompt("Enter Your Name");

function sendMessage(){
    var message = document.getElementById("message").value;
    firebase.database().ref("messages").push().set({
        "sender": myName,
        "message": message
    })
    return false;
}
firebase.database().ref("messages").on("child_added", function (snapshot){

    var html = "";
    html +="<li id='message-"+ snapshot.key+"'>";
    if(snapshot.val().sender == myName){
        html += "<button data-id='"+ snapshot.key +"' onclick='deleteMessage(this);'>";
        html += "Delete"
        html += "</button>";
    }
    html += snapshot.val().sender + ": " +snapshot.val.message;
    html += "</li";
    document.getElementById("messages").innerHTML += html;

})
function deleteMessage(self){
    var messageid = self.getAttribute("data-id");
    firebase.database().ref("messages").child(messageid).remove();
}
firebase.database().ref("messages").on("child_removed",function (snapshot){

    document.getElementById("message-"+ snapshot.key).innerHTML = "This message has been removed";
})
function UI(){
    return (
        <Container>
            {/* this is how you use images that are in the public folder */}
            {/* <img src="images/MS_login_UI.jpeg" alt="" /> */}
            <ChatContainer>
                <h1>Send Messages</h1>
                <form onSubmit={sendMessage()}>
                    <input id="message" placeholder="Enter Your Message" autoComplete="off"></input>
                    <input type="submit"></input>


                </form>
                <ul id={"messages"}></ul>
            </ChatContainer>

        </Container>
    )
}

export default UI

const Container = styled.div`
    /* border: 1px solid black; */
    height: auto;
    width:  auto;
    padding: 10px;
    background-image: url("images/bg_img.svg");
    background-repeat: no-repeat;
    background-size: cover;    
`
const ChatContainer = styled.div`
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