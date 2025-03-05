import { useContext, useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NewLearn from './NewLearn'
import toast, { Toaster } from 'react-hot-toast';
import Input from './assets/input'
import { Link } from "react-router";

function App() {
  const authContext = useContext(Auth)
  const [count, setCount] = useState(0)
  const [age, setAge] = useState(0)
  const [name, setName] = useState({
    firstName:"",
    lastName :"",
    age: 0
  })

  // const notify = (num) => toast('Nilai kamu adalalahhh ❤️: '+ num);

  // useEffect(() => {
  //   if (count % 3 == 0)
  //   notify (count)
  //   // alert ("kelipatan 10 ❤️")
  // },[count])

  // const showAlert =()=> {
  //   toast('Hi aku ' + name.firstName+' '+name.lastName+ ' umur ku ' +name.age + ' tahun👌');
  // }
   
  let A = 1

  const a=10
  const b = 20

  if (a>b){
    console.log ("a lebih besar dari b")
  } else if (a==b){
    console.log ("a sama dengan b")
  } else{
    console.log ("a lebih kecil dari b")
  }

  const condition = a>b ? "a lebih besar dari b" : "a lebih kecil dari b"


  // const a = ["Farhan","Adi","Dito"]

  // const name = a.map ((item) => `Halo ${item}`)
  // console.log(name)

  // const a =[1,2,3]
  // a[1]=9
  // console.log(a)

  // function greeting (nama){
  //   return "Hello" +nama
  // }

  // console.log(greeting("Aul"))


  // function greeting (nama){
  //   return 'Hello ${nama}'
  // }

  // console.log(greeting("Aul"))



  return (
    <>
    <Toaster />

      <div>
         {/* <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>  */}
        <a href="https://upload.wikimedia.org/wikipedia/id/thumb/4/41/Bank_BJB_logo.svg/1200px-Bank_BJB_logo.svg.png" target="_blank">
          <img src={"https://upload.wikimedia.org/wikipedia/id/thumb/4/41/Bank_BJB_logo.svg/1200px-Bank_BJB_logo.svg.png"} className="logo " alt="React logo" />
        </a>
      </div>
      {/* <h1>Hello Word!!</h1>
      <h1>Bank BJB</h1>
      <h1>ITDP BATCH III</h1>

      <NewLearn name={"Aulia"}  lastName ={" Sihelau"} />
      <NewLearn name={"Aul Baik banget"}/> */}
      <br />
      {/* <h1>{count}</h1> */}

     

       <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          +
        </button>

        <button onClick={() => setCount((count) => 0)}>
         reset
        </button>

        <button onClick={() => setCount((count) => count - 1)}>
         -
        </button> */}

        <br />


        {/* <input type="text" onChange={(event)=>{
          console.log (event.target.value)
          setName({
            ...name,
           firstName: event.target.value
          })
        }}/> */}

        <Input
          value ={name.firstName}
          onChange={(event)=> setName({...name,firstName: event.target.value})} 
          placeholder={"First Name"}
          />

          <Input
          value ={name.lastName}
          onChange={(event)=> setName({...name,lastName: event.target.value})} 
          placeholder={"Last Name"}
          />

          <Input
          value ={name.age}
          onChange={(event)=> setName({...name,age: event.target.value})} 
          placeholder={"Age"}
          />


        {/* <input type="text" onChange={(event)=>{
          console.log (event.target.value)
          setName({
            ...name,
           lastName: event.target.value
          })
        }}/> */}
        
        <br />

        <h6> {name.firstName +" " + name.lastName + " "+name.age}</h6>

        <br />
        <button onClick={()=> showAlert()}>OK</button> 
        <br />

          <button>  
            <Link to="/profile"> Profile </Link>
          </button>
          <button>
            <Link to="/RiwayatPendidikan"> Riwayat Pendidikan </Link>
          </button>
          <button>
            <Link to="/RiwayatPengalaman"> Riwayat Pengalaman </Link>
          </button>

          <button>
            <Link to="/PersonalData"> Personal Data </Link>
          </button>

        {/* <br />
        <input type="number" placeholder='umur' onChange={(event)=>{
          console.log (event.target.value)
          setAge(event.target.value)
        }}/>
        <br /><br /> */}



          

  

      </div>
    </>
  )
}

export default App
