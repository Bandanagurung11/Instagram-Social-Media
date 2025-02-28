import React from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Ellipsis } from "lucide-react";

export default function ThreeDotItems() {
    const items={
        name:["Report","Unfollow","Add to favourites","Go to Post", "Share to..", "Copy link", "Embed", "Anout this account", "Cancel" ]
        };
        
  return (
    <Dialog>
      <DialogTrigger>
         <Ellipsis className="cursor-pointer" />        
      </DialogTrigger>

      <DialogContent className="w-96">
        {
            items.name.map((item, index)=>(
                <div key={index} className="cursor-pointer">
                    <p className={`pb-2 text-center text-sm ${index === 0 ? "text-red-600 font-bold" : ""}  ${index === 1 ? "text-red-600 font-bold" : ""}`} >{item}</p>
                   <hr />
                </div>
            ))
        }
      </DialogContent>
    </Dialog>
  );
}
