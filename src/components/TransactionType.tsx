import { Dispatch } from 'react';

export interface GlobalStateInterface {
  isUserAuthenticated: boolean;
  loggedUser: string;
  persistenceType: string;
}

export type ActionType = {
  type: dispatchType;
  payload: TransactionType;
};

export type ContextType = {
  globalState: GlobalStateInterface;
  dispatch: Dispatch<ActionType>;
};

export type stateTransactionType = {
  transactions: TransactionType[]
}

export type TransactionType = {
    id:number,
    text:string,
    amount:number
}

export enum dispatchType {
  ADD = "addIt",
  DEL = "delIt"
}

export type transContext = {
  transactions: TransactionType[]
  addTransaction : (transaction:TransactionType) => void,
  deleteTransaction : (transaction:TransactionType) => void
}