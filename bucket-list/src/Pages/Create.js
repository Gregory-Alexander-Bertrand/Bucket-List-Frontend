import React from 'react'
import { useState } from 'react'
import axios from 'axios'
const Create = (props) => {
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [date, setDate] = useState('')
    const [description, setDescription] = useState('')

    const submitForm = (e) => {
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/goal`, {name, location, date, description},
        {headers:{Authorization: props.user.id}}).then((response) => {
            console.log(response)
           
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
                       <label htmlFor="location">Location:</label>
                       <input value={location} onChange={(e) => setLocation(e.target.value)} />
                   </div>
                   <div>
                       <label htmlFor="date">Date:</label>
                       <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
                   </div>
                   <div>
                       <label htmlFor="description">Description:</label>
                       <input value={description} onChange={(e) => setDescription(e.target.value)} />
                   </div>
                   <div>
                       <input type="submit" value="Create List" />
                   </div>
               </form>
           </div>
           <div>
            <h1>name: {name}</h1>
            <h1>location: {location}</h1>
            <h1>Date: {date}</h1>
            <h1>Description: {description}</h1>
           </div>
        </div>
    )
}

export default Create
