import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
const Item = dynamic(() => import("./Item"));

import { useAppContext } from "src/hooks/useAppContext";
import { Product } from "src/interfaces/products";
import { GalleryLoader } from "./GalleryLoader";
import { Box, Text } from "@chakra-ui/layout";

const GalleryItems = () => {
  const [itemsArr, setItemsArr] = useState([]);
  const [error, setError] = useState(false);
  const { state }: any = useAppContext();

  useEffect(() => {
    (async function fetchItems() {
      try {
        console.log(state.urlFetch);
        const res = await fetch(state.urlFetch);
        const items = await res.json();
        if (items.length === 0) setError(true);
        setItemsArr(items);
      } catch (err) {
        throw new Error("Server Error");
      }
    })();
  }, [state.urlFetch]);
  return (
    <Box gap={3} display="grid" gridTemplateColumns="repeat(3, 1fr)" w="100%">
      {itemsArr.length != 0 ? (
        itemsArr?.map((product: Product) => (
          <Item key={product.id} {...product} />
        ))
      ) : !error ? (
        <GalleryLoader />
      ) : (
        <Text>No data found</Text>
      )}
    </Box>
  );
};

export default GalleryItems;
