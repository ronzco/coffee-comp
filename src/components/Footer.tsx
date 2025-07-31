const Footer = () => {
  return (
    <div className="mt-32 py-6 flex flex-col md:flex-row justify-between items-center bg-[#1f1f1f] text-white px-4">
      <h1 className="text-2xl font-bold">Kopi Nusantara</h1>
      <div className="flex gap-7 mt-4 md:mt-0">
        <a href="#beranda">Beranda</a>
        <a href="#tentang">Tentang Kami</a>
        <a href="#menu">Menu</a>
        <a href="#lokasi">Lokasi</a>
        <a href="#kontak">Kontak</a>
      </div>
      <div className="flex items-center gap-3 mt-4 md:mt-0">
        <a href="https://instagram.com/ronzc01" aria-label="Instagram">
          <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a href="https://wa.me/6281297481382" aria-label="WhatsApp">
          <i className="ri-whatsapp-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;
