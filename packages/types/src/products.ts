export interface Product {
  sku: string;
  name: string;
  type: string;
  price: string;
  meta: {
    authors: {
      full_name: string;
    }[];
  };
  image_main: {
    url: string;
    width: number;
    height: number;
  };
  inventory_count: number;
  reserve_count: number;
}
