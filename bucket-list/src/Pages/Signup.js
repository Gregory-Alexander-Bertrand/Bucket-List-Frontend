import React from 'react'
import { useState } from 'react'
import axios from 'axios'

const Signup = (props) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitForm = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/user`, {name, email, password}).then((response) => {
            console.log(response)
            localStorage.setItem('userId', response.data.user.id)
            props.setUser(response.data.user)
        })
    }
    return (
        <div>
            <div>
                <form onSubmit={submitForm}>
                    <div>
                        <label htmlFor="name">Name:</label>
                        <input value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="email">Email:</label>
                        <input value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password">Password:</label>
                        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <input type="submit" value="sign up" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Signup