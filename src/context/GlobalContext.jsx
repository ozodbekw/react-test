import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  return (
    <GlobalContext.Provider value={"Hello"}>{children}</GlobalContext.Provider>
  );
}
