import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
const Login = (props) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    

    const submitForm = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/user/login`, {email, password}).then((response) => {
            console.log(response)
            localStorage.setItem('userId', response.data.userId)
            props.setUser(response.data.user)
        })
    }

    // useEffect(() => {
    //     const loggedInUser = localStorage.getItem('userId');
    //     if (loggedInUser) {
    //         const foundUser = JSON.parse(loggedInUser)
    //         props.setUser(foundUser);
    //     }
    // }, []);
    return (
        <div>
            <div>
                <form onSubmit={submitForm}>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <input type="submit" value="Login" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Login
