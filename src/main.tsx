import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "animate.css";

import Navbar from "./components/Navbar.tsx";
import Footer from "./components/Footer.tsx";
import "remixicon/fonts/remixicon.css";
import Preloader from "./components/Preloader.tsx";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Preloader />
    <div className="container mx-auto px-4">
      <Navbar />
      <App />
      <Footer />
    </div>
  </StrictMode>
);
