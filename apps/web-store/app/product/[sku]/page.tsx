import styles from "./page.module.css";
import ProductDetail from "../../ui/product-detail";
import { getProducts } from "../../utils";
import { Product } from "@repo/types/products";
import { redirect } from "next/navigation";

export default async function Home({ params }: { params: { sku: string } }) {
  async function createOrder(formData: FormData) {
    "use server";

    // TODO: persist order in web-store database
    const order = {
      id: Math.random().toString(36).substring(7), // TODO: use ID from database
      sku: formData.get("sku"),
      full_name: formData.get("full_name"),
      email: formData.get("email"),
    };

    console.log("Creating order:", order);

    // Trigger order event via Hookdeck to notify inventory service
    const orderEvent = {
      type: "order:request",
      data: {
        ...order,
      },
    };

    const orderPost = await fetch(process.env.HOOKDECK_ORDERS_URL!, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderEvent),
    });

    if (!orderPost.ok) {
      console.error("Failed to create order:", orderPost.statusText);
      return;
    }

    console.log("Order created successfully", await orderPost.json());

    redirect(`/order/${order.id}`);
  }

  const product = (await getProducts({ sku: params.sku })) as Product;
  return (
    <>
      <ProductDetail product={product} showInventory={true} />

      <div className={styles.payment}>
        <p>
          Enter your name and email to be sent the invoice with payment details
          and for the delivery of the digital product.
        </p>
        <form action={createOrder}>
          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            required
          />
          <input type="email" name="email" placeholder="Email" required />
          <input type="hidden" name="sku" value={product.sku} />
          <button className={styles.primary}>Order</button>
        </form>
      </div>
    </>
  );
}
