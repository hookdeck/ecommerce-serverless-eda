import PRODUCTS from "../products.json";

export async function GET(
  _request: Request,
  { params }: { params: { sku: string } },
) {
  const product = PRODUCTS.find((product) => {
    return product.sku === params.sku;
  });
  return Response.json(product);
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
