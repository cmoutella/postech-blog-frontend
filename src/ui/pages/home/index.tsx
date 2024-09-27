"use client";

import { getAllPosts } from "@/features/posts/getAll";
import { PostInterface } from "@/types";
import PostPreview from "@/ui/components/postPreview";
import SearchBar from "@/ui/components/search";
import { useEffect, useState } from "react";
import { showToast } from "@/ui/components/toast";
import { GenericPreviewComponent, ListPosts } from "@/ui/components/listPosts";
import { InterfaceList, SuccessResponse } from "@/types/apiPatterns";
import { getAllByKeyword } from "@/features/posts/searchByKeyword";

const BlogPublicView = () => {
  const [pagePosts, setPagePosts] = useState<PostInterface[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPosts, setTotalPosts] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [keyword, setKeyword] = useState<string>("");
  const itemsPerPage = 2;

  const fetchPosts = async () => {
    let res: SuccessResponse<InterfaceList<PostInterface>>;
    try {
      setIsLoading(true);

      if (!!keyword) {
        console.log("vou buscar com keyword", keyword);
        res = await getAllByKeyword(keyword, currentPage, itemsPerPage);
        console.log(res);
      } else {
        res = await getAllPosts(currentPage, itemsPerPage);
      }

      if (!res || !res.data) {
        throw new Error("Não foi possível buscar pelos posts no momento");
      }

      console.log(res);

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
    fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  return (
    <div className="p-4 pt-10 pb-16 flex flex-col">
      <SearchBar
        searchedValue={keyword}
        setSearchedValue={setKeyword}
        onSearch={fetchPosts}
      />
      <ListPosts
        pagePosts={pagePosts}
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalPosts={totalPosts}
        setCurrentPage={setCurrentPage}
        isLoading={isLoading}
        PostComponent={PostPreview as unknown as GenericPreviewComponent}
      />
    </div>
  );
};

export default BlogPublicView;
