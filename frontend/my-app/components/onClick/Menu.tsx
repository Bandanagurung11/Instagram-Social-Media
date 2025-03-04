import React from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Bookmark,
  MenuIcon,
  MessageSquareWarning,
  Settings,
  SquareActivity,
  Sun,
} from "lucide-react";

export default function Menu({ NotExpand }: { NotExpand: boolean }) {
  const items = [
    {
      icon: <Settings className="h-5 w-5" />,
      name: "Setting",
    },
    {
      icon: <SquareActivity className="h-5 w-5" />,
      name: "Your activity",
    },
    {
      icon: <Bookmark className="h-5 w-5" />,
      name: "Saved",
    },
    {
      icon: <Sun className="h-5 w-5" />,
      name: "Switch appearance",
    },
    {
      icon: <MessageSquareWarning className="h-5 w-5" />,
      name: "Report a problem",
    },
  ];
  return (
    <div>
      <Popover>
        <PopoverTrigger >
          <div className={`flex gap-4 items-center hover:bg-gray-100 cursor-pointer pl-2 py-2 mt-2 ${NotExpand ? "pr-2": "pr-32"} rounded-md`} >
            <MenuIcon className="h-8 w-8" />
            <p className={`${NotExpand? "hidden" : "block"}`}>More</p>
          </div>
        </PopoverTrigger>

        <PopoverContent className="absolute -left-28 bottom-14">
          <div className="px-1 py-6 space-y-1">
            {items.map((items, index) => (
              <div key={index} className="flex gap-2 items-center hover:bg-gray-200 rounded-md py-3 w-full cursor-pointer pl-2">
                <p>{items.icon}</p>
                <p className="text-sm opacity-80">{items.name}</p>
              </div>
            ))}
          </div>
          <p className="w-full h-1 bg-gray-200/50"></p>
          <div className="pl-1">
          <div className="flex gap-2 my-2 py-3 cursor-pointer pl-2 items-center hover:bg-gray-200 rounded-md">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={24}
              height={24}
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m20.742 8.181l-1.63.433a.5.5 0 0 1 0-.11a8 8 0 0 0-.795-1.872a5.67 5.67 0 0 0-3.079-2.465a8 8 0 0 0-2.112-.392a8.4 8.4 0 0 0-1.59 0a6.9 6.9 0 0 0-2.365.664a5.46 5.46 0 0 0-2.324 2.213a7.6 7.6 0 0 0-.805 2.093q-.221.878-.291 1.78q-.054.871 0 1.741a11.6 11.6 0 0 0 .462 3.018a7.2 7.2 0 0 0 1.007 2.083a5.37 5.37 0 0 0 2.505 1.922c.62.238 1.27.387 1.932.443a9.7 9.7 0 0 0 1.941 0a6 6 0 0 0 2.174-.584a4.76 4.76 0 0 0 1.921-1.65a3.36 3.36 0 0 0 .463-2.958a2.77 2.77 0 0 0-1.107-1.52l-.352-.25c0 .13 0 .24-.05.351c-.1.622-.309 1.22-.614 1.771a3.65 3.65 0 0 1-2.656 1.902a4.6 4.6 0 0 1-2.213-.111a3.5 3.5 0 0 1-1.54-.895a2.9 2.9 0 0 1-.835-1.781a3.02 3.02 0 0 1 1.389-2.948a4.6 4.6 0 0 1 1.63-.644a9.5 9.5 0 0 1 1.77-.12q.683.015 1.359.12h.08v-.06a2.9 2.9 0 0 0-.382-1.077a1.9 1.9 0 0 0-1.258-.885a3.2 3.2 0 0 0-1.871 0a2.16 2.16 0 0 0-1.097.815l-.05.14l-1.379-.955a.6.6 0 0 0 .07-.101a3.9 3.9 0 0 1 2.456-1.56a4.86 4.86 0 0 1 2.545.111a3.5 3.5 0 0 1 2.153 1.831c.253.499.42 1.036.493 1.59c0 .211.05.423.07.634v.08l.413.202a5.3 5.3 0 0 1 1.69 1.338a4.6 4.6 0 0 1 1.007 2.012c.082.44.109.89.08 1.338a5.2 5.2 0 0 1-1.288 3.13a6.8 6.8 0 0 1-3.732 2.243c-1.229.273-2.495.33-3.743.17a8.5 8.5 0 0 1-2.757-.804a7.04 7.04 0 0 1-2.807-2.485a9 9 0 0 1-1.137-2.576a13 13 0 0 1-.392-2.012A17 17 0 0 1 4 11.764c0-.574 0-1.158.1-1.741q.116-.989.363-1.952c.207-.821.526-1.61.946-2.345a7.04 7.04 0 0 1 4.024-3.25a9 9 0 0 1 1.851-.412a11.2 11.2 0 0 1 2.395 0c.94.102 1.857.353 2.716.745a7.26 7.26 0 0 1 3.11 2.636c.54.826.948 1.733 1.207 2.686q.007.03.03.05m-5.665 4.025h-.07A8 8 0 0 0 14 12.065a9 9 0 0 0-1.067 0a4.6 4.6 0 0 0-1.177.16a2 2 0 0 0-.925.544a1.31 1.31 0 0 0 .11 1.952c.226.179.486.309.765.382a3.2 3.2 0 0 0 1.278.06c.291-.036.574-.124.835-.26c.389-.235.692-.587.865-1.007c.225-.54.357-1.116.392-1.7z"
              ></path>
            </svg>
            <p>Threads</p>
          </div>
          </div>
          <p className="w-full h-1 bg-gray-200/50"></p>
          <div className="pl-1">
          <p className="text-sm my-2 py-4 pl-2 opacity-80 hover:bg-gray-200 cursor-pointer rounded-md">Switch accounts</p>
          </div>
          <p className="w-full h-1 bg-gray-100/50"></p>
          <div className="pl-1">
          <p className="text-sm mt-2 py-2 pl-2 opacity-80 hover:bg-gray-200 cursor-pointer rounded-md">Log out</p>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
}
