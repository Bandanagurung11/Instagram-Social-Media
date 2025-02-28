"use client";
import React from "react";
import Navbar from "@/components/Navbar";

import FeedSection from "@/components/FeedSection";
import StorySection from "@/components/StorySection";
import LeftFixed from "@/components/LeftFixed";
import Stories from "@/components/Stories";
import Suggestions from "@/components/Suggestions";

export default function page() {
  return (
    <div>
      <div className="pl-64  min-h-screen p-4 grid grid-cols-3 gap-8 ">
        {/* <Navbar heading = {name}  /> */}
        {/* <StorySection /> */}
        <div className="space-y-6 col-span-2">
          <Stories />
          <FeedSection />
        </div>
        <div>
          <Suggestions />
        </div>
      </div>
      <div>
        <LeftFixed />
      </div>
    </div>
  );
}
