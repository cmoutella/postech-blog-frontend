"use client";

import { getAllPosts } from "@/features/posts/getAll";
import { PostInterface } from "@/types";
import Pagination from "@/ui/components/pagination";
import BlankState from "@/ui/components/blankState";
import PostPreview from "@/ui/components/postPreview";
import SearchBar from "@/ui/components/search";
import { useEffect, useState } from "react";
import { showToast } from "@/ui/components/toast";
import { Loading } from "@/ui/components/loading";

const BlogPublicView = () => {
  const [pagePosts, setPagePosts] = useState<PostInterface[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPosts, setTotalPosts] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const itemsPerPage = 2;

  const fetchPosts = async (page: number) => {
    try {
      setIsLoading(true);
      const res = await getAllPosts(page, itemsPerPage);

      if (!res || !res.data) {
        throw new Error("Não foi possível buscar pelos posts no momento");
      }

      const { data, totalItems } = res.data;

      setPagePosts(data);
      setTotalPosts(totalItems);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
      showToast({
        type: "error",
        message: "Não foi possível buscar posts no momento",
      });
    }
  };

  useEffect(() => {
    fetchPosts(currentPage);
  }, [currentPage]);

  return (
    <div className="p-4 pt-10 pb-16 flex flex-col">
      <SearchBar />
      <div className="container mt-14 flex items-center mx-auto p-4 flex-col">
        {isLoading && <Loading />}
        {!isLoading && (!pagePosts || pagePosts.length <= 0) && <BlankState />}
        {!isLoading &&
          pagePosts.map((post) => <PostPreview post={post} key={post.id} />)}
      </div>
      {totalPosts > 0 && (
        <div>
          <Pagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            totalItems={totalPosts}
            perPage={itemsPerPage}
          />
        </div>
      )}
    </div>
  );
};

export default BlogPublicView;
