import React, {Component, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {Link, useNavigate, } from 'react-router-dom'//useNavigate helps in navigating to another url/page
import {db, fire} from "../firebase";
import Header from "./Header2";
import { auth2,db2 } from "../firebase";
import {  ref, set ,push} from "firebase/database";
import 'bootstrap/dist/css/bootstrap.min.css';
import firebase from "firebase/compat";





class SelectChat extends React.Component {
    constructor(props) {

        super(props);

        this.state = {studentslist : []}
    }



    async componentDidMount() {




        firebase.database().ref("users").on("value", snapshot => {

            let studentlist = [];
            snapshot.forEach(snap => {
                // snap.val() is the dictionary with all your keys/values from the 'students-list' path
                studentlist.push(snap.val());
            });
            this.setState({ studentslist: studentlist });
        });


    }

    render(){

        return (
            <div className="MainDiv">
                <Header />
                <div class="jumbotron text-center bg-sky">
                    <h3>List Of Doctors</h3>
                </div>

                <div className="container">
                    <table id="example" class="display table">
                        <thead class="thead-dark">
                        <tr>

                            <th>Email</th>

                        </tr>
                        </thead>
                        <tbody>
                        {this.state.studentslist.map(data => {

                            return (
                                <tr>

                                    <td>


                                        <Link onClick={`/chat:`+data.email}>{data.email}</Link>
                                        </td>

                                </tr>

                            );

                        })}


                        </tbody>

                    </table>

                </div>
            </div>
        );
    }


}
export default SelectChat;