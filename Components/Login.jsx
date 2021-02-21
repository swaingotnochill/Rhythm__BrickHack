import React, {useState} from "react";
import Form from "react-bootstrap/Form"
import {Button} from "react-bootstrap"
import "./Login.css"

export default function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function validateForm(){
        return username.length > 0 && password.length > 0;
    }

    function handleSubmit(event){
        event.preventDevelt();
    }

    return(
        <div className="Login">
            <Form onSubmit = {handleSubmit}>
                <Form.Group size = "lg" controlId = "username">
                    <Form.Lable>Usernmae</Form.Lable>
                    <Form.Control
                        autoFocus
                        type = "username"
                        value = {username}
                        onChange = {(e) => setUsername(e.target.value)}
                        />
                </Form.Group>
                <Form.Group size = "lg" controlId = "password">
                    <Form.Lable>Password</Form.Lable>
                    <Form.Control
                        type = "password"
                        value = {password}
                        onChange={(e) => setPassword(e.target.value)}
                        />
                </Form.Group>
                <Button block size = "lg" type disabled = {!validateForm()}>
                    Login
                </Button>
            </Form>
        </div>
    )
}