import { Product } from "@repo/types/products";

export async function getProducts(query?: {
  sku?: string;
}): Promise<Product[]> {
  const url = query
    ? `http://localhost:3001/products/${query.sku}`
    : "http://localhost:3001/products";
  const res = await fetch(url);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  const json = await res.json();
  console.log("Products fetched:", JSON.stringify(json, null, 2));

  const products: Product[] = [];
  json.forEach((product: any) => {
    products.push({
      sku: product.sku,
      name: product.name,
      price: product.price,
      inventory_count: product.inventory_count,
      reserve_count: product.reserve_count,
      type: product.type,
      meta: product.meta,
      image_main: {
        url: product.image_main[0].url,
        width: product.image_main[0].attributes.width,
        height: product.image_main[0].attributes.height,
      },
    });
  });

  return products;
}
