import axios from 'axios'
import React, { useState } from 'react'
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from 'react-router';


const Login = () => {
  const [formData, setFormData] = useState({
    username:"",
    password:""
  })
  const navigate = useNavigate()
  const handleSubmit = async (event)=> {
    event.preventDefault()
    try {
        const data = await axios.post("http://localhost:3000/auth/login", {
        username:formData.username,
        password:formData.password})
        toast.success("Berhasil login")
        localStorage.setItem("accessToken", data.data.accessToken)
        navigate("/")
    } catch(error) {
        toast.error(error.response.data.message)
        console.log(error)
    }
  }

  return (
    <div>
      <Toaster/>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>username: </label>
        <input type="text" id="username" onChange={(event) => {
            setFormData({
                ...formData,
                username: event.target.value
            })
        }}/>
        <br/>
        <label htmlFor='password'>password: </label>
        <input 
            type="password" 
            id="password"
            onChange={(event)=>{
                setFormData({
                    ...formData,
                    password:event.target.value
                })
            }}/> 
        <br/>
        <br/>
        <button type="submit" >Login</button>
      </form>
    </div>
  )
}

export default Login