import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const DeleteButton = (props) => {
    const deleteGoal = (e) => {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/goal/${id}`).then((response) => {
            console.log(response)
            deleteGoal(response.data.goals)
        })
    }

    useEffect(() => {
        deleteGoal()
    }, [])
    return (
        <div>
            <button onClick={deleteGoal}>Delete</button>
        </div>
    )
}

export default DeleteButton
