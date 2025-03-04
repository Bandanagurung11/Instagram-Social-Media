"use client"
import FeedSection from "@/components/FeedSection";
import Stories from "@/components/Stories";
import Suggestions from "@/components/Suggestions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import axios from "axios";
import React, { useState } from "react";

export default function Page() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin=async()=>{
    try {
      const response = await axios.post("https://instagram-jbna.onrender.com/users/login",{
        username,
        password
      })
      console.log(response.data.jwtToken);
      localStorage.setItem("token", response.data.jwtToken);
    } catch (error) {
      console.log(error)
      
    }
  }

  return (
    <div>
      
      <div className="lg:pl-60  min-h-screen lg:grid grid-cols-3 gap-12">
        <div className="space-y-6 pt-4 col-span-2">
          <Stories />
          <FeedSection />
           {/* login section */}
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
          <Button type="submit" onClick={handleLogin}>submit</Button>
        </div>
        </div>
        <div><Suggestions /></div>
      </div>
    </div>
  );
}
