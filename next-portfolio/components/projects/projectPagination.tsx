import React, { useEffect, useState } from 'react'
import ProjectCard from './projectCard'
import { ProjectParam } from '@/types'
import ReactPaginate from 'react-paginate';
import { ITEM_PER_PAGE } from '@/constant';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import debounce from '@/lib/debounce';
import ManualPagination from './manualPagination';
import { useSearchParams } from 'next/navigation';

export default function ProjectPagination(
  { filteredProjects, filterQuery }
    : { filteredProjects: ProjectParam[], filterQuery: string }
) {

  const params = useSearchParams();
  let paginationType = params.get("pagination") || "manual";

  // paginate (react-pagination)
  const [itemOffset, setItemOffset] = useState(0);
  const [pageCount, setPageCount] = useState(Math.ceil(filteredProjects.length / ITEM_PER_PAGE) || 1);
  const [currentProjects, setCurrentProjects] = useState(filteredProjects.slice(0, ITEM_PER_PAGE));
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * ITEM_PER_PAGE) % filteredProjects.length;
    setItemOffset(newOffset);
  };

  // show first page on filter query change (react-paginate)
  useEffect(() => {
    const endOffset = itemOffset + ITEM_PER_PAGE;
    debounce(() => {
      setCurrentProjects(filteredProjects.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(filteredProjects.length / ITEM_PER_PAGE));
    }, 300)();
  }, [filteredProjects, itemOffset])

  useEffect(() => {
    setItemOffset(0);
  }, [filterQuery]);

  // manual pagination
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const newOffset = ((currentPage - 1) * ITEM_PER_PAGE) % filteredProjects.length;
    setItemOffset(newOffset);
  }, [currentPage, filteredProjects])

  return (
    <div>
      <div className='grid grid-cols-12 gap-5 mt-8'>
        {currentProjects.map(project => (
          <div key={project.id} className='col-span-12 md:col-span-6 lg:col-span-4 w-full mx-auto'>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {filteredProjects.length > currentProjects.length && pageCount > 1 && paginationType === "react" && (
        <ReactPaginate
          breakLabel="..."
          previousLabel={<ArrowLeftIcon className='w-8 h-8' />}
          nextLabel={<ArrowRightIcon className='w-8 h-8' />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount || Math.ceil(filteredProjects.length / ITEM_PER_PAGE)}
          renderOnZeroPageCount={null}
          className='flex gap-2 justify-center content-center mt-10'
          pageClassName='btn'
          previousClassName='btn'
          nextClassName='btn'
          activeClassName='btn-primary'
          pageLabelBuilder={(page: number) => page}
          disableInitialCallback
        />
      )}

      {/* react-paginate ui is not working properly on production, create pagination manually */}
      {filteredProjects.length > currentProjects.length && pageCount > 1 && paginationType !== "react" && (
        <ManualPagination
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          maxPage={pageCount || Math.ceil(filteredProjects.length / ITEM_PER_PAGE)}
        />
      )}

    </div>
  )
}
