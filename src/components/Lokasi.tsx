const Lokasi = () => {
  return (
    <section className="py-16 px-4 bg-white text-center" id="lokasi">
      <h2 className="text-3xl text-black font-bold mb-4">📍 Lokasi Kami</h2>
      <p className="mb-2 text-gray-700">
        Kunjungi kedai kopi kami dan rasakan langsung suasananya!
      </p>
      <p className="mb-6 font-medium text-gray-600">
        Jl. Kopi Sejati No. 123, Bandung, Indonesia
      </p>

      <div className="mx-auto w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-md">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63384.03175263066!2d107.5731166!3d-6.9034494!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6fdfb7efb87%3A0x105b0b624e4adcb6!2sBandung%2C%20Kota%20Bandung!5e0!3m2!1sid!2sid!4v1656914465172!5m2!1sid!2sid"
          className="w-full h-full"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <a
        href="https://goo.gl/maps/PetaKedai"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-4 px-6 py-2 bg-primary text-black rounded-lg shadow hover:bg-opacity-90 transition"
      >
        Lihat di Google Maps
      </a>
    </section>
  );
};

export default Lokasi;
