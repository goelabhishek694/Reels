import React,{useState,useEffect,useContext}from 'react'
import {auth} from "../firebase"
const AuthContext=React.createContext();

function AuthProvider({children}) {

    const[currentUser,setCurrentUser]=useState('');
    const[loading,setLoading]=useState






    return (
        <div>
            
        </div>
    )
}

export default AuthProvider

