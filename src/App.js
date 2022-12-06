import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./section/Hero";
import PoweredBy from "./section/PoweredBy";
import Services from "./section/Services";
import Trending from "./section/Trending";

function App() {


  return (
    <div>
      <BrowserRouter>
        <div className="bg-white dark:bg-[#121212]">
          <Navbar />
          <Hero />
          <Trending />
          <Services />
          <PoweredBy />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
