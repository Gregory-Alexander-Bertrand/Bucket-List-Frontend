import React from 'react'
import {Link, Redirect} from 'react-router-dom'
import { useState } from 'react'

const Navbar = (props) => {
    return (
        <header>
        <nav>
            {/* <Link to="/">Home</Link>
            <Link to="/Signup">Sign up</Link>
            <Link to="Login">Login</Link>
            <Link to="/Create">Create Bucket List</Link> */}
            {props.user.id ?
            <>
            <Link to="/">Home</Link>
            <Link to="/Mylist">My List</Link>
            <Link to="/Create">Create Bucket List</Link>
            <span onClick={() => {
                localStorage.removeItem('userId')
                props.setUser({})
            }}>
                Log Out
            </span>
            </>
            :
            <>
            <Link to="/">Home</Link>
            <Link to="/Signup">Signup</Link>
            <Link to="/Login">Login</Link>
            </>
            }
        </nav>
        </header>
    )
}

export default Navbar
