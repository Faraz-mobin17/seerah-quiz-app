import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" p-4">
      <div className="text-center md:container md:mx-auto  md:px-4 md:py-4 md:mt-4  md:text-white md:rounded-md md:shadow-md">
        <div className="grid md:grid-cols-4 lg:grid-cols-3  justify-center place-items-center">
          <div>
            <h1 className="text-lg font-semibold">About Me</h1>
            <p className="mt-2 text-sm">
              I love righteous, although I'm not one of them.
            </p>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Quick Links</h1>
            <ul className="mt-2 text-sm">
              <li className="mt-2">
                <Link href={"/"}>Home</Link>
              </li>
              <li className="mt-2">
                <Link href={"/quiz"}>Quiz</Link>
              </li>
            </ul>
          </div>
          <div>
            <h1 className="text-lg font-semibold">Contact Me On</h1>

            <p className="mt-2 text-sm">
              <a href="https://www.instagram.com/deen.0018">Instagram</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
