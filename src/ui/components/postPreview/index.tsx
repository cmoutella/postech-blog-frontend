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
import { PostInterface } from "@/types";

interface PostPreviewProps {
  post: PostInterface;
}

const PostPreview = ({ post }: PostPreviewProps) => {
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
            style={{ display: "-webkit-box", WebkitLineClamp: 6, WebkitBoxOrient: "vertical", overflow: "hidden", textOverflow: "ellipsis" }}
          >
            {post.text}
          </p>
        </CardContent>
      </div>
      {/* Footer Section */}
      <CardFooter className="absolute bottom-0 left-0 right-0 flex flex-col md:flex-row justify-between items-start md:items-center p-4">
        <div className="mb-4 md:mb-0">
          <p className="text-sm text-zinc-950 font-normal">{post.author}</p>
          <p className="text-xs text-zinc-900 font-light">{post.date}</p>
        </div>
        <Button variant="link" className="text-fiap">
          <a href="#">Ver post completo</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostPreview;
