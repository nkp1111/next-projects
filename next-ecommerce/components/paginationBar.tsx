import Link from "next/link";
import { FaBackward, FaForward } from "react-icons/fa";

interface PaginationBarProps {
  currentPage: number;
  totalPage: number;
}

export default function PaginationBar({ currentPage, totalPage }: PaginationBarProps) {
  const maxPage = Math.min(totalPage, Math.max(currentPage + 4, 10))
  const minPage = Math.max(1, Math.min(currentPage - 5, maxPage - 9))

  const numberedPageItems: JSX.Element[] = []
  for (let page = minPage; page < maxPage; page++) {
    numberedPageItems.push(
      <Link key={page} href={`?page=${page}`}
        className={`join-item btn ${currentPage === page ? "pointer-events-none btn-active" : ""}`}>
        {page}
      </Link>
    )
  }

  return (
    <div>
      <div className="join hidden sm:block">
        {numberedPageItems}
      </div>
      <div className="join block sm:hidden">
        {currentPage > 1 && (
          <Link href={`?page=${currentPage - 1}`} className="btn join-item">
            <FaBackward />
          </Link>
        )}
        <button type="button" className="btn join-item pointer-events-none btn-active">
          Page {currentPage}
        </button>
        {currentPage < totalPage && (
          <Link href={`?page=${currentPage + 1}`} className="btn join-item">
            <FaForward />
          </Link>
        )}
      </div>
    </div>

  )
}
