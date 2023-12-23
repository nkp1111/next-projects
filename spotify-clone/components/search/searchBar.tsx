export default function SearchBar() {
  return (
    <form>
      <label htmlFor="song-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search Song</label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
          <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
          </svg>
        </div>
        <input
          type="search"
          id="song-search"
          name="query"
          className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300  dark:border-gray-600 dark:placeholder-gray-400 dark:text-white rounded-full bg-transparent"
          placeholder="What do you want to listen to?"
        />
        <button type="submit" className="text-white absolute end-2.5 bottom-2.5 bg-primary hover:opacity-95 focus:ring-4 focus:outline-none focus:opacity-80 font-medium rounded-full text-sm px-4 py-2 dark:bg-primary dark:hover:opacity-95 dark:focus:opacity-80">Search</button>
      </div>
    </form>
  )
}
