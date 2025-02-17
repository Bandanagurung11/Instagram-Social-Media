"use client"
import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function StorySection() {
  const [stories, setStories] = useState([]);

  const fetchStories = async () => {
    try {
      const receivedStories = await axios.get("http://localhost:4000/users");
      console.log(receivedStories.data);
      setStories(receivedStories.data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  useEffect(() => {
    fetchStories();
  }, []);

  // const stories = [
  //   {
  //     username: "bandana",
  //     image:
  //       "https://images.unsplash.com/photo-1611262588024-d12430b98920?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RvcnklMjBpbnN0YWdyYW18ZW58MHx8MHx8fDA%3D ",
  //   },
  //   {
  //     username: "monika",
  //     image:
  //       "https://images.unsplash.com/photo-1611262588024-d12430b98920?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RvcnklMjBpbnN0YWdyYW18ZW58MHx8MHx8fDA%3D ",
  //   },
  //   {
  //     username: "ram",
  //     image:
  //       "https://images.unsplash.com/photo-1611262588024-d12430b98920?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RvcnklMjBpbnN0YWdyYW18ZW58MHx8MHx8fDA%3D ",
  //   },
  //   {
  //       username: "sita",
  //       image:
  //         "https://images.unsplash.com/photo-1611262588024-d12430b98920?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RvcnklMjBpbnN0YWdyYW18ZW58MHx8MHx8fDA%3D ",
  //     },
  //     {
  //       username: "hari",
  //       image:
  //         "https://images.unsplash.com/photo-1611262588024-d12430b98920?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RvcnklMjBpbnN0YWdyYW18ZW58MHx8MHx8fDA%3D ",
  //     },
    
  // ];
  return (

    <div className="grid grid-cols-5 gap-4">
      {stories?.map((story, index) => (
        <div
          key={index}
          className="h-16 w-16 border border-purple-700 bg-gray-200 rounded-full flex items-center justify-center overflow-hidden" 
        >
          <Image className="h-16 w-16 object-cover" src={story.profilePicture} alt="thisisimage" height={100} width={100}></Image>
        </div>
      ))}
    </div>
  );
}
