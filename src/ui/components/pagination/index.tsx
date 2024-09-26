"use client";

import React, { useEffect, useState } from "react";
import {
  Pagination as Page,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import cx from "classnames";

interface PaginationProps {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  totalItems: number;
  perPage: number;
}

const Pagination = ({
  currentPage,
  setCurrentPage,
  totalItems,
  perPage,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / perPage);

  return (
    <div className="flex flex-col justify-between">
      <div className="flex justify-center py-4">
        <Page className="flex items-center space-x-2">
          <PaginationContent className="flex items-center space-x-2">
            <PaginationItem>
              {currentPage > 1 && (
                <PaginationPrevious
                  className="px-3 py-1 text-slade-400 hover:bg-fiap hover:bg-opacity-30 rounded cursor-pointer"
                  onClick={() =>
                    currentPage > 1 && setCurrentPage(currentPage - 1)
                  }
                />
              )}
            </PaginationItem>
            {Array.from({ length: totalPages }).map((_, index) => (
              <PaginationItem key={index}>
                <PaginationLink
                  className={cx(
                    `px-3 py-1 text-slade-500 hover:bg-fiap hover:bg-opacity-30 rounded cursor-pointer`,
                    {
                      "font-bold text-slade-800 border border-fiap border-opacity-65":
                        currentPage === index + 1,
                    }
                  )}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem>
              {currentPage < totalPages && (
                <PaginationNext
                  className="px-3 py-1 text-slade-400 hover:bg-fiap hover:bg-opacity-30 rounded cursor-pointer"
                  onClick={() =>
                    currentPage < totalPages && setCurrentPage(currentPage + 1)
                  }
                />
              )}
            </PaginationItem>
          </PaginationContent>
        </Page>
      </div>
    </div>
  );
};

export default Pagination;
