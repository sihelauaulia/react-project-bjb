import React from 'react'
import { Link } from "react-router";

const Profile = () => {
  return (
    <>
    <div>Profile</div>
    <button>
        <Link to="/"> Halaman Utama </Link>
    </button>
    <button>
        <Link to="/RiwayatPendidikan"> Riwayat Pendidikan </Link>
    </button>
    <button>
        <Link to="/RiwayatPengalaman"> Riwayat Pengalaman </Link>
    </button>
    </>
  )
}

export default Profile