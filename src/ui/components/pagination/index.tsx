"use client";

import React, { useEffect, useState } from 'react';
import { 
  Pagination as Page, 
  PaginationContent, 
  PaginationEllipsis, 
  PaginationItem, 
  PaginationLink, 
  PaginationNext, 
  PaginationPrevious 
} from "@/components/ui/pagination"; // Componente de paginação do Shadcn
import { getAllPosts } from "@/features/posts/getAll"; 
import { PostInterface } from '@/types';

const Pagination = () => {
  const [posts, setPosts] = useState<PostInterface[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchPosts = async () => {
    const allPosts = await getAllPosts();
    if (!allPosts) return;

    setPosts(allPosts);
  };

  useEffect(() => {
    fetchPosts();
  }, [currentPage]);

  const totalPages = Math.ceil(posts.length / itemsPerPage);

  return (
    <div className="flex flex-col justify-between">

      <div className="flex justify-center py-4">
        <Page className="flex items-center space-x-2">
          <PaginationContent className="flex items-center space-x-2">
            <PaginationItem>
              <PaginationPrevious
                href="#"
                className="px-3 py-1 text-gray-600 hover:bg-gray-200 rounded"
                onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }).map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  href="#"
                  className={`px-3 py-1 text-gray-600 hover:bg-gray-200 rounded ${currentPage === index + 1 ? 'font-bold' : ''}`}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              <PaginationEllipsis className="text-gray-600" />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext
                href="#"
                className="px-3 py-1 text-gray-600 hover:bg-gray-200 rounded"
                onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
              />
            </PaginationItem>
          </PaginationContent>
        </Page>
      </div>
    </div>
  );
};

export default Pagination;
