import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "./components";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-blend-normal bg-center">
            <Navbar />
            <Hero />
          </div>
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
      </BrowserRouter>
      <div className="realtive z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </>
  );
}

export default App;
