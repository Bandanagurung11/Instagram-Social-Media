import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export default function Menu() {
  return (
    <div>
      <Dialog>
        <DialogTrigger>
          <div className="flex gap-2">
            <Menu />
            <p>More</p>
          </div>
        </DialogTrigger>
        <DialogContent></DialogContent>
      </Dialog>
    </div>
  );
}
