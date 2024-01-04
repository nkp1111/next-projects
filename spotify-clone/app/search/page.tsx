import AudioCard from "@/components/display/audioCard";
import DisplayHeader from "@/components/display/header";
import SearchBar from "@/components/search/searchBar";
import ShowSearchResult from "@/components/search/showSearchResult";
import { getAllPlaylist } from "@/lib/playlist/getAllPlaylist";

export default async function Search() {
  const playlists = await getAllPlaylist();

  return (
    <section className='bg-zinc-900 text-white flex-1 h-full px-8 py-2 overflow-y-auto'>
      <h2 className="text-center w-full invisible -top-96">Search</h2>
      <DisplayHeader />
      <div className='mt-4 h-full'>

        <SearchBar />

        <ShowSearchResult />

        <div className='mt-8'>
          <div className='mt-4 h-full'>
            <AudioCard
              articleHeading={"Browse All"}
              playlists={playlists} />
          </div>
        </div>

      </div>
    </section>
  )
}
