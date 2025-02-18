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
  const [username, setUsername] = useState<string>("");
  const [profilePicture, setProfilePicture] = useState<File | null>(null);
  const createUser = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if(!profilePicture){
        return;
      }
      const formData = new FormData()
      formData.append("username", username);
      formData.append("profilePicture", profilePicture);

      const response = await axios.post("https://instagram-jbna.onrender.com/users", formData);
      console.log(response);

      if (response) {
        setUsername("");
        setProfilePicture(null);
        toast({
          title: "user registered sucessfully"
        })
      }
      console.log(response.data, "response");
    } catch (error) {
      console.log("Something went wrong", error);
      toast({
        title : "user couldn&apos;t be register"
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
            Make changes to your profile here. Click save when you&apos;re done.
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
              onChange={(e:React.ChangeEvent<HTMLInputElement>) => setProfilePicture(e.target.files?.[0] || null)}
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
