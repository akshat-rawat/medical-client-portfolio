import {BrowserRouter, Route, Routes} from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import Testimonials from "./pages/Testimonials";

const Router = () => {
    return <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<AboutMe />} />
                <Route path="/blogs" element={<Blogs />} />
                <Route path="/testimonials" element={<Testimonials />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </BrowserRouter>
    </>
}

export default Router;