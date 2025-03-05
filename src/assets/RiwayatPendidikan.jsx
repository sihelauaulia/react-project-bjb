import React from 'react'
import { Link } from "react-router";

const RiwayatPendidikan = () => {
  return (
    <>
    <div style={{textAlign:'left'}}>


    <h1>Riwayat Pendidikan</h1>
        <p>
            <b>Universitas Airlangga</b>
            <br/>
            S1 Matematika
        </p>
    </div>


     <button>
        <Link to="/"> Halaman Utama </Link>
    </button>
    <button>  
        <Link to="/profile"> Profile </Link>
    </button>
     <button>
        <Link to="/RiwayatPengalaman"> Riwayat Pengalaman </Link>
    </button>
    </>
  )
}

export default RiwayatPendidikan