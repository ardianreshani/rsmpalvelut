import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScroolToTop";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar open={open} setOpen={setOpen} />
        <ScrollToTop />
        <AppRoute />
      </BrowserRouter>
    </div>
  );
}

export default App;
const AppRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
};
