import HomePage from "./pages/Home.tsx";
import AboutPage from "./pages/About.tsx";
import ProjectsPage from "./pages/Projects.tsx";
import MerchPage from "./pages/Merch.tsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/merch" element={<MerchPage />} />
        </Routes>
      </div>
      <div className="bg-black fixed inset-0 place-content-center items-center overflow-hidden -z-50">
        <div className="mx-auto w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient rounded-full filter blur-[80px] md:blur-[120px] -z-40 animate-rotate"></div>
      </div>
      <div className="m-0 overflow-x-hidden fixed -top-2/4 -left-2/4 -right-2/4 -bottom-2/4 w-[200%] h-[200vh] bg-[url('http://assets.iceable.com/img/noise-transparent.png')] bg-repeat animate-bganimation brightness-150 -z-10"></div>
    </div>
  );
}

export default App;
