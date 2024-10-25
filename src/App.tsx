import HomePage from "./pages/Home.tsx";
import AboutPage from "./pages/About.tsx";
import ContactPage from "./pages/Contact.tsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
      <div className="bg-[hsl(215,78%,5%)] absolute inset-0 place-content-center items-center overflow-hidden -z-50">
        <div className="mx-auto w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-gradient animate-rotate rounded-full filter blur-[80px] md:blur-[120px] -z-40"></div>
      </div>
      <div className="m-0 overflow-x-hidden fixed -top-2/4 -left-2/4 -right-2/4 -bottom-2/4 w-[200%] h-[200vh] bg-[url('http://assets.iceable.com/img/noise-transparent.png')] bg-repeat animate-bganimation visible -z-10"></div>
    </div>
  );
}

export default App;
