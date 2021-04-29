import './App.css';
import { Redirect, Route } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'

function App() {
  const [user, setUser] = useState({})
  return (
    <div className="App">
      <Route 
      exact path="/"
      render={() => {
        return <Home />
      }}
      />
      <Route 
      path="/Signup"
      render={() => {
        return <Signup />
      }}
      />
      <Route
      path="/Login"
      render={() => {
        return <Login />
      }}
      />
    </div>
  );
}

export default App;
