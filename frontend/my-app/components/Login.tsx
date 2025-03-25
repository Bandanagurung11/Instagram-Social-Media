import React, { useState } from "react";
import { Input } from "./ui/input";
import axios from "axios";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/hooks/use-toast";
import { Label } from "@radix-ui/react-label";

export default function Login({ onLogin }: { onLogin: () => void }) {
  const [usernamelogin, setUsernamelogin] = useState("");
  const [password, setPassword] = useState("");

  const [username, setUsername] = useState<string>("");
  const [passwordSignUp, setPasswordSignUp] = useState("");
  const [profilePicture, setProfilePicture] = useState<File | null>(null);


  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "https://instagram-jbna.onrender.com/users/login",
        {
          username:usernamelogin,
          password:password,
        }
      );
      console.log(response.data);
      // console.log(response.data.jwtToken, "this is token in homepage");
      localStorage.setItem("token", response.data.jwtToken);
      onLogin();
    } catch (error) {
      console.log(error);
    }
  };

 
  const createUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (!profilePicture) {
        return;
      }
      const formData = new FormData();
      formData.append("username", username);
      formData.append("profilePicture", profilePicture);
      formData.append("password", passwordSignUp);

      const response = await axios.post(
        "https://instagram-jbna.onrender.com/users",
        formData
      );
      console.log(response);

      if (response) {
        setUsername("");
        setProfilePicture(null);
        toast({
          title: "user registered sucessfully",
        });
      }
      console.log(response.data, "response");
    } catch (error) {
      console.log("Something went wrong", error);
      toast({
        title: "user couldn&apos;t be register",
      });
    }
  };

  return (
    <div className=" flex h-screen justify-center items-center p-4">
      <Tabs
        defaultValue="account"
        className="w-[400px] p-4 rounded-lg border border-gray-200"
      >
        <div className="flex justify-center">
          <TabsList>
            <TabsTrigger value="login">Login</TabsTrigger>
            <TabsTrigger value="signup">Signup</TabsTrigger>
          </TabsList>
        </div>

        {/* login */}
        <TabsContent value="login">
          <div className="space-y-4">
            <Input
              type="text"
              onChange={(e) => setUsernamelogin(e.target.value)}
              value={usernamelogin}
              placeholder="username"
            ></Input>
            <Input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              value={password}
            ></Input>
            <div className="flex justify-center">
              <Button type="submit" onClick={handleLogin}>
                submit
              </Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="signup">
          <form onSubmit={createUser} className="grid gap-4 py-4">
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
              <Label htmlFor="username" className="text-right">
                Password
              </Label>
              <Input
                type="password"
                value={passwordSignUp}
                className="col-span-3"
                onChange={(e) => setPasswordSignUp(e.target.value)}
              />
            </div>

            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="profilepicture" className="text-right">
                profilePicture
              </Label>
              <Input
                id="profilepicture"
                className="col-span-3"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                  setProfilePicture(e.target.files?.[0] || null)
                }
              />
            </div>
           
              <Button size={"sm"} type="submit">
                Create an Account
              </Button>
          </form>
        </TabsContent>
      </Tabs>
    </div>
  );
}
