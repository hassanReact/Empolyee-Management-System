import React, { useContext, useEffect, useState } from 'react'
import Login from './components/auth/login'
import EmployeeDashboard from './components/dashboard/employeedashboard'
import AdminDashboard from './components/dashboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'
const App = () => {
  // useEffect(() => {
  //   setLocalStorage()
  //   getLocalStorage()
  // })
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null);  
  const authData = useContext(AuthContext);

  // useEffect(() => {
  //   if (authData) {
  //     const loggedInUser = localStorage.getItem('loggedInUser');
  //   }

  // }, [authData])
  
// localStorage.clear()

  const handleLogin= (email, password) => {
    if (email == 'admin@me.com' && password == '123') {
      setUser("admin")
      localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
    }else if(authData){
      const employee = authData.employeeData.find((e) => email == e.email && password == e.password)
      if(employee){
        setUser('empolyee')
        setLoggedInUserData(employee);
        localStorage.setItem('loggedInUser', JSON.stringify({role:'empolyee'}))
      }
    }
    else{
      alert("User not defined");
    }
  }

  

  
  return (
    <>
    {!user ? <Login handleLogin={handleLogin}/> : ''}
    {user == 'admin' ? <AdminDashboard/>: (user == 'empolyee' ? <EmployeeDashboard data={loggedInUserData} />: "")}
    
    </>
  )
}

export default App
