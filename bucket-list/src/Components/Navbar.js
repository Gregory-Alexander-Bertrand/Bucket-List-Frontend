import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/Signup">Sign up</Link>
            <Link to="Login">Login</Link>
            <Link to="/Create">Create Bucket List</Link>
        </nav>
    )
}

export default Navbar
