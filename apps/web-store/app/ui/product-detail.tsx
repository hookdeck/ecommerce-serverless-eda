import styles from "./product-detail.module.css";
import { Product } from "@repo/types/products";

export default function ProductDetail({
  product,
  showInventory,
}: {
  product: Product;
  showInventory?: boolean;
}) {
  return (
    <div className={styles.details}>
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>

      {showInventory && <p>Available: {product.inventory_count}</p>}
    </div>
  );
}
