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
  inventory_count: number;
}
