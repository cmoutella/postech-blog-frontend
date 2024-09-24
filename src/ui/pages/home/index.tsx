"use client";

import { getAllPosts } from "@/features/posts/getAll";
import { PostInterface } from "@/types";
import AdmButtons from "@/ui/components/admButtons";
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
      <SearchBar />
      <div className="container mt-14 flex items-center mx-auto p-4 flex-col gap-4">
        {posts.map((post) => (
          <PostPreview post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default BlogPublicView;
