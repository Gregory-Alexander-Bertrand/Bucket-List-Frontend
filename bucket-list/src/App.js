import './App.css';
import {BrowserRouter as Redirect, Route, Router } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'
import Home from './Pages/Home'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import Create from './Pages/Create'
import Mylist from './Pages/Mylist'
import Navbar from './Components/Navbar'

function App() {
  const [user, setUser] = useState({})
  const [goals, setGoals] = useState({})

  return (
    <div className="App">
      <Navbar user={user}
      setUser={setUser}/>
      <Route 
      exact path="/"
      render={() => {
        return <Home />
      }}
      />
    
      <Route 
      path="/Signup"
      render={() => {
        if (user.id) {
          return <Redirect to="/Home" />
        } else {
          return <Signup setUser={setUser} />
        }
      }}
      />
      
      <Route 
      path="/Login"
      render={() => {
        if (user.id) {
          return <Redirect to="/Home" />
        } else {
          return <Login setUser={setUser} />
        }
      }}
      />
      <Route 
      path="/Create"
      render={() => {
        return <Create user={user}/>
      }}
      />
      <Route
      path="/Mylist"
      render={() => {
        return <Mylist />
      }}
      />
    </div>
  );
}

export default App;
