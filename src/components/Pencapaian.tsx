const Pencapaian = () => {
  return (
    <section id="pencapaian" className="py-20 px-6 bg-gray-100 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Pencapaian Kami
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold mb-2">🏆 Prestasi</h3>
            <ul className="list-disc list-inside text-lg leading-relaxed">
              <li>Juara 1 Festival Kopi Nasional 2022</li>
              <li>Terpilih UMKM Inspiratif 2023 oleh Kemenkop</li>
              <li>Sertifikasi Keamanan Pangan HACCP</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">📌 Milestone</h3>
            <ul className="list-disc list-inside text-lg leading-relaxed">
              <li>2018 – Didirikan di Bandung</li>
              <li>2020 – 50.000 cangkir kopi terjual</li>
              <li>2023 – Ekspansi ke 3 kota besar</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pencapaian;
