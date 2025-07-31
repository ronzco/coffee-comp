// ============================
// 📁 Aset Gambar
// ============================
const Hero1 = "/assets/hero/hero1.webp";
const Hero2 = "/assets/hero/hero2.webp";
const Hero3 = "/assets/hero/hero3.webp";
const Hero4 = "/assets/hero/hero4.webp";
const Hero5 = "/assets/hero/hero5.webp";
const Hero6 = "/assets/hero/hero6.webp";
const Hero7 = "/assets/hero/hero7.webp";
const Hero8 = "/assets/hero/hero8.webp";
const Hero9 = "/assets/hero/hero9.webp";
const Hero10 = "/assets/hero/hero10.webp";
const Hero11= "/assets/hero/hero11.webp";
// langsung string path


import Menu1 from "/assets/menu/menu1.png";
import Menu2 from "/assets/menu/menu2.png";
import Menu3 from "/assets/menu/menu3.png";
import Menu4 from "/assets/menu/menu4.png";
import Menu5 from "/assets/menu/menu5.png";
import Menu6 from "/assets/menu/menu6.png";
import Menu7 from "/assets/menu/menu7.png";
import Menu8 from "/assets/menu/menu8.png";
import Menu9 from "/assets/menu/menu9.png";
import Menu10 from "/assets/menu/menu10.png";
import Menu11 from "/assets/menu/menu11.png";
import Menu12 from "/assets/menu/menu12.png";
import Menu13 from "/assets/menu/menu13.svg";

// ============================
// 📄 Interface
// ============================
export interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

export interface MenuItem {
  id: number;
  image: string;
  name: string;
  description: string;
  price: string;
}

// ============================
// 🎞 Hero Slider
// ============================
export const heroSlides: HeroSlide[] = [
  {
    id: 1,
    image: Hero1,
    // image: "/assets/hero/hero1.webp",
    title: "Kopi Nusantara",
    subtitle: "Rasa otentik dari biji kopi lokal terbaik",
  },
  {
    id: 2,
    image: Hero2,
    // image: "/assets/hero/hero2.webp",
    title: "Cita Rasa Kopi Asli",
    subtitle: "Temukan kenikmatan dalam setiap tegukan",
  },
  {
    id: 3,
    image: Hero3,
    // image: "/assets/hero/hero3.webp",
    title: "Aroma yang Membekas",
    subtitle: "Kopi kami, semangat harimu",
  },
  {
    id: 4,
    image: Hero4,
    // image: "/assets/hero/hero4.webp",
    title: "Aroma yang Membekas",
    subtitle: "Kopi kami, semangat harimu",
  },
  {
    id: 5,
    image: Hero5,
    // image: "/assets/hero/hero5.webp",
    title: "Aroma yang Membekas",
    subtitle: "Kopi kami, semangat harimu",
  },
  {
    id: 6,
    image: Hero6,
    // image: "/assets/hero/hero6.webp",
    title: "Aroma yang Membekas",
    subtitle: "Kopi kami, semangat harimu",
  },
  {
    id: 7,
    image: Hero7,
    // image: "/assets/hero/hero7.webp",
    title: "Aroma yang Membekas",
    subtitle: "Kopi kami, semangat harimu",
  },
  {
    id: 8,
    image: Hero8,
    // image: "/assets/hero/hero8.webp",
    title: "Aroma yang Membekas",
    subtitle: "Kopi kami, semangat harimu",
  },
  {
    id: 9,
    image: Hero9,
    // image: "/assets/hero/hero9.webp",
    title: "Aroma yang Membekas",
    subtitle: "Kopi kami, semangat harimu",
  },
  {
    id: 10,
    image: Hero10,
    // image: "/assets/hero/hero10.webp",
    title: "Aroma yang Membekas",
    subtitle: "Kopi kami, semangat harimu",
  },
  {
    id: 11,
    image: Hero11,
    // image: "/assets/hero/hero11.webp",
    title: "Aroma yang Membekas",
    subtitle: "Kopi kami, semangat harimu",
  },
];

// ============================
// ☕ Menu Produk
// ============================
export const menuItems: MenuItem[] = [
  {
    id: 1,
    image: Menu1,
    name: "Kopi Susu Gula Aren",
    description: "Perpaduan kopi robusta dan manisnya gula aren",
    price: "Rp 20.000",
  },
  {
    id: 2,
    image: Menu2,
    name: "Espresso",
    description: "Kopi hitam pekat untuk pecinta rasa kuat",
    price: "Rp 15.000",
  },
  {
    id: 3,
    image: Menu3,
    name: "Cappuccino",
    description: "Kopi dengan susu dan foam yang lembut",
    price: "Rp 18.000",
  },
  {
    id: 4,
    image: Menu4,
    name: "Latte",
    description: "Kopi ringan dengan susu steamed",
    price: "Rp 18.000",
  },
  {
    id: 5,
    image: Menu5,
    name: "Americano",
    description: "Espresso dengan tambahan air panas",
    price: "Rp 16.000",
  },
  {
    id: 6,
    image: Menu6,
    name: "Mochaccino",
    description: "Kopi dengan cokelat dan susu",
    price: "Rp 20.000",
  },
  {
    id: 7,
    image: Menu7,
    name: "Affogato",
    description: "Es krim vanilla disiram espresso",
    price: "Rp 22.000",
  },
  {
    id: 8,
    image: Menu8,
    name: "Cold Brew",
    description: "Kopi diseduh dingin selama 8 jam",
    price: "Rp 21.000",
  },
  {
    id: 9,
    image: Menu9,
    name: "Es Kopi Susu",
    description: "Kopi susu dingin untuk cuaca panas",
    price: "Rp 18.000",
  },
  {
    id: 10,
    image: Menu10,
    name: "Kopi Tubruk",
    description: "Cara tradisional seduh kopi Indonesia",
    price: "Rp 14.000",
  },
  {
    id: 11,
    image: Menu11,
    name: "Es Kopi Hitam",
    description: "Kopi hitam dingin tanpa gula",
    price: "Rp 15.000",
  },
  {
    id: 12,
    image: Menu12,
    name: "Cappuccino Dingin",
    description: "Cappuccino versi es",
    price: "Rp 18.000",
  },
  {
    id: 13,
    image: Menu13,
    name: "Manual Brew",
    description: "Kopi dengan metode V60 / French Press",
    price: "Rp 19.000",
  },
];
