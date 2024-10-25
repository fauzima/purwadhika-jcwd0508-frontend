import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-yellow-50">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <Link
                  to={"/"}
                  className="rounded-md bg-yellow-200 px-3 py-2 text-sm font-medium text-black"
                  aria-current="page"
                >
                  Home
                </Link>
                <Link
                  to={"/about"}
                  className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-white"
                >
                  About
                </Link>
                <Link
                  to={"/contact"}
                  className="rounded-md px-3 py-2 text-sm font-medium text-black hover:bg-white"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
