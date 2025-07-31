import { menuItems } from "../data";

const Menu = () => {
  return (
    <section id="menu" className="bg-gray-100 py-20 px-4 text-center">
      <h2 className="text-3xl font-bold mb-8 text-black">Menu Kami</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-60 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <p className="text-green-600 font-bold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
