import { seerahPlaylist } from "@/utils/constants";
import Link from "next/link";

export default function SeerahPlaylistCard() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 mt-28 gap-10">
      {seerahPlaylist.map((playlist) => (
        <div
          key={playlist.id}
          className="relative h-[200px] w-[300px] rounded-md  cursor-pointer hover:scale-105 transform transition duration-300 ease-in-out"
        >
          <img
            src={playlist.src}
            alt={playlist.title}
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <p className="mt-2 text-sm text-gray-300">{playlist.title}</p>
            <Link href={playlist.link}>
              <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
                View Playlist &rarr;
              </button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}
