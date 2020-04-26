import React, { useState } from "react"
import { Button, FormGroup, FormControl, FormLabel } from 'react-bootstrap';
// import "./Login.css";
// Wengel
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                    <FormLabel>email</FormLabel>
                    <FormControl
                        autoFocus
                        type="email"
                        value={email}
                        onChange = {(e => setEmail(e.target.value))}
                    />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <FormLabel>password</FormLabel>
                    <FormControl
                        type="password"
                        value={password}
                        onChange = {(e => setPassword(e.target.value))}
                    />
                </FormGroup>
                <Button block bsSize="large" disabled={!validateForm()} type="submit">
                    Login
                </Button>
            </form>
        </div>
    );
}
