import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "./components/NavBar/NavBar";
import SiteDescription from "./components/SiteDescription/SiteDescription"; // Import the MainSection component
import HeroSection from "./components/HeroSection/HeroSection"; // Import the HeroSection component
import ContactForm from "./components/ContactForm/ContactForm";
import ServiceContent from "./components/ServiceContent/ServiceContent";
import Footer from "./components/Footer/Footer";
import HomeCombined from "./components/HomeCombined/HomeCombined";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="dth-container">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomeCombined />} />
          <Route path="/employee-central" element={<ServiceContent />} />
        </Routes>
      </main>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
