const Profil = () => {
  return (
    <section id="profil" className="py-20 px-6 bg-white text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 text-center text-black">
          Profil Perusahaan
        </h2>

        {/* Jenis Bisnis */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Jenis Bisnis</h3>
          <p>
            Kami adalah perusahaan di bidang food & beverage yang berfokus pada
            produksi dan penyajian kopi berkualitas dari biji kopi lokal terbaik
            Indonesia. Kami mengoperasikan kedai kopi modern dengan nuansa
            tradisional yang hangat.
          </p>
        </div>

        {/* Visi & Misi */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Visi & Misi</h3>
          <p className="mb-1">
            <strong>Visi:</strong> Menjadi brand kopi lokal nomor satu yang
            dikenal di seluruh Indonesia dan mancanegara.
          </p>
          <p>
            <strong>Misi:</strong>
          </p>
          <ul className="list-disc list-inside ml-4">
            <li>Menyediakan kopi dengan kualitas dan cita rasa terbaik.</li>
            <li>Mendukung petani kopi lokal untuk berkembang.</li>
            <li>
              Menghadirkan pengalaman minum kopi yang berkesan bagi pelanggan.
            </li>
          </ul>
        </div>

        {/* Sejarah */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">Sejarah Perusahaan</h3>
          <p>
            Perusahaan kami didirikan pada tahun 2020 oleh sekelompok pecinta
            kopi yang ingin mengangkat potensi kopi Nusantara ke tingkat yang
            lebih tinggi. Berawal dari sebuah kedai kecil di Bandung, kini kami
            telah berkembang menjadi jaringan kedai dan distribusi kopi.
          </p>
        </div>

        {/* Nilai-Nilai */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-2">
            Nilai-Nilai Perusahaan
          </h3>
          <ul className="list-disc list-inside ml-4">
            <li>Kualitas</li>
            <li>Kejujuran</li>
            <li>Inovasi</li>
            <li>Kepedulian Sosial</li>
            <li>Kolaborasi</li>
          </ul>
        </div>

        {/* Pendirian */}
        <div className="mb-4">
          <h3 className="text-2xl font-semibold mb-2">Pendirian Perusahaan</h3>
          <p>
            Didirikan oleh Roni Koswara dan timnya, perusahaan ini lahir dari
            kecintaan terhadap kopi dan keinginan untuk memberdayakan petani
            lokal. Visi mereka adalah menjadikan kopi Indonesia dikenal dunia,
            dan misi mereka diwujudkan melalui brand ini.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profil;
