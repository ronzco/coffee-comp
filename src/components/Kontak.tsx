const Kontak = () => {
  return (
    <section id="kontak" className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">Hubungi Kami</h2>
        <p className="text-lg mb-6">
          Kami siap menjawab pertanyaan atau menerima masukan dari Anda.
        </p>
        <div className="grid gap-6 md:grid-cols-2 text-left">
          <div>
            <h3 className="font-semibold text-xl mb-2">Alamat</h3>
            <p>
              Jl. Kopi Sejati No. 123
              <br />
              Bandung, Jawa Barat, Indonesia
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-xl mb-2">Kontak</h3>
            <p>
              Email:{" "}
              <a
                href="mailto:info@kopisejati.id"
                className="text-blue-600 underline"
              >
                info@kopisejati.id
              </a>
            </p>
            <p>Telepon: +62 812-3456-7890</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Kontak;
