import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Tentang from "./components/Tentang";
import Menu from "./components/Menu";
import Lokasi from "./components/Lokasi.tsx";
import Navbar from "./components/Navbar.tsx";
import Preloader from "./components/Preloader.tsx";

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <Tentang />
      <Menu />
      <Lokasi />
      <Footer />
    </>
  );
}

export default App;
