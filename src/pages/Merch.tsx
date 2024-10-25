import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MerchPage() {
  return (
    <div className="absolute flex flex-col justify-between inset-0 place-content-center h-screen max-w-screen-lg mx-auto px-5">
      <Header />
      <div className="flex flex-col justify-between text-center">
        <div className="text-8xl md:text-9xl text-white drop-shadow-[0_0_4px_#DDDDDD] transition ease-in-out delay-75 duration-300 hover:cursor-default font-[Helvetica] font-bold tracking-[-0.07em] py-10">
          merch
        </div>
        <div className="text-white drop-shadow-[0_0_1px_#DDDDDD] font-[Helvetica] font-bold tracking-tighter py-5">
          Our new merchandise is coming very soon.
          <br />
          Stay tuned!
        </div>
        <div className="flex justify-evenly items-center text-center pt-5">
          <Link
            to={"/"}
            className="text-gray-100 drop-shadow-[0_0_4px_#BBBBBB] transition ease-in-out delay-75 duration-300 hover:text-white font-[Helvetica] font-bold tracking-tighter"
          >
            BACK TO HOME
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MerchPage;
