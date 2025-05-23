import React, { useState } from "react";
import { CoopContext } from "../Context/Coopcontext";

export const CoopProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [balance, setBalance] = useState(10000);
  const [transactions, setTransactions] = useState<string[]>([]);

  const addFunds = () => {
    const amount = 500;
    setBalance(prev => prev + amount);
    logTransaction(`Deposited L.${amount}`);''
  };

  const transfer = (amount: number): boolean => {
    if (amount <= balance) {
      setBalance(prev => prev - amount);
      logTransaction(`Transferred L.${amount}`);
      return true;
    }
    return false;
  };

  const logTransaction = (entry: string) => {
    setTransactions(prev => [entry, ...prev].slice(0, 5));
  };

  return (
    <CoopContext.Provider value={{ balance, transactions, addFunds, transfer }}>
      {children}
    </CoopContext.Provider>
  );
};
