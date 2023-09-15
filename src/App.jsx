import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Works } from "./components/Works";
import { Academic } from "./components/Academic";
import { experience } from "./data";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Works {...experience} />
      <Academic {...experience} />
      <Skills />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
