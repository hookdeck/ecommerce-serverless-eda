import styles from "./page.module.css";
import ProductDetail from "../../ui/product-detail";
import { getProducts } from "../../utils";
import { Product } from "@repo/types/products";

export default async function Home({ params }: { params: { id: string } }) {
  // TODO: get order from the DB from the params.id value
  // TODO: get product fropm the DB based on the SKU in the order
  return (
    <>
      <h2>Order: {params.id}</h2>

      <p>Lots to do here for order: {params.id}</p>

      {/* <ProductDetail product={product} showInventory={true} /> */}
    </>
  );
}
