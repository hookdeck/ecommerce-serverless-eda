import { Product } from "@repo/types/products";

export async function getProducts({
  sku,
}: {
  sku?: string;
}): Promise<Product | Product[]> {
  const url = sku
    ? `http://localhost:3001/products/${sku}`
    : "http://localhost:3001/products";
  const res = await fetch(url);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
