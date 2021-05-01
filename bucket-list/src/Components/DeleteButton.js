import axios from 'axios'
import React from 'react'
import { useState, useEffect } from 'react'

const DeleteButton = (props) => {
    const deleteGoal = (e) => {
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/goal/${props.id}`).then((response) => {
            deleteGoal(response.data.goals)
        })
    }

    useEffect(() => {
        deleteGoal()
    },)
    return (
        <div>
            <button onClick={deleteGoal(props.id)}>Delete</button>
        </div>
    )
}

export default DeleteButton
