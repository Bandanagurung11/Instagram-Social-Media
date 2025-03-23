"use client";
import { useToast } from "@/hooks/use-toast";
import axios from "axios";
import {
  Bookmark,
  Dot,
  EllipsisVertical,
  Heart,
  MessageCircleMore,
  MoreHorizontal,
  Send,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import ThreeDotItems from "./onClick/ThreeDotItems";

export interface IPost {
  _id: string;
  image: string;
  title: string;
  likeCount: number;
  comments: [
    {
      commentMessage: string;
    }
  ];
}

export default function FeedSection() {
  const { toast } = useToast();
  const [posts, setPosts] = useState<IPost[] | null>(null);

  const fetchPosts = async () => {
    try {
      const mytoken = localStorage.getItem("token");
      console.log(mytoken, "feedsectiontoken")
      const receivedPosts = await axios.get(
        "https://instagram-jbna.onrender.com/Posts",
        {
          headers:{
            Authorization:`Bearer ${mytoken}`,
          }
        }
      );
      console.log(receivedPosts.data);
      setPosts(receivedPosts.data);
    } catch (error) {
      console.log("Something went wrong", error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  // const handleDeletePost = async (_id: string) => {
  //   try {
  //     // run delete function backend ko
  //     const response = await axios.delete(
  //       `https://instagram-jbna.onrender.com/Posts/${_id}`
  //     );
  //     console.log(response);
  //     toast({
  //       title: "Post Deleted",
  //       description: "Friday, February 10, 2023 at 5:57 PM",
  //     });
  //     fetchPosts();
  //     // window.location.reload(); this is tradtional way not use much though
  //   } catch (error) {
  //     console.log("Delete Failed", error);
  //     toast({
  //       title: "Post deletion failed",
  //     });
  //   }
  // };

  const handleLikePost = async (_id: string) => {
    try {
      const response = await axios.patch(
        `https://instagram-jbna.onrender.com/Posts/${_id}`,
        {
          $inc: { likeCount: 1 },
        }
      );
      console.log("this is response", response.data);
    } catch (error) {
      console.log("something went wrong", error);
      toast({
        title: "liked failed",
      });
    }
    fetchPosts();
  };

  //  For Comment------------------------->
  const [commentText, setCommentText] = useState<string>("");
  console.log(commentText, "this is comment text");

  const handlePostAComment = async (
    e: React.FormEvent<HTMLFormElement>,
    _id: string
  ) => {
    e.preventDefault();

    const respose = await axios.patch(
      `https://instagram-jbna.onrender.com/Posts/${_id}`,
      {
        $push: { comments: { commentMessage: commentText } },
      }
    );

    fetchPosts();
    setCommentText("");
    console.log(respose, "This is comment response");
    try {
    } catch (error) {
      toast({
        title: "Comment Failed",
      });
      console.log("Comment Failed", error);
    }
  };

  // Show comments handler ---------------------------------->
  const [showComment, setShowComment] = useState<boolean>(false);
  const [currentCommentWalaId, setcurrentCommentWalaId] = useState<string>("");
  console.log(showComment, "this is show comment");
  console.log(currentCommentWalaId, "this is current comment");

  // const posts = [
  //   {
  //     title: "Right now I am in Pokhara",
  //     image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RvcnklMjBpbnN0YWdyYW18ZW58MHx8MHx8fDA%3D",
  //     likeCount: 100,
  //     comments: [
  //       {
  //         commentMessage: "Wow",
  //       },

  //       {
  //         commentMessage: "Nice",
  //       },
  //     ],
  //   },

  //   {
  //     title: "Right now I am in Kathmandu",
  //     image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RvcnklMjBpbnN0YWdyYW18ZW58MHx8MHx8fDA%3D",
  //     likeCount: 100,
  //     comments: [
  //       {
  //         commentMessage: "Wow",
  //       },

  //       {
  //         commentMessage: "Nice",
  //       },
  //     ],
  //   },

  //   {
  //     title: "Right now I am in Dharan",
  //     image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RvcnklMjBpbnN0YWdyYW18ZW58MHx8MHx8fDA%3D",
  //     likeCount: 100,
  //     comments: [
  //       {
  //         commentMessage: "Wow",
  //       },

  //       {
  //         commentMessage: "Nice",
  //       },
  //     ],
  //   },

  //   {
  //     title: "Right now I am in Butwal",
  //     image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RvcnklMjBpbnN0YWdyYW18ZW58MHx8MHx8fDA%3D",
  //     likeCount: 100,
  //     comments: [
  //       {
  //         commentMessage: "Wow",
  //       },

  //       {
  //         commentMessage: "Nice",
  //       },
  //     ],
  //   },

  //   {
  //     title: "Right now I am in Pokhara",
  //     image: "https://images.unsplash.com/photo-1611262588024-d12430b98920?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RvcnklMjBpbnN0YWdyYW18ZW58MHx8MHx8fDA%3D",
  //     likeCount: 100,
  //     comments: [
  //       {
  //         commentMessage: "Wow",
  //       },

  //       {
  //         commentMessage: "Nice",
  //       },
  //     ],
  //   },
  // ];
  return (
    <div className=" place-items-center space-y-8">
      {posts?.map((post: IPost, index: number) => (
        <div key={index} className=" space-y-4">
          <div className="flex px-2 lg:p-0  items-center justify-between">
            <div className=" flex items-center gap-1">
              <Image
                className=" h-10 w-10 rounded-full object-cover"
                src={
                  "https://images.unsplash.com/photo-1611262588024-d12430b98920?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8c3RvcnklMjBpbnN0YWdyYW18ZW58MHx8MHx8fDA%3D"
                }
                alt="img"
                height={500}
                width={500}
              />
              <p className="text-sm font-bold">Loki Chaulagain</p>
              <div className=" hidden opacity-60 lg:flex text-sm items-center">
                <p>
                  <Dot className="m-0" />
                </p>
                <p>12d</p>
              </div>
            </div>

            {/* <Link href={`/post/view/${post._id}`}>
            <Eye/>
            </Link>
            <Link href={`post/edit/${post._id}`}>
            <FilePenLine />
            </Link>
            <Trash onClick={()=>handleDeletePost(post._id)} /> */}
            <MoreHorizontal className="hidden lg:block" />
            <EllipsisVertical className="block lg:hidden" />
          </div>

          <Image
            className="object-cover rounded-sm"
            src={post.image}
            alt="img"
            height={500}
            width={500}
          />

          <div className="px-4 lg:px-0 flex justify-between items-center ">
            <div className="flex items-center gap-4">
           <div className="flex items-center gap-1">
           <Heart className="cursor-pointer hover:opacity-40" onClick={() => handleLikePost(post._id)} />
           <span className="block lg:hidden">{post.likeCount}</span>
           </div>
           <div className="flex items-center gap-1">
           <MessageCircleMore
           className="cursor-pointer hover:opacity-40"
              onClick={() => {
                setShowComment(!showComment);
                setcurrentCommentWalaId(post._id);
              }}
            />{" "}
            <span className="block lg:hidden">{post.comments.length}</span>
           </div>
            <Send className="cursor-pointer hover:opacity-40" />
            </div>
            <Bookmark className="cursor-pointer hover:opacity-40" />
          </div>
          <p className="px-1 hidden lg:block">{post.likeCount} Likes</p>
          <p className="px-4 lg:px-0">{post.title}</p>

          <form
            onSubmit={(e) => handlePostAComment(e, post._id)}
            className="px-4 lg:px-0 flex items-center gap-4"
          >
            <Input
              value={commentText}
              required={true}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Add a comment"
            />
            <Button type="submit">Comment</Button>
          </form>

          {showComment === true && currentCommentWalaId === post._id && (
            <div className=" bg-gray-200 p-4 rounded-lg border border-sky-200">
              {post.comments.map((comment, index: number) => (
                <p key={index}>{comment.commentMessage}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
