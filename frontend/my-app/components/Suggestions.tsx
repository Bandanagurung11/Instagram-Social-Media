import Image from "next/image";
import React from "react";

export default function Suggestions() {
  const suggestions = [
    {
      image:
        "https://images.unsplash.com/photo-1740428639827-79acb8f07709?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      username: "jennie",
      fullname: "bandana swains",
      text: "Follow",
    },
    {
      image:
        "https://images.unsplash.com/photo-1740428639827-79acb8f07709?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      username: "jennie",
      fullname: "bandana swains",
      text: "Follow",
    },
    {
      image:
        "https://images.unsplash.com/photo-1740428639827-79acb8f07709?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      username: "jennie",
      fullname: "bandana swains",
      text: "Follow",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1740595153762-b80edc34e029?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      username: "jennie",
      fullname: "bandana swains",
      text: "Follow",
    },
    {
      image:
        "https://plus.unsplash.com/premium_photo-1740595153762-b80edc34e029?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      username: "jennie",
      fullname: "bandana swains",
      text: "Follow",
    },
  ];
  return (
    <div className="hidden lg:block space-y-6 py-10 px-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-2 items-center">
          <div className="relative w-12 h-12 rounded-full">
            <Image
              className="w-12 h-12 object-cover flex justify-center rounded-full"
              src="https://images.unsplash.com/photo-1740564014446-f07ea2da269c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="profileimg"
              height={100}
              width={100}
            ></Image>
          </div>
          <div className="text-sm">
            <p className="font-bold">yeeeeeeyib</p>
            <p className="opacity-60">Bandana Gurung</p>
          </div>
        </div>
        <p className="text-blue-600 text-sm">Switch</p>
      </div>
      <div className="flex items-center justify-between text-sm">
        <p className="opacity-60">Suggested for you</p>
        <p className="font-bold">See All</p>
      </div>
      <div>
        <div className=" space-y-4">
          {suggestions.map((each, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex gap-2 items-center">
                <div className="relative w-12 h-12 rounded-full">
                  <Image
                    className="w-12 h-12 object-cover flex justify-center rounded-full"
                    src={each.image}
                    alt="profileimg"
                    height={100}
                    width={100}
                  ></Image>
                </div>
                <div className="text-sm">
                  <p className="font-bold">{each.username} </p>
                  <p className="opacity-60">Followed by {each.fullname} </p>
                </div>
              </div>
              <p className="text-blue-600 text-sm">{each.text}</p>
            </div>
          ))}
        </div>
        <div className="py-12 space-y-2 opacity-40 text-xs">
          <div>
            <p>About.Help.Press.API.Jobs.Privacy.Terms</p>
            <p>Locations.Language.Meta.Verified</p>
          </div>
          <p>© 2025 Instagram from Meta</p>
        </div>
      </div>
    </div>
  );
}
