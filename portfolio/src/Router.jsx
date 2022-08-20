import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import ServicesProvided from "./pages/ServicesProvided";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Testimonials from "./pages/Testimonials";
import Navbar from "./components/Layouts/Navbar";
import Footer from "./components/Layouts/Footer";

const Router = () => {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/services" element={<ServicesProvided />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </HashRouter>
    </>
  );
};

export default Router;
