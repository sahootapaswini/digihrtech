import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import NavBar from "./components/NavBar/NavBar";
import ContactForm from "./components/ContactForm/ContactForm";
import Footer from "./components/Footer/Footer";
import HomeCombined from "./components/HomeCombined/HomeCombined";
import ServiceContent from "./components/ServiceContent/ServiceContent";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="dth-container">
      <NavBar />
      <main>
        <Routes>
          <Route path="/" element={<HomeCombined />} />
          <Route path="/solutions/*" element={<ServiceContent />} />
        </Routes>
      </main>
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;
