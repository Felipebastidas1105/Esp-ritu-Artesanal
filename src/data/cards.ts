import img01 from "../assets/01.jpg";
import img02 from "../assets/02.jpg";
import img03 from "../assets/03.jpg";
import img04 from "../assets/04.jpg";
import img05 from "../assets/05.jpg";
import type { Product } from "../types/product";

export const cards: Product[] = [
  {
    title: "Collar Artesano",
    description: "Piezas hechas a mano, con acabados cuidados y duraderos.",
    image: img01,
    alt: "Colección artesanal en chaquira",
    category: "Collares",
    price: 12000,
  },
  {
    title: "Aretes cortos",
    description:
      "Aretes cortos con formas orgánicas y colores vivos.",
    image: img02,
    alt: "Aretes cortos",
    category: "Aretes",
    price: 12000,
  },
  {
    title: "Aretes cortos",
    description: "Aretes cortos con formas orgánicas y colores vivos.",
    image: img03,
    alt: "Detalle y elegancia",
    category: "Aretes",
    price: 12000,
  },
  {
    title: "Aretes cortos",
    description:
      "Aretes cortos con formas orgánicas y colores vivos.",
    image: img04,
    alt: "Materiales y técnicas",
    category: "Aretes",
    price: 12000,
  },
  {
    title: "Aretes largos",
    description:
      "Aretes largos con formas orgánicas y colores vivos.",
    image: img05,
    alt: "Contacto y experiencia",
    category: "Aretes",
    price: 12000,
  },
];