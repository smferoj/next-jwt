'use client'
import React from 'react'
import { useRouter } from 'next/navigation';
const DashboardPage = () => {
  const router = useRouter();
  const logOut=async()=>{
   const res = await fetch('/api/login');
   const json = await res.json();
   if(json['status']===true){
     router.replace("/")
   }
  }
  return (
    <div>
  <h1>DashboardPage</h1>
    <button onClick={logOut}> Logout</button>
    </div>
  
  )
}

export default DashboardPage