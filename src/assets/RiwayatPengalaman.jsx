import React from 'react'
import { Link } from "react-router";

const RiwayatPengalaman = () => {
  return (
    <>
    <div style={{textAlign:'left'}}>
    <h1>Riwayat Pengalaman</h1>
        <p>
            <b> Mentor Airlangga Mastermind 2024</b>
            <br/>
            Berperan sebagai mentor dalam program Airlangga Mastermind 2024, membantu mahasiswa dalam pengoptimalan sumber daya akademik dan profesional mereka. Serta memberikan panduan serta strategi dalam manajemen waktu, pengembangan keterampilan analisis data, serta persiapan karier.
            <br/>
            <br/>
            <b> Data Analyst- Lembaga Management Infaq (LMI) </b>
            <br/>

            
        </p>
    </div>
    
    <button>
        <Link to="/"> Halaman Utama </Link>
    </button>
    <button>  
        <Link to="/profile"> Profile </Link>
    </button>
    <button>
        <Link to="/RiwayatPendidikan"> Riwayat Pedidikan </Link>
    </button>
    </>
  )
}

export default RiwayatPengalaman