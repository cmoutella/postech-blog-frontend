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
      className="mb-6 relative flex"
      style={{
        width: "1000px",
        height: "300px",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="w-1/2 p-4">
        <CardHeader>
          <CardTitle className="text-4xl font-bold text-gray-800">
            {post.title}
          </CardTitle>
        </CardHeader>
      </div>
      <div className="w-1/2 p-4">
        <CardContent>
          <p className="text-zinc-900 font-normal">{post.text}</p>
        </CardContent>
      </div>
      <CardFooter className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-4">
        <div>
          <p className="text-zinc-950 font-normal">{post.author}</p>
          <p className="text-zinc-900 font-light text-xs">{post.date}</p>
        </div>
        <Button variant="link" className="text-fiap">
          <a href="#">Ver post completo</a>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PostPreview;
