import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import Create from '../Pages/Create'
const Mylist = (props) => {
  const [goals, setGoals] = useState([])
  const getBucketList = (e) => {
    e.preventDefault()
    axios.get(`${process.env.REACT_APP_BACKEND_URL}/goal`).then((response) => {
      console.log(response)
    })
  }
    return (
        <div>
            <button onClick={getBucketList}>Button</button>
            <ul>
              {props.goals.map((goals) => {
                return (
                  <li key={goals.id}></li>
                )
              })}
            </ul>
        </div>
    )
}

export default Mylist
