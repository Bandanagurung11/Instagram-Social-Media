"use client";
import FeedSection from "@/components/FeedSection";
import Login from "@/components/Login";
import Stories from "@/components/Stories";
import Suggestions from "@/components/Suggestions";

export default function Page() {
  return (
    <div>
      <Login />

      <div className="lg:pl-60  min-h-screen lg:grid grid-cols-3 gap-12">
        <div className="space-y-6 pt-4 col-span-2">
          <Stories />
          <FeedSection />
        </div>
        <div>
          <Suggestions />
        </div>
      </div>
    </div>
  );
}
