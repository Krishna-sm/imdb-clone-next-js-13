"use client"
import {useEffect} from 'react';
const Error =({error,reset})=>{
    useEffect(()=>{
        console.log(error)
    },[])
    return(
        <div className="text-center">
        <h1>Something went Wrong</h1>
        <button onClick={()=>reset()} className="hover:text-amber-500">Try Again</button>
        </div>
    );
}
export default Error;