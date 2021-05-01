import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import Create from '../Pages/Create'
import AllGoals from '../Components/AllGoals'
const Mylist = (props) => {
  const [goals, setGoals] = useState([])
  const getBucketList = (e) => {
    e.preventDefault()
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/goal`).then((response) => {
      console.log(response.data.goals)
      setGoals(response.data.goals)
    
    })
  }
  // const getBucketList = async () => {
  //   try {
  //     const response = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/goal`)
  //     setGoals(response.data.results)
  //   } catch (error) {
  //     console.log(error)
  //   }
  // }
  // useEffect(() => {
  //   getBucketList()
  // }, [])
    return (
        <div>
          {/* <AllGoals goals={goals} /> */}
            <button onClick={getBucketList}>Button</button>
            <ul>
              {goals.map((goal) => {
                return (
                <li key={goal.id}>{goal.name}</li>
                )
              })}
            </ul>
        </div>
    )
}

export default Mylist
