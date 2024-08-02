import { getXataClient } from "../../../xata";

export async function GET(
  _request: Request,
  { params }: { params: { sku: string } },
) {
  const xata = getXataClient();
  try {
    const product = await xata.db["inventory-products"].getFirstOrThrow({
      filter: { sku: params.sku },
    });
    return Response.json([product]);
  } catch (e) {
    Response.json({ sku: params.sku }, { status: 404 });
  }
}

export async function PUT(
  request: Request,
  { params }: { params: { sku: string } },
) {
  const res = await request.json();
  if (res.action !== "reserve") {
    return new Response("action: reserved is the only support action", {
      status: 400,
    });
  }

  const product = PRODUCTS.find((product) => {
    return product.sku === params.sku;
  });

  if (product!.inventory_count === 0) {
    return new Response("Out of stock", { status: 400 });
  }

  ++product!.reserve_count;
  --product!.inventory_count;

  // TODO: persist

  Response.json(product);
}
