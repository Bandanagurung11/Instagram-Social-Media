import Stories from "@/components/Stories";
import {
  ChevronDown,
  Compass,
  Dot,
  Film,
  Heart,
  House,
  Instagram,
  Menu,
  MessageCircleMore,
  Search,
  SquarePen,
  SquarePlus,
} from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Page() {
  const friends = [
    {
      image:
        "https://images.unsplash.com/photo-1735093661171-22af5a2ff4c6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullname: "jasmine",
      lastmessage: "k x halkhabar",
    },
    {
      image:
        "https://images.unsplash.com/photo-1735093661171-22af5a2ff4c6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullname: "jasmine",
      lastmessage: "k x halkhabar",
    },
    {
      image:
        "https://images.unsplash.com/photo-1735093661171-22af5a2ff4c6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullname: "jasmine",
      lastmessage: "k x halkhabar",
    },
    {
      image:
        "https://images.unsplash.com/photo-1735093661171-22af5a2ff4c6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullname: "jasmine",
      lastmessage: "k x halkhabar",
    },
    {
      image:
        "https://images.unsplash.com/photo-1735093661171-22af5a2ff4c6?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      fullname: "jasmine",
      lastmessage: "k x halkhabar",
    },
  ];
  return (
    <div className=" py-8 lg:ml-16 lg:grid grid-cols-3">
      <div className="space-y-6 col-span-1">
        <div className="px-6">
          <div className="flex justify-between items-center">
            <div className="flex gap-1 items-center">
              <p className="font-bold">yeeeeeeyib</p>
              <ChevronDown className="h-4 w-4" />
            </div>
            <SquarePen />
          </div>
        </div>
        <Stories />
        <div className="flex justify-between px-6 items-center">
          <p className="font-bold">Message</p>
          <p className="opacity-60">Request</p>
        </div>
        <div className=" space-y-4">
          {friends.map((friend, index) => (
            <div key={index}  className="flex px-6 cursor-pointer py-2 gap-2 items-center hover:bg-gray-200">
              <Image
                className="h-14 w-14 rounded-full"
                src={friend.image}
                alt="friend"
                height={100}
                width={100}
              ></Image>

              <div>
                <p className="text-sm">{friend.fullname} </p>

                <p className="text-sm opacity-60">{friend.lastmessage} . 13h</p>
              </div>
            </div>
          ))}
        </div>
      </div>


      <div className=" place-items-center">
        Lorem ipsum dolor sit amet.

      </div>
    </div>
  );
}
