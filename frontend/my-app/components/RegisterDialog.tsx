import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import axios from "axios";
import { useState } from "react";



export function RegisterDialog() {
  const [username, setUsername] = useState("");
  const [profilePicture, setProfilePicture] = useState("");
  const createUser = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:4000/users", {
        username: username,
        profilePicture: profilePicture,
      });
      console.log(response);

      if (response) {
        setUsername("");
        setProfilePicture("");
        toast({
          title: "user registered sucessfully"
        })
      }
      console.log(response.data, "response");
    } catch (error) {
      console.log("Something went wrong", error);
      toast({
        title : "user couldn't be register"
      })
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"sm"} variant="outline">
          Register
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Register here</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={createUser}  className="grid gap-4 py-4" >
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              userName
            </Label>
            <Input
              id="username"
              className="col-span-3"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="profilepicture" className="text-right">
              profilePicture
            </Label>
            <Input
              id="profilepicture"
              className="col-span-3"
              onChange={(e) => setProfilePicture(e.target.value)}
            />
          </div>
          <DialogFooter>
          <Button size={"sm"} type="submit"> 
            Create an Account
          </Button>
        </DialogFooter>
        </form>
         {/* button onclick hunx form chai submit hunx */}
        
      </DialogContent>
    </Dialog>
  );
}
