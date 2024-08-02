import Image from "next/image";
import styles from "./product-detail.module.css";
import { Product } from "@repo/types/products";
import Link from "next/link";

export default function ProductDetail({
  product,
  showInventory,
}: {
  product: Product;
  showInventory?: boolean;
}) {
  return (
    <div className={styles.details}>
      <div className={styles.textContainer}>
        <h3>
          <Link href={`/products/${product.sku}`}>{product.name}</Link>
        </h3>
        <p>Price: {product.price}</p>

        {showInventory && <p>Available: {product.inventory_count}</p>}
      </div>
      <div className={styles.imageContainer}>
        <Link href={`/products/${product.sku}`}>
          <Image
            alt={product.name}
            src={product.image_main.url}
            style={{
              width: "auto",
              height: "300px",
            }}
            width={300}
            height={200}
          />
        </Link>
      </div>
    </div>
  );
}
