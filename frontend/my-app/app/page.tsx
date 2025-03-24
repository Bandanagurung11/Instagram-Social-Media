"use client";
import FeedSection from "@/components/FeedSection";
import Login from "@/components/Login";
import Stories from "@/components/Stories";
import Suggestions from "@/components/Suggestions";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function Page() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => !!localStorage.getItem("token")
  ); // Initialize from localStorage

  useEffect(() => {
    // Listen for changes in localStorage (optional, ensures real-time updates)
    const handleStorageChange = () => {
      setIsLoggedIn(!!localStorage.getItem("token"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
  };
  if (!isLoggedIn) {
    return <Login onLogin={handleLoginSuccess} />;
  }
  return (
    <div>
      <div className="lg:pl-60  min-h-screen lg:grid grid-cols-3 gap-12">
        <div className="space-y-6 pt-4 col-span-2">
          <Stories />
          <FeedSection />
          <Button
            onClick={() => {
              localStorage.removeItem("token");
              setIsLoggedIn(false);
            }}
          >
            Logout
          </Button>
        </div>
        <div>
          <Suggestions />
        </div>
      </div>
    </div>
  );
}
