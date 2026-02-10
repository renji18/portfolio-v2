import About from "../components/About/About";
import Blogs from "../components/Blogs/Blogs";
import Footer from "../components/Footer/Footer";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Tech from "../components/Tech/Tech";
import Projects from "../components/Works/Projects";

const Home = () => {
  return (
    <div id="home" className="text-darkBlack">
      <Navbar />
      <Hero />
      <About />
      <Tech />
      <Projects />
      <Blogs />
      <Footer />
    </div>
  );
};

export default Home;
