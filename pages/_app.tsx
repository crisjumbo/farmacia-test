import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { AppContextProvider } from "../src/hooks/useAppContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
