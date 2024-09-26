"use client";

import { getAllPosts } from "@/features/posts/getAll";
import { PostInterface, InterfaceList } from "@/types";
import Pagination from "@/ui/components/pagination";
import BlankState from "@/ui/components/blankState";
import PostPreview from "@/ui/components/postPreview";
import SearchBar from "@/ui/components/search";
import { useEffect, useState } from "react";

const BlogPublicView = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;
  const [totalPosts, setTotalPosts] = useState(10); // Definindo um valor padrão
  
  const fetchPosts = async (page: number) => {
    const allPosts = await getAllPosts(page, itemsPerPage);

    if (allPosts && Array.isArray(allPosts)) {
      setPosts(allPosts);
      // setTotalPosts();
    }
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  const totalPages = Math.ceil(totalPosts / itemsPerPage);

  return (
    <div className="p-4 pt-10 pb-16 flex flex-col">
      <SearchBar />
      <div className="container mt-14 flex items-center mx-auto p-4 flex-col">
        {(!posts || posts.length <= 0) && <BlankState />}
        {posts.map((post) => (
          <PostPreview post={post} key={post.id} />
        ))}
      </div>
      <div>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};

export default BlogPublicView;