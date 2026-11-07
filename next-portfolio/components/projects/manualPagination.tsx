"use client";

import React, { useEffect, useState } from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';

interface ManualPaginationProps {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  currentPage: number;
  maxPage: number;
}

export default function ManualPagination({
  setCurrentPage,
  currentPage,
  maxPage,
}: ManualPaginationProps) {
  const [currentVal, setCurrentVal] = useState(currentPage);

  useEffect(() => {
    setCurrentVal(currentPage);
  }, [currentPage]);

  const setPage = (page: number) => {
    const valid = Math.max(1, Math.min(page, maxPage));
    setCurrentPage(valid);
    setCurrentVal(valid);
  };

  const numberedPageItems: React.ReactNode[] = [];
  for (let page = 1; page <= maxPage; page++) {
    const isCurrent = page === currentPage;
    numberedPageItems.push(
      <button
        type="button"
        key={page}
        onClick={() => setPage(page)}
        className={`btn btn-sm rounded-lg min-w-[36px] transition-all ${
          isCurrent
            ? "btn-primary font-bold shadow-sm pointer-events-none"
            : "btn-ghost text-base-content/80 hover:bg-base-200"
        }`}
      >
        {page}
      </button>
    );
  }

  return (
    <div className="flex items-center justify-center gap-2">
      <button
        type="button"
        title="Previous Page"
        disabled={currentPage === 1}
        onClick={() => setPage(currentPage - 1)}
        className="btn btn-sm btn-ghost rounded-lg px-2 disabled:opacity-40"
      >
        <ArrowLeftIcon className="w-4 h-4" />
      </button>

      <div className="flex gap-1.5">
        {numberedPageItems}
      </div>

      <button
        type="button"
        title="Next Page"
        disabled={currentPage === maxPage}
        onClick={() => setPage(currentPage + 1)}
        className="btn btn-sm btn-ghost rounded-lg px-2 disabled:opacity-40"
      >
        <ArrowRightIcon className="w-4 h-4" />
      </button>
    </div>
  );
}
