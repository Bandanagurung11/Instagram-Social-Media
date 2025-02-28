"use client"

import { useRef } from "react"
import { ChevronDown, ChevronRight, Heart, MessageCircleMore } from "lucide-react"
import Image from "next/image"

export default function Stories() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 200,
        behavior: "smooth",
      })
    }
  }

  // Sample story data
  const stories = [
    { id: 1, username: "saritaguru...", image: "https://images.unsplash.com/photo-1740124659051-71da6ea354e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=60&width=60" },
    { id: 2, username: "sahi.0_0", image: "https://images.unsplash.com/photo-1740124659051-71da6ea354e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=60&width=60" },
    { id: 3, username: "ig_aakash...", image: "https://images.unsplash.com/photo-1740124659051-71da6ea354e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=60&width=60" },
    { id: 4, username: "sendenroo...", image: "https://images.unsplash.com/photo-1740124659051-71da6ea354e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=60&width=60" },
    { id: 5, username: "jenniferwi...", image: "https://images.unsplash.com/photo-1740124659051-71da6ea354e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=60&width=60" },
    { id: 6, username: "jia.seed", image: "https://images.unsplash.com/photo-1740124659051-71da6ea354e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=60&width=60" },
    { id: 7, username: "dhixangxa", image: "https://images.unsplash.com/photo-1740124659051-71da6ea354e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=60&width=60" },
    { id: 8, username: "kiaraaliaad...", image: "https://images.unsplash.com/photo-1740124659051-71da6ea354e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=60&width=60" },
    { id: 9, username: "user123", image: "https://images.unsplash.com/photo-1740124659051-71da6ea354e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=60&width=60" },
    { id: 10, username: "user456", image: "https://images.unsplash.com/photo-1740124659051-71da6ea354e0?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?height=60&width=60" },
  ]

  return (
    <div>
      <div className="flex lg:hidden justify-between items-center pb-6 p-4">
        <div className="flex items-center">
          <p className="font-bold font-serif text-lg">Instagram</p>
          <ChevronDown className="h-45 w-5" />
        </div>
        <div className="flex gap-4 items-center">
        <Heart className="h-7 w-7" />
        <MessageCircleMore className="h-7 w-7" />
        </div>
      </div>
      <div className="relative pl-4 lg:pl-0">
        {/* Stories container */}
        <div
          ref={scrollContainerRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {stories.map((story) => (
            <div key={story.id} className="flex flex-col items-center space-y-1 flex-shrink-0">
              <div className="story-border">
                <div className="story-image-container">
                  <Image
                    src={story.image || "/placeholder.svg"}
                    alt={`${story.username}'s story`}
                    className="w-16 h-16 rounded-full object-cover border-2 border-white"
                    height={100}
                    width={100}
                  />
                </div>
              </div>
              <span className="text-xs text-center w-16 truncate">{story.username}</span>
            </div>
          ))}
        </div>

        {/* Scroll button */}
        <button
          onClick={scrollRight}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white rounded-full shadow-md p-1 z-10"
          aria-label="See more stories"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  )
}

