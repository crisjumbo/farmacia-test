
export interface Product {
  id?:number;
  image_link?:string;
  name?:string;
  price?: number | string;
  price_sign?: string;
  rating?:number | string;
  brand?:string;
  product_type?:string;
}

export interface UseSearchItem {
 query?:string;
 filteredItems?: Product[];
 setQuery?:()=> string;
}

export interface RangeNum {
  from?: number;
  to?: number;
}

export interface InitialState {
    brand?: string;
    productType?: string;
    name?:string;
    priceRangeFrom?: number;
    priceRangeTo?: number;
    rateRangeFrom?: number;
    rateRangeTo?:number; 
    switch?: boolean;
    urlFetch?: string;
}