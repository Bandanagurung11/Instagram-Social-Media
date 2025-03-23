import { Bookmark, Ellipsis, Heart, MessageCircle, Send } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Page() {
const reels={
 reel:["https://cdn.pixabay.com/video/2024/08/16/226795_tiny.mp4", "https://cdn.pixabay.com/video/2024/08/16/226795_tiny.mp4"]
}
  return (
    <div className="flex flex-col justify-center items-center space-y-4 py-4  ml-60">
      {
        reels.reel.map((video,index)=>(
          <div key={index} className=" flex gap-6 bg-gray-200">
          <video
             className="h-[500px] rounded-sm"
             src={video}
            //  src="https://cdn.pixabay.com/video/2024/08/16/226795_tiny.mp4"
             autoPlay
             loop
             controls
           ></video>
           <div className="pt-44 space-y-8">
            <div className="space-y-6">
               <Heart />
               <MessageCircle />
               <Send />
               <Bookmark />
             </div>
             <Ellipsis />
             <Image
               className="h-6 rounded-sm"
               src="https://images.unsplash.com/photo-1737042126375-10c79e59c55c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
               alt="profile"
               height={100}
               width={100}
             ></Image>
           </div>
          </div>
        ))
      }
     
    </div>
  );
}
