import { Button } from '@mui/material';
import React, { useState } from 'react'

export default function Login() {
const [role, setRole] = useState<string>("");

  return (
    <div>
        Login
        <input type='text' onChange={(e:any)=> setRole(e.target.value)}/>
        <Button onClick={()=> {localStorage.setItem('role', role)}}></Button>
    </div>
  )
}
