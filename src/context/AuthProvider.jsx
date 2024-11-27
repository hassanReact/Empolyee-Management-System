import React, { createContext, useEffect, useState } from 'react'
import {setLocalStorage, getLocalStorage} from '../utils/localStorage'
export const AuthContext = createContext()

const AuthProvider = ({children}) => {


    const [userData, setUserData] = useState(null);

        useEffect(()=>{
            setLocalStorage();
           const {employeeData, adminData} =  getLocalStorage()
           setUserData({employeeData,adminData});
        }, [])
    return (
    <div>
        <AuthContext.Provider  value={userData}>
        {children}
        </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
