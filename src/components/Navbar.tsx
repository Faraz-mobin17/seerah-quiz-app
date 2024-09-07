export default function Navbar() {
  return (
    <header className="p-4">
      <div className="md:container md:py-4 md:px-4  mx-auto">
        <div className="flex">
          <h1 className="text-3xl mr-auto">Seerah Quiz App</h1>
          <nav>
            <ul className="flex">
              <li className="p-2 mr-4">
                <a href="/">Home</a>
              </li>
              <li className="p-2 mr-4">
                <a href="/about">Recommended Seerah Books</a>
              </li>
              <li className="p-2 mr-4">
                <a href="#">Recommended Seerah Playlist</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
