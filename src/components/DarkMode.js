"use client"
import React, { useEffect, useState } from 'react'
import {BsMoonStarsFill} from 'react-icons/bs';
import {MdLightMode} from 'react-icons/md';
import { useTheme } from 'next-themes'
const DarkMode = () => {
    const [mount,setMount] = useState(false);

    const {theme, setTheme,systemTheme} = useTheme();
    const curruntTheme = theme==='system' ? systemTheme:theme
    useEffect(()=>{
        setMount(true);
    },[])
  return (
    <>
    {mount && curruntTheme==="dark" ? <MdLightMode
    onClick={()=>setTheme("light")}
    className="text-xl cursor-pointer hover:text-amber-500"
    /> : <BsMoonStarsFill
    onClick={()=>setTheme("dark")}
    className="text-xl cursor-pointer hover:text-amber-500"
    />}
    </>
  )
}

export default DarkMode