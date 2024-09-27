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
import { EMPTY_MESSAGE_DEFAULT } from "@/config/constants/default";

const BlogPublicView = () => {
  const [pagePosts, setPagePosts] = useState<PostInterface[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPosts, setTotalPosts] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [keyword, setKeyword] = useState<string>("");
  const [emptyMessage, setEmptyMessage] = useState(EMPTY_MESSAGE_DEFAULT);
  const itemsPerPage = 2;

  const fetchPosts = async () => {
    let res: SuccessResponse<InterfaceList<PostInterface>>;
    try {
      setIsLoading(true);

      if (!!keyword) {
        res = await getAllByKeyword(keyword, currentPage, itemsPerPage);
      } else {
        res = await getAllPosts(currentPage, itemsPerPage);
      }

      if (!res || !res.data) {
        throw new Error("Não foi possível buscar pelos posts no momento");
      }

      const { data, totalItems } = res.data;

      if (!!keyword) {
        setEmptyMessage(
          `Não encontramos posts para a palavra chave <b class="text-rose-400">${keyword}</b>`
        );
      } else {
        setEmptyMessage(EMPTY_MESSAGE_DEFAULT);
      }
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
        blankStateMessage={emptyMessage}
        setCurrentPage={setCurrentPage}
        isLoading={isLoading}
        PostComponent={PostPreview as unknown as GenericPreviewComponent}
      />
    </div>
  );
};

export default BlogPublicView;
