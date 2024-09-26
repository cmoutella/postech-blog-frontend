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
} from "@/components/ui/pagination";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalPages: number;
}

const Pagination = ({ currentPage, setCurrentPage, totalPages }: PaginationProps) => {

  return (
    <div className="flex flex-col justify-between">
      <div className="flex justify-center py-4">
        <Page className="flex items-center space-x-2">
          <PaginationContent className="flex items-center space-x-2">
            <PaginationItem>
              <PaginationPrevious
                className="px-3 py-1 text-gray-600 hover:bg-gray-200 rounded"
                onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
              />
            </PaginationItem>
            {Array.from({ length: totalPages }).map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
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