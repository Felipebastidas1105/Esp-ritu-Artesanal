import type { Product } from "../types/product";
import { cards } from "../data/cards";

export function getAllProducts(): Product[] {
  return cards;
}

export function getCategories(products: Product[]): string[] {
  return Array.from(new Set(products.map((p) => p.category)));
}

export function filterProducts(
  products: Product[],
  criteria: {
    name?: string;
    category?: string;
    minPrice?: number;
    maxPrice?: number;
  }
): Product[] {
  const name = (criteria.name || "").toLowerCase().trim();
  const category = criteria.category;
  const min = typeof criteria.minPrice === "number" ? criteria.minPrice : 0;
  const max = typeof criteria.maxPrice === "number" ? criteria.maxPrice : Number.MAX_VALUE;

  return products.filter((p) => {
    const matchesName = !name || p.title.toLowerCase().includes(name);
    const matchesCategory = !category || category === "Todas" || p.category === category;
    const matchesPrice = p.price >= min && p.price <= max;
    return matchesName && matchesCategory && matchesPrice;
  });
}