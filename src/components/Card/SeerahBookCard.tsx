import { seerahBooks } from "@/utils/constants";

export default function SeerahPlaylistCard() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 mt-20 gap-10 p-2">
      {seerahBooks.map((book) => (
        <div
          key={book.id}
          className="relative h-[200px] w-[300px] rounded-md cursor-pointer hover:scale-105 transition-transform duration-300 ease-in-out overflow-hidden"
        >
          <img
            src={book.src}
            alt={book.title}
            className="z-0 h-full w-full rounded-md object-cover "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">{book.title}</h1>
            <button className="mt-2 inline-flex cursor-pointer items-center text-sm font-semibold text-white">
              View Book &rarr;
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
