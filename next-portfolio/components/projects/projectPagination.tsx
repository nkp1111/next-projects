import React, { useEffect, useState } from 'react'
import ProjectCard from './projectCard'
import { ProjectParam } from '@/types'
import ReactPaginate from 'react-paginate';
import { ITEM_PER_PAGE } from '@/constant';
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/20/solid';


export default function ProjectPagination(
  { filteredProjects, filterQuery }
    : { filteredProjects: ProjectParam[], filterQuery: string }
) {
  // paginate items
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + ITEM_PER_PAGE;
  const currentProjects = filteredProjects.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredProjects.length / ITEM_PER_PAGE);
  const handlePageClick = (event: { selected: number }) => {
    const newOffset = (event.selected * ITEM_PER_PAGE) % filteredProjects.length;
    setItemOffset(newOffset);
  };

  // show first page on filter query change
  useEffect(() => {
    setItemOffset(0);
  }, [filterQuery])

  return (
    <div>
      <div className='grid grid-cols-12 gap-5 mt-8'>
        {currentProjects.map(project => (
          <div key={project.id} className='col-span-12 md:col-span-6 lg:col-span-4 w-full mx-auto'>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {filteredProjects.length > currentProjects.length && pageCount > 1 && (
        <ReactPaginate
          breakLabel="..."
          previousLabel={<ArrowLeftIcon className='w-8 h-8' />}
          nextLabel={<ArrowRightIcon className='w-8 h-8' />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          renderOnZeroPageCount={null}
          className='flex gap-2 justify-center content-center mt-10'
          pageClassName='btn'
          previousClassName='btn'
          nextClassName='btn'
          activeClassName='btn-primary'
        />
      )}
    </div>
  )
}
