import ProductDetail from "../../ui/product-detail";
import { getProducts } from "../../utils";
import { Product } from "@repo/types/products";
import { getXataClient } from "../../../xata";

import { notFound } from "next/navigation";

export default async function Home({ params }: { params: { id: string } }) {
  const xata = getXataClient();

  const order = await xata.db["webstore-orders"].getFirst({
    filter: { id: params.id },
  });

  if (order === null) {
    notFound();
  }

  const product = (await getProducts({ sku: order.sku! })) as Product;

  return (
    <>
      <h2>Order: {params.id}</h2>
      <p>Status: {order.status!.toUpperCase()}</p>

      <ProductDetail product={product} showInventory={false} />
      <table>
        <tbody>
          <tr>
            <td>Name:</td>
            <td>{order.full_name}</td>
          </tr>
          <tr>
            <td>Email:</td>
            <td>{order.email}</td>
          </tr>
          <tr>
            <td>Date Ordered:</td>
            <td>{order.xata.createdAt.toLocaleDateString()}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
