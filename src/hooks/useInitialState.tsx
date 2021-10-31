import { RangeNum } from "src/interfaces/products";
import { initialState } from "src/initialState";
import { useState } from "react";
import { urlMaker } from "src/utils/lib/urlMaker";

export const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const searchWord = (_payload: { name: string; value: string }) => {
    setState({
      ...state,
      [`${_payload.name}`]: _payload.value,
    });
  };

  const searchPriceRange = (_payload: RangeNum) => {
    setState({
      ...state,
      priceRangeFrom: _payload.from,
      priceRangeTo: _payload.to,
    });
  };

  const searchRateRange = (_payload: RangeNum) => {
    setState({
      ...state,
      rateRangeFrom: _payload.from,
      rateRangeTo: _payload.to,
    });
  };

  const switcher = async () => {
    try {
      const urlFetch: string = await urlMaker(state);
      await setState({
        ...state,
        urlFetch,
      });
    } catch (err) {
      throw new Error("Erro: URL failure");
    }
  };

  return {
    state,
    searchWord,
    searchPriceRange,
    searchRateRange,
    switcher,
    setState,
  };
};
