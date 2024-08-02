import styles from "./page.module.css";
import { Product } from "@repo/types/products";
import Link from "next/link";
import ProductDetail from "./ui/product-detail";
import { getProducts } from "./utils";

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
                  href={`/products/${product.sku}`}
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
