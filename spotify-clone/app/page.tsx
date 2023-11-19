import AudioControl from "@/components/control";
import AudioDisplay from "@/components/display";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <main className="flex h-screen flex-col overflow-hidden">
      <h1 className="absolute text-center w-full invisible -top-96">Spotify Audio Player Clone</h1>
      {/* desktop view  */}
      <div className="w-full h-full hidden sm:flex flex-col">
        <div className="w-full flex-1 flex overflow-y-auto">
          {/* menu options (nav) */}
          <Sidebar />
          {/* display audio list */}
          <AudioDisplay />
        </div>
        {/* control box(audio controller) */}
        <AudioControl />
      </div>

      {/* mobile view */}
      <div className="w-full h-full flex sm:hidden">
        mobile
      </div>
    </main>
  )
}
