import {
  Compass,
  Film,
  Heart,
  House,
  MessageCircleMore,
  Search,
  SquarePlus,
} from "lucide-react";
import Image from "next/image";
import React from "react";
import Menu from "./onClick/Menu";

export default function LeftFixed() {
  const items = [
    {
      icon: <House />,
      name: "Home",
    },
    {
      icon: <Search />,
      name: "Search",
    },
    {
      icon: <Compass />,
      name: "Explore",
    },
    {
      icon: <Film />,
      name: "Reel",
    },
    {
      icon: <MessageCircleMore />,
      name: "Messages",
    },
    {
      icon: <Heart />,
      name: "Notifications",
    }, 
    {
      icon: <SquarePlus />,
      name: "Create",
    },
    {
     icon:"https://plus.unsplash.com/premium_photo-1739903981694-0617b6ff3008?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      name: "Profile",
    },
  ];

  return (
    <div className="fixed h-screen hidden lg:block top-0 left-1 w-60 border-r border-r-gray-200 space-y-10 py-10 px-6">
      <p className="font-serif italic font-bold text-lg">Instagram</p>
      <div className="space-y-8">
      {items.map((item, index) => (
        <div key={index} className="flex gap-4 items-center">
          <p>
            {typeof item.icon === "string" ? (
              <Image className="h-6 w-6 rounded-full" src={item.icon} alt={item.name} height={100} width={100} />
            ) : (
              item.icon
            )}
          </p>
          <p >{item.name}</p>
        </div>
      ))}
      <Menu/>
      </div>
    </div>
  );
}
