import img01 from "../assets/01.jpg";
import img02 from "../assets/02.jpg";
import img03 from "../assets/03.jpg";
import img04 from "../assets/04.jpg";
import img05 from "../assets/05.jpg";

export type CardItem = {
  title: string;
  description: string;
  image: any;
  alt: string;
  category: string;
  price: number;
};

export const cards: CardItem[] = [
  {
    title: "Colección Artesano",
    description: "Piezas hechas a mano, con acabados cuidados y duraderos.",
    image: img01,
    alt: "Colección artesanal en chaquira",
    category: "Colecciones",
    price: 12000,
  },
  {
    title: "Estilo Artístico",
    description:
      "Aretes y accesorios en chaquira con formas orgánicas y colores vivos.",
    image: img02,
    alt: "Aretes y accesorios en chaquira",
    category: "Aretes",
    price: 180,
  },
  {
    title: "Detalle y Elegancia",
    description: "Obtén un accesorio de calidad para ti y tus amigos.",
    image: img03,
    alt: "Detalle y elegancia",
    category: "Collares",
    price: 220,
  },
  {
    title: "Materiales y técnicas",
    description:
      "Chaquira, hilos resistentes y herrajes dorados; técnica tradicional con toque contemporáneo.",
    image: img04,
    alt: "Materiales y técnicas",
    category: "Pulseras",
    price: 160,
  },
  {
    title: "Contacto",
    description:
      "Personalizamos piezas a tu estilo. Escríbenos para pedidos y colaboraciones.",
    image: img05,
    alt: "Contacto y experiencia",
    category: "Servicios",
    price: 0,
  },
];