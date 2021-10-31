import { InitialState } from "src/interfaces/products";

  export const urlMaker = (state: InitialState) => {
    const varArr = [
      "name",
      "brand",
      "product_type",
      "price_greater_than",
      "price_less_than",
      "rating_greater_than",
      "rating_less_than",
    ];
    const valArr = [
      state.name,
      state.brand,
      state.productType,
      state.priceRangeFrom,
      state.priceRangeTo,
      state.rateRangeFrom,
      state.rateRangeTo,
    ];
    let urlFetch = process.env.NEXT_PUBLIC_ENDPOINT || "";
    let i = 0;
    let flag = 1;
    while (i < valArr.length) {
      if (valArr[i] && flag) {
        urlFetch = urlFetch.concat(`?${varArr[i]}=${valArr[i]?.toString()}`);
        flag = 0;
      } else if (valArr[i] && !flag)
        urlFetch = urlFetch.concat(`&${varArr[i]}=${valArr[i]}`);
      i++;
    }
    return urlFetch;
  };