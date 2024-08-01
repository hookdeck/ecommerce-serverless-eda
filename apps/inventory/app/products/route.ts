import PRODUCTS from "./products.json";

export async function GET() {
  return Response.json(PRODUCTS);
}
