import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router";

function PersonalData() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [personalData, setPersonalData] = useState([]);
  const token = localStorage.getItem("accessToken")

  // ✅ Fetch data dari API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/PersonalData",{
            headers: {
                 Authorization: `Bearer ${token}`,
            },
           
        });
        setPersonalData(response.data);
      } catch (error) {
        console.log("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  // ✅ Fungsi Delete Data
  const handleDelete = async (itemId) => {
    const confirmDelete = window.confirm("Apakah Anda yakin ingin menghapus data ini?");
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/PersonalData/${itemId}`);
        alert("Data berhasil dihapus ❌");
        // ✅ Refresh state tanpa reload halaman
        setPersonalData(personalData.filter((item) => item.id !== itemId));
      } catch (error) {
        console.log("Error deleting data:", error);
      }
    }
  };

  return (
    <>
      <h1>Personal Data Page</h1>

      <br />
      <div>
        {!personalData.length ? (
          <p>Data sedang dimuat...</p>
        ) : (
          <>
            {personalData.map((item) => (
              <div key={item.id}>
                <span>
                  <Link to={`/PersonalData/${item.id}`}>{item.name}</Link>
                  <span> </span>
                  <button>
                    <Link to={`/PersonalData/edit/${item.id}`}>🖋️</Link>
                  </button>
                  <span> </span>
                  <button onClick={() => handleDelete(item.id)}>🗑️</button>
                </span>
              </div>
            ))}
            <br />
            <button>
              <Link to={"/PersonalData/tambah"}>Tambah Data</Link>
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default PersonalData;
