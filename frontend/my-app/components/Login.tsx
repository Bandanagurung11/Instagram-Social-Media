
import React, { useState } from 'react'
import { Input } from './ui/input'
import axios from 'axios';
import { Button } from './ui/button';

export default function Login({onLogin}:{onLogin:()=>void}) {
     const [username, setUsername] = useState("");
      const [password, setPassword] = useState("");
    
      const handleLogin=async()=>{
        try {
          const response = await axios.post("https://instagram-jbna.onrender.com/users/login",{
            username,
            password
          })
          console.log(response.data) 
          // console.log(response.data.jwtToken, "this is token in homepage");
          localStorage.setItem("token", response.data.jwtToken);
          onLogin();
        } catch (error) {
          console.log(error)
          
        }
      }
    
  return (
    <div className="space-y-4">
          <Input
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
            placeholder="username"
          ></Input>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="password"
            value={password}
          ></Input>
         <div className='flex justify-center'>
         <Button type="submit" onClick={handleLogin}>submit</Button>
         </div>
        </div>
  )
}
