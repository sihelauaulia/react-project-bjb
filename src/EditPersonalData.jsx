import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';
import toast, { useToaster } from 'react-hot-toast';

const EditPersonalData = () => {
    let nav = useNavigate()
    let {id} = useParams();
    const [formData,setFromData]= useState({
        id: " ",
        name: " ",
        email: " "
    })

    useEffect(()=>{
        const fetchData = async () =>{
            try {
                const data = await axios.get("http://localhost:3000/personaldata/"+ id);
                console.log(data);
                setFromData(data.data);

            }catch (error){
                console.log (error)
            }
        }
        fetchData()
    },[id])

    const handleSubmit = (event) => {
        event.preventDefault()
        try {
            axios.put("http://localhost:3000/personaldata/" + id, {
                name: formData.name,
                email: formData.email
            })

            toast.success("berhasil ubah data");
            nav ("/PersonalData")
        } catch (error) {
            console.log(error);
            toast.error("Gagal ubah data");
        }
    }

  return (
    <>
    {!formData ?(
        <p> Data Sedang dimuat .... </p>
        ) : (
    <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name: </label>
        <input 
            type='text' 
            id='name' 
            value = {formData.name}
            onChange={(event)=>{
            setFromData({
                ...formData,
                name: event.target.value
            })
        }}/>
        
        <br/>
        <form onSubmit={handleSubmit}></form>
        <label htmlFor='email'> Email: </label>
        <input 
            type='email' 
            id='email' 
            value = {formData.email}
            onChange={(event)=>{
            setFromData({
                ...formData,
                email: event.target.value
            })
        }} />

        <br/>
        <button type='submit'>Submit</button>
        <br/>

    </form>
        )}
        </>
    )
}


export default EditPersonalData