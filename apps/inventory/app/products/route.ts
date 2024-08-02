import { getXataClient } from "../../xata";

export async function GET() {
  const xata = getXataClient();
  const products = await xata.db["inventory-products"].getAll();
  return Response.json(products);
}
