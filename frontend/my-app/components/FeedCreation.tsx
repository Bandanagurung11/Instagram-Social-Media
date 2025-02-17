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
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import { Loader } from "lucide-react";
// import { Router } from "next/router";
import { useState } from "react";
// import { useRouter } from "next/navigation"; 

export function FeedCreation() {
    // const router = useRouter()

    const {toast} = useToast();
  const [title, setTitle] = useState("");
  const [image, setImage] = useState<File | null>();

  const [loading, setloading] = useState(false);
  console.log(loading);

  const createPost = async (e) => {
    e.preventDefault();
    if(!image){
      return;
    }

    setloading(true);
    const formData= new FormData();
    formData.append("title", title);
    formData.append("image", image);
    try {
      const response = await axios.post("http://localhost:4000/Posts", formData);

      if (response) {
        setloading(false);
        setTitle("");
        setImage(null);
        
        toast({
            title : "post creation success"
        })
        // router.push("/FeedSection"); it's use for another page redirecting not components so not useful

      }

      console.log(response.data, "response");
    } catch (error) {
      console.log("Something went wrong", error);
      toast({
        title : "post creation failed"
      })
      setloading(false);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size={"sm"} variant="outline">
          create post
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>create post here  {loading ===true && <Loader className=" animate-spin" /> } </DialogTitle>
          <DialogDescription>
            create post here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={createPost}  className="grid gap-4 py-4" >
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="Title" className="text-right">
              Title
            </Label>
            <Input
              id="Title"
              value={title}
              className="col-span-3"
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="image" className="text-right">
              image
            </Label>
            <Input
            type="file"
              id="image"
              className="col-span-3"
              // value={image} for string only not for number
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>
          <DialogFooter>
          <Button size={"sm"} type="submit"> 
            post
          </Button>
        </DialogFooter>
        </form>
         {/* button onclick hunx form chai submit hunx */}
        
      </DialogContent>
    </Dialog>
  );
}
