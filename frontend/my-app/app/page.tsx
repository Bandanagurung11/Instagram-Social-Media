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
    <div className="pt-2 lg:pt-6">
      <div className="lg:pl-64  min-h-screen lg:grid grid-cols-3 gap-12 ">
        {/* <Navbar heading = {name}  /> */}
        {/* <StorySection /> */}
        <div className="space-y-6 pt-2 col-span-2">
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
