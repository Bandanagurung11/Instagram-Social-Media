"use client";
import { usePathname } from "next/navigation";
import LeftFixed from "@/components/LeftFixed";

export default function SidebarWrapper() {
  const pathname = usePathname();
  const expandedPages = ["/inbox"];
  const NotExpandedPage = expandedPages.includes(pathname);

  return <LeftFixed NotExpand={NotExpandedPage} />;
}