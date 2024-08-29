import { useState } from "react";
import reactLogo from "./assets/react.svg";
import NavBar from "./components/NavBar/NavBar";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SiteDescription from "./components/SiteDescription/SiteDescription"; // Import the MainSection component
import HeroSection from "./components/HeroSection/HeroSection"; // Import the HeroSection component
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <NavBar />
      <SiteDescription />
      <HeroSection />
      <ContactForm />
      <Footer />
      <main>{/* Your main content goes here */}</main>
    </div>
  );
}

export default App;
