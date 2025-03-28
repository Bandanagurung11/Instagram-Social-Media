"use client"
import { IPost } from '@/components/FeedSection';
import { useToast } from '@/hooks/use-toast';
import axios from 'axios';
import { Heart } from 'lucide-react';
import Image from 'next/image';
import React, { useEffect, useState } from 'react'

interface PageProps{
  params:{
    id:string;
  };
}

export default function Page({params}:PageProps) {
    const {toast} = useToast();
    const[singlePost, setSinglePost] = useState<IPost | null>(null);
    console.log(singlePost)

    console.log(params.id);
    const postId = params.id;
    // console.log(postId);

    const fetchSinglePost = async()=>{
        try {
            const response = await axios.get(`https://instagram-jbna.onrender.com/Posts/${postId}`);
            console.log(response);
            setSinglePost(response.data);
            // console.log(singlePost, "this is single post");
        } catch (error) {
            console.log("something went wrong", error)
            toast({
                title: " post couldn't be fetch",
            })
        }
    };
    
    useEffect(() => {
        fetchSinglePost();
      
    }, [postId]);
    
  return (

    <div>
        <div>
   { singlePost &&   <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-3xl">
        <div className="md:flex">
          <div className="md:shrink-0">
            <Image
              className="h-48 w-full object-cover md:h-full md:w-48"
              src={singlePost.image}
              alt={"img"}
              width={500}
              height={500}
            />
          </div>
          <div className="p-8 w-full">
            <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Post Details</div>
            <h1 className="block mt-1 text-lg leading-tight font-medium text-black">{singlePost.title}</h1>
            <div className="mt-4 flex items-center">
              <Heart className="h-5 w-5 text-red-500 mr-2" />
              <span className="text-gray-500">{singlePost.likeCount} likes</span>
            </div>
          </div>
        </div>
      </div>}
    </div>
    </div>


  )
}
