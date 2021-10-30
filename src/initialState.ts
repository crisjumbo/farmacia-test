import { InitialState } from "./interfaces/products";

export const initialState: InitialState = {
    brand: '',
    productType: '',
    name: '',
    priceRangeFrom: 0,
    priceRangeTo: 0,
    rateRangeFrom: 0,
    rateRangeTo: 0,
    urlFetch: process.env.NEXT_PUBLIC_ENDPOINT || '',
}