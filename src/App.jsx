import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { EmployeeDashboard } from './components/Dashboard/EmployeeDashboard'
import {AuthContext} from './context/AuthProvider'
  
function App() {
  
  const [user, setUser] = useState(null) 
  const [loggedInUserData,setLoggedInUserData]=useState(null) 

  const authData=useContext(AuthContext)
  // console.log(authData);//this will give the data of employee and admin
  // localStorage.clear()

  useEffect(()=>{
    const loggedInUser=localStorage.getItem('loggedInUser')
    // console.log(loggedInUser)
    if(loggedInUser){
      const userData=JSON.parse(loggedInUser) 
      console.log(userData)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  },[])
    

  const handleLogin=(email,password)=>{
    if(email=='admin@example.com' && password=='123'){
      setUser('admin')
      localStorage.setItem('loggedInUser',JSON.stringify({role:'admin'}))
    }else if(authData){
      const employee= authData.employees.find((e)=>e.email==email && e.password==password)
      if(employee){
        setUser('employee')
        setLoggedInUserData(employee)
        localStorage.setItem('loggedInUser',JSON.stringify({role:'employee', data:employee}))
      }
      
    }else{
      alert("invalid credentials")
    }
  }
  
   
  

  return (
    <>
     {!user ? <Login handleLogin={handleLogin}/> : ""}
     {user=='admin' ? <AdminDashboard/> : (user=='employee' ? <EmployeeDashboard data={loggedInUserData}/>: null)}
     {/* <EmployeeDashboard/> */}
     {/* <AdminDashboard/> */}
    </>
  )
}

export default App
