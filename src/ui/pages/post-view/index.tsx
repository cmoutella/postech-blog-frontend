"use client";
import React, { useEffect, useState } from "react";
import { getOnePosts } from "@/features/posts/getOne";
import { PostInterface } from "@/types";
import { showToast } from "@/ui/components/toast";
import { Loading } from "@/ui/components/loading";
import BlankState from "@/ui/components/blankState";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { formatDate } from "@/utils/date";

type PostViewProps = {
  postId: string;
};

export const PostView = ({ postId }: PostViewProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [post, setPost] = useState<PostInterface | undefined>(undefined);

  const router = useRouter();

  const fetchPost = async () => {
    try {
      setIsLoading(true);
      const res = await getOnePosts(postId);

      if (!res || !res.data) {
        throw new Error("Não foi possível buscar pelos posts no momento");
      }

      const { data } = res;

      setPost(data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      showToast({
        type: "error",
        message: "Não foi possível buscar pelo post no momento",
      });
    }
  };

  useEffect(() => {
    fetchPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="md:p-16 flex flex-col h-screen bg-[#F4F4F4]">
      {isLoading && <Loading />}
      {!isLoading && !post && (
        <div className="container flex flex-col gap-y-10">
          <BlankState message="Não encontramos esse post" />
          <Button variant="outline">Veja outros conteúdos disponíveis</Button>
        </div>
      )}
      {!isLoading && post && (
        <div className="container flex flex-col md:w-3/4">
          <div className="flex flex-col">
            <h1 className="text-5xl font-semibold text-slade-800 mb-5">
              {post.title}
            </h1>
            <div className="flex justify-start items-end mb-10 gap-3">
              <p className="text-slade-400 text-base font-medium">
                Professor {post.authorName}
              </p>
              <p className="text-slade-300 text-xs pb-0.5">
                em {formatDate(post.createdAt)}
              </p>
            </div>
            <div className="text-slade-900 text-lg leading-relaxed">
              {post.text}
            </div>
          </div>
          <div className="mt-20 self-end place-self-end">
            <Button onClick={() => router.push("/")}>
              Veja mais posts de nossos professores
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default PostView;
