import React, { useState } from 'react'
import ProjectCard from './projectCard'
import { ProjectParam } from '@/types'
import ReactPaginate from 'react-paginate';
import { ITEM_PER_PAGE } from '@/constant';

export default function ProjectPagination(
  { filteredProjects }: { filteredProjects: ProjectParam[] }
) {
  // paginate items
  const [itemOffset, setItemOffset] = useState(0);
  const endOffset = itemOffset + ITEM_PER_PAGE;
  const currentProjects = filteredProjects.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredProjects.length / ITEM_PER_PAGE);
  const handlePageClick = (event: { selected: number; }) => {
    const newOffset = (event.selected * ITEM_PER_PAGE) % filteredProjects.length;
    setItemOffset(newOffset);
  };

  return (
    <div>
      <div className='grid grid-cols-12 gap-5 mt-8'>
        {currentProjects.map(project => (
          <div key={project.id} className='col-span-12 md:col-span-6 lg:col-span-4 2xl:col-span-3 w-full mx-auto'>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>

      {filteredProjects.length > currentProjects.length && (
        < ReactPaginate
          breakLabel="..."
          nextLabel=">"
          onPageChange={(e) => handlePageClick(e)}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="<"
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
