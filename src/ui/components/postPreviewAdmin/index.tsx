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

const posts = [
  {
    id: 1,
    title: "Condicional em tudo é mesmo o caminho certo?",
    author: "Prof. John Doe",
    date: "22 de maio de 2024",
    content:
      "This is a minimalistic blog post content. It is short and simple. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",
  },
  {
    id: 2,
    title: "Sobre algorítmos e outras lógicas",
    author: "Prof. Jane Doe",
    date: "22 de maio de 2024",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",
  },
  {
    id: 3,
    title: "Sobre algorítmos e outras lógicas",
    author: "Prof. Jane Doe",
    date: "22 de maio de 2024",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. ",
  },
  {
    id: 4,
    title: "Sobre algorítmos e outras lógicas",
    author: "Prof. Jane Doe",
    date: "22 de maio de 2024",
    content:
      "lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc. lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec odio vitae nunc.",
  },
];

interface PostPreviewAdminProps {
  post: PostInterface;
}

const PostPreviewAdmin = ({ post }: PostPreviewAdminProps) => {
  return (
    <Card
      key={post.id}
      className="relative flex flex-col"
      style={{
        height: "270px",
        boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
      }}
    >
      <div className="w-full p-4 flex">
        <div className="w-1/2 pr-4">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-gray-800">
              {post.title}
            </CardTitle>
          </CardHeader>
        </div>
        <div className="w-1/2">
          <CardContent className="overflow-hidden">
            <p className="text-zinc-900 font-normal text-sm overflow-hidden text-ellipsis">
              {post.text}
            </p>
          </CardContent>
        </div>
      </div>
      <CardFooter className="absolute bottom-0 left-0 right-0 flex justify-between items-center p-4">
        <div>
          <p className="text-zinc-900 font-light text-xs">{post.date}</p>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Ellipsis
              color="white"
              className="p-1 bg-zinc-900 hover:bg-zinc-500 rounded-full"
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>Options</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit</DropdownMenuItem>
            <DropdownMenuItem>Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </CardFooter>
    </Card>
  );
};

export default PostPreviewAdmin;
