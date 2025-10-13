export type Product = {
  title: string;
  description: string;
  // Astro importa imágenes estáticas como objetos con `src`
  image: { src: string } & Record<string, unknown>;
  alt: string;
  category: string;
  price: number;
};

export type Category = string;