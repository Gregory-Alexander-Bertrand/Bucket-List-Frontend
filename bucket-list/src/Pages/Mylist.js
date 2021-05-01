import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { Link } from 'react'
import axios from 'axios'
import Create from '../Pages/Create'
import DeleteButton from '../Components/DeleteButton'
const Mylist = (props) => {
  const [goals, setGoals] = useState([])
  const getBucketList = (e) => {
    e.preventDefault()
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/goal`).then((response) => {
      console.log(response.data.goals)
      setGoals(response.data.goals)
    
    })
  }
  
    return (
        <div>
            <button onClick={getBucketList}>Button</button>
            {/* <ul> */}
              {goals.map((goal) => {
                return (
                // <li key={goal.id}>{goal.name}</li>
                <div>
                <h1 key={goal.id}>{goal.name}</h1>
                <h2>{goal.location}</h2>
                <h3>{goal.date}</h3>
                <h4>{goal.description}</h4>
                <DeleteButton />
                </div>
                )
              })}
            {/* </ul> */}
        </div>
    )
}

export default Mylist
