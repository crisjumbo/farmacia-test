
export interface Product {
  id?:number;
  image_link?:string;
  name?:string;
  price?:string;
  rating?:string;
  brand?:string;
  product_type?:string;
}

export type Data = Product[]; 

export interface UseSearchItem {
 query?:string;
 filteredItems?: Product[];
 setQuery?:()=> string;
}