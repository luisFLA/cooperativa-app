export interface CoopContextType {
  balance: number;
  transactions: string[];
  addFunds: () => void;
  transfer: (amount: number) => boolean;
}