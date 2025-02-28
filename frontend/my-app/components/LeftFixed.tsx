import {
  Compass,
  Film,
  Heart,
  House,
  Menu,
  MessageCircleMore,
  Search,
  SquarePlus,
} from "lucide-react";
import React from "react";

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
      icon: <Menu />,
      name: "More",
    },
    {
      icon: <Menu />,
      name: "More",
    },
  ];

  return (
    <div className="fixed h-screen top-0 left-1 w-60 border-r border-r-gray-200 space-y-10 py-10 px-6">
      <p className="font-serif italic font-bold">Instagram</p>
      <div className="space-y-8">
        {items.map((item, index) => (
          <div key={index} className="flex gap-2 items-center">
            <p>{item.icon}</p>
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
