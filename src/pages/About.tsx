import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

function AboutPage() {
  return (
    <div className="absolute flex flex-col justify-between inset-0 place-content-center h-screen max-w-screen-lg mx-auto px-5">
      <Header />
      <div className="flex flex-col justify-between text-center">
        <div className="text-8xl md:text-9xl text-white drop-shadow-[0_0_4px_#DDDDDD] transition ease-in-out delay-75 duration-300 hover:cursor-default font-[Helvetica] font-bold tracking-[-0.07em] py-10">
          about
        </div>
        <div className="text-white drop-shadow-[0_0_1px_#DDDDDD] font-[Helvetica] font-bold tracking-tighter py-5">
          fauzima is a full-stack web developer based in Indonesia. <br />
          <div className="py-4">
            • Languages: C, C++, Java, & Python <br />
            • Frontend: Html, CSS, JS <br />• Frontend Frameworks: Bootstrap,
            Tailwind, React, React-Native <br />
            • Backend: Flask & Django (Python), Node & Express (JS) <br />
            • Databases: MySQL, SQLite & MongoDB, firebase (GCP) <br />
            • Version-Control: Gitlab, Github (git) <br />
            • Other tools: VSCode, WSL (Windows), Android Studio, Linux <br />
            • Presentation: MS Office, Canva & Figma <br />
          </div>
          Click{" "}
          <Link
            className="drop-shadow-[0_0_4px_#DDDDDD] text-cyan-100 hover:text-white transition ease-in-out delay-75 duration-300"
            to={"/projects"}
          >
            here
          </Link>{" "}
          to see our past projects and click{" "}
          <Link
            className="drop-shadow-[0_0_4px_#DDDDDD] text-cyan-100 hover:text-white transition ease-in-out delay-75 duration-300"
            to={""}
          >
            here
          </Link>{" "}
          to send us an email.
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

export default AboutPage;
