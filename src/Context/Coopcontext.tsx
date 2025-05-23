import { createContext } from "react";
import { CoopContextType } from "../Modelos/Tipos";

export const CoopContext = createContext<CoopContextType>({
  balance: 0,
  transactions: [],
  addFunds: () => {},
  transfer: () => false,
});
