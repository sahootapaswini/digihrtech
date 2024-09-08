import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "./components/NavBar/NavBar";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import HomeCombined from "./components/HomeCombined/HomeCombined";
import SolutionsContent from "./components/SolutionsContent/SolutionsContent";
import BlogList from "./components/BlogList/BlogList";
import AboutUs from "./components/AboutUs/AboutUs";
import ServicesContent from "./components/ServicesContent/ServicesContent";
import PrivacyPolicy from "./components/PrivacyPolicy/PrivacyPolicy";
import Disclaimer from "./components/Disclaimer/Disclaimer";
import TermsofUse from "./components/TermsofUse/TermsofUse";
import HowWeDeliver from "./components/HowWeDeliver/HowWeDeliver";
import ContactButton from "./components/ContactButton/ContactButton";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="dth-container">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomeCombined />} />
          <Route path="/solutions/*" element={<SolutionsContent />} />
          <Route path="/services/*" element={<ServicesContent />} />
          <Route path="/about-us/*" element={<AboutUs />} />
          <Route path="/blogs/*" element={<BlogList />} />
          <Route path="/privacy-policy/*" element={<PrivacyPolicy />} />
          <Route path="/disclaimer/*" element={<Disclaimer />} />
          <Route path="/termsofuse/*" element={<TermsofUse />} />
          <Route path="/how-we-deliver/*" element={<HowWeDeliver />} />
        </Routes>
      </main>
      <ContactButton />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
