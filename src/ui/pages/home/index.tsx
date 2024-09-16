"use client";

import { getAllPosts } from "@/features/posts/getAll";
import { PostInterface } from "@/types";
import Navbar from "@/ui/components/navbar";
import PostPreview from "@/ui/components/postPreview";
import SearchBar from "@/ui/components/search";
import { useEffect, useState } from "react";

const BlogPublicView = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);

  const iniciatePosts = async () => {
    const allPosts = await getAllPosts();

    if (!allPosts) return;

    setPosts(allPosts);
  };

  useEffect(() => {
    iniciatePosts();
  }, []);

  return (
    <div className="p-4 flex flex-col">
      <Navbar/>
      <SearchBar/>
      <div className="container mx-auto p-4 flex-col">
      <p>teste</p>
      {posts.map((post) => (
        <PostPreview post={post} key={post.id} />
      ))}
      </div>
    </div>
  );
};

export default BlogPublicView;
