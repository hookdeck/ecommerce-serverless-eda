import styles from "./page.module.css";
import { Product } from "@repo/types/products";
import Link from "next/link";
import ProductDetail from "./ui/product-detail";

async function getProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:3001/products");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const products = await getProducts();
  return (
    <>
      <ul>
        {products.map((product: Product) => {
          return (
            <li key={product.sku} className={styles.product}>
              <ProductDetail product={product} showInventory={true} />

              <div className={styles.actions}>
                <Link
                  className={styles.primary}
                  href={`/product/${product.sku}`}
                >
                  Learn more
                </Link>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
