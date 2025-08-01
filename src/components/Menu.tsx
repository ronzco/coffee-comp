import { useRef } from "react";
import { menuItems } from "../data";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Menu = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = 300;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section id="menu" className="py-20 text-center relative">
      <h2 className="text-3xl font-bold mb-8 text-white">Menu Kami</h2>

      {/* Tombol Kiri */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 z-20 bg-gray-300 p-2 shadow-md rounded-full hover:bg-gray-600"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Container Scroll */}
      <div className="overflow-hidden relative px-10">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto scroll-smooth scrollbar-hide w-full"
        >
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="w-[min(80vw,16rem)] flex-shrink-0 bg-gray-200 rounded-2xl shadow-md overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-left">
                <h3 className="text-lg text-black font-semibold mb-1">{item.name}</h3>
                <p className="text-black text-sm mb-2">{item.description}</p>
                <p className="text-black font-bold">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tombol Kanan */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 z-20 bg-gray-300 p-2 shadow-md rounded-full hover:bg-gray-600"
      >
        <ChevronRight size={24} />
      </button>
    </section>
  );
};

export default Menu;
