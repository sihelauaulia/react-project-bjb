import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

const TambahPersonalData = () => {
    let nav = useNavigate();
    const [formData, setFromData] = useState({
        name:"",
        email:""
    })

    const handleSubmit = (event) =>{
        event.preventDefault ()
        try {
            axios.post("http://localhost:3000/PersonalData", {
                name: formData.name,
                email: formData.email
            })
            alert("Data berhasil diinput ✅");
            nav ("/PersonalData")
        }catch (error){
            console.log(error)
        }

    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name: </label>
        <input 
            type='text' 
            id='name' 
            onChange={(event)=>{
            setFromData({
                ...formData,
                name: event.target.value,
            })
        }}/>
        
        <br/>
        <label htmlFor='email'> Email: </label>
        <input 
            type='email' 
            id='email' 
            onChange={(event)=>{
            setFromData({
                ...formData,
                email: event.target.value,
            })
        }} />

        <br/>
        <button type='submit'>Submit</button>
        <br/>

    </form>
    </>
  )
}

export default TambahPersonalData