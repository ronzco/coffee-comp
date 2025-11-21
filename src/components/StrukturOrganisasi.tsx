const StrukturOrganisasi = () => {
  return (
    <section
      id="struktur-organisasi"
      className="py-20 px-6 bg-gray-50 text-gray-800"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-10">
          Struktur Organisasi
        </h2>
        <p className="text-lg leading-relaxed text-center mb-6">
          Struktur organisasi kami dirancang untuk efisiensi dan kolaborasi
          antar tim.
        </p>

        {/* Struktur Organisasi secara hirarki sederhana */}
        <div className="flex flex-col items-center space-y-4">
          <div className="text-xl font-semibold">CEO</div>
          <div className="border-l-4 border-gray-400 h-4"></div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="font-semibold">Manajer Operasional</div>
              <div className="text-sm text-gray-600">
                Mengatur proses bisnis harian
              </div>
            </div>
            <div>
              <div className="font-semibold">Manajer Pemasaran</div>
              <div className="text-sm text-gray-600">
                Strategi promosi & branding
              </div>
            </div>
            <div>
              <div className="font-semibold">Manajer Produksi</div>
              <div className="text-sm text-gray-600">
                Kontrol kualitas & penyajian kopi
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrukturOrganisasi;
