import { useEffect, useState } from "react";
import { heroSlides } from "../data";

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000); // ganti slide setiap 5 detik

    return () => clearInterval(interval); // clear on unmount
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {heroSlides.map((item) => (
          <div key={item.id} className="w-full flex-shrink-0 h-screen relative">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-20 flex flex-col justify-center items-center text-white text-center px-4">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                {item.title}
              </h1>
              <p className="text-lg md:text-xl">{item.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
