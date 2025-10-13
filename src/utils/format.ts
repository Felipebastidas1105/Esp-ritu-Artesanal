export function formatPrice(value: number, locale = "es-CO", currency = "COP"): string {
  try {
    return new Intl.NumberFormat(locale, { style: "currency", currency }).format(value);
  } catch {
    // Fallback simple si Intl falla
    return `$${value.toFixed(2)}`;
  }
}