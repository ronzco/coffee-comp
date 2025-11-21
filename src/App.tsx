import Footer from "./components/Footer";
import Hero from "./components/Hero";
import StrukturOrganisasi from "./components/StrukturOrganisasi";
import Kontak from "./components/Kontak";
import Pencapaian from "./components/Pencapaian";
import Profil from "./components/Profil.tsx";
import Menu from "./components/StrukturOrganisasi.tsx";
import Lokasi from "./components/Lokasi.tsx";
import Navbar from "./components/Navbar.tsx";
import Preloader from "./components/Preloader.tsx";

function App() {
  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <Profil />
      <Menu />
      <Lokasi />
      <StrukturOrganisasi />
      <Kontak />
      <Pencapaian />
      <Footer />
    </>
  );
}

export default App;
