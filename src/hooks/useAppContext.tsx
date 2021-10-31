import { FC, createContext, useContext } from "react";
import { useInitialState } from "./useInitialState";

const AppContext = createContext({});

export const AppContextProvider: FC = ({ children }) => {
  const initialState = useInitialState();
  return (
    <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => {
  const stateApp = useContext(AppContext);

  if (!stateApp) throw new Error("Out of context");
  return stateApp;
};
