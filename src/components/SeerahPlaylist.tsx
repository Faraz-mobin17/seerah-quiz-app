import SeerahPlaylistCard from "./Card/SeerahPlaylistCard";

export default function SeerahPlaylist() {
  return (
    <section id="playlist">
      <div className="md:container mx-auto py-8 px-4 flex flex-col justify-center items-center">
        <h1 className="mt-20 md:mt-15 text-center text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
          Recommended Seerah Playlist
        </h1>
        <SeerahPlaylistCard />
      </div>
    </section>
  );
}
