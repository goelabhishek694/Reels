import React,{useState,useEffect,useContext} from 'react'
import {AuthContext} from "../Context/AuthProvider";
function Signup() {
    const[email,setEmail]=useState('');
    const[password,setPassword]=useState('');
    const[name,setName]=useState('');
    const[error,setError]=useState('');
    const[loading,setLoading]=useState(false);
    const{signup}=AuthContext.useContext
    const handleSignup= async (e)=>{
        e.preventDefault();
    }

    return (
        <div>
            <form onSubmit={handleSignup}>
                <div>
                    <label htmlFor=''>UserName</label>
                    <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}}></input>
                </div>
                <div>
                    <label htmlFor=''>Email</label>
                    <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}}></input>
                </div>
                <div>
                    <label htmlFor=''>Password</label>
                    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}></input>
                </div>
            </form>
        </div>
    )
}

export default Signup
