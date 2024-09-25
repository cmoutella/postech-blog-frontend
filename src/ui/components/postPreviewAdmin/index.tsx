"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";
import { PostInterface } from "@/types";
interface PostPreviewAdminProps {
  post: PostInterface;
}

const PostPreviewAdmin = ({ post }: PostPreviewAdminProps) => {
  return (
    <Card
      key={post.id}
      className="mb-6 relative flex flex-col md:flex-row w-full max-w-full md:max-w-2xl lg:max-w-4xl xl:max-w-5xl"
      style={{
        height: "auto",
        minHeight: "300px",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      {/* Left Section */}
      <div className="w-full md:w-1/2 p-4">
        <CardHeader>
          <CardTitle className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800">
            {post.title}
          </CardTitle>
        </CardHeader>
      </div>
      {/* Right Section */}
      <div className="w-full md:w-1/2 p-4">
        <CardContent>
          <p
            className="text-sm md:text-base lg:text-lg text-zinc-900 font-normal line-clamp-3"
            style={{
              display: "-webkit-box",
              WebkitLineClamp: 6,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
            dangerouslySetInnerHTML={{ __html: post.text }}
          />
        </CardContent>
      </div>
      {/* Footer Section */}
      <CardFooter className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-4">
        <div>
          <p className="text-zinc-900 font-light text-xs">{post.createdAt}</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Ellipsis
              color="white"
              className="p-1 bg-zinc-900 hover:bg-zinc-500 rounded-full"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-white/4">
            <DropdownMenuLabel className="flex justify-center">
              Options
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Button className="w-full text-left">Edit</Button>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Button
                className="w-full text-left"
                onClick={() =>
                  alert("Are you sure you want to delete this post?")
                }
              >
                Delete
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardFooter>
    </Card>
  );
};

export default PostPreviewAdmin;
