import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from "react-router";
import App from './App.jsx'
import Profile from './assets/Profile.jsx';
import RiwayatPendidikan from './assets/RiwayatPendidikan.jsx';
import RiwayatPengalaman from './assets/RiwayatPengalaman.jsx';
import PersonalData from './assets/PersonalData.jsx';
import DetailPersonalData from './assets/DetailPersonalData.jsx';
import TambahPersonalData from './TambahPersonalData.jsx';
import EditPersonalData from './EditPersonalData.jsx';
import { Toaster } from 'react-hot-toast';
import Login from './Login.jsx';
import { AuthProvider } from './context/AuthContext.jsx';
import axios from 'axios';


const token = localStorage.getItem("accessToken")
if (token){
  axios.defaults.headers["Authorization"] = `Bearer ${token}`
}
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <BrowserRouter>

    <Toaster/>

    <Routes>
      <Route path="/" element={<App />} />

      <Route path= "/login" element={<Login/>}/>

      <Route path="/profile" element={<Profile />} />

      <Route path="/RiwayatPendidikan" element={<RiwayatPendidikan />} />

      <Route path="/RiwayatPengalaman" element={<RiwayatPengalaman/>} />

      <Route path="/PersonalData" element={<PersonalData/>} />

      <Route path= "/PersonalData/:id" element={<DetailPersonalData/>}/>

      <Route path= "/PersonalData/tambah" element={<TambahPersonalData/>}/>

      <Route path= "/PersonalData/edit/:id" element={<EditPersonalData/>}/>

      

    </Routes>
  </BrowserRouter>
  </AuthProvider>
  </StrictMode>,
)
