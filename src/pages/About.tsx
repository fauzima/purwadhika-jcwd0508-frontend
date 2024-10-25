import { Link } from "react-router-dom";

function AboutPage() {
  return (
    <div className="absolute inset-0 place-content-center items-center max-w-screen-lg mx-auto px-5">
      <div className="flex flex-col justify-between text-center md:h-[60vh] h-[80vh]">
        <Link
          to={"/"}
          className="text-9xl text-gray-200 font-[Helvetica] font-bold tracking-tighter"
        >
          LOREM IPSUM
        </Link>
        <div className="text-gray-200 font-[Helvetica] font-bold tracking-tighter">
          This is an About content.
        </div>
        <div className="flex justify-evenly items-center text-center">
          <Link
            to={"/"}
            className="text-gray-200 font-[Helvetica] font-bold tracking-tighter"
          >
            BACK
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
