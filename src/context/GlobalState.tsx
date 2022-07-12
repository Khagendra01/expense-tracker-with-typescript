import React, { createContext, useState, useContext, useReducer } from 'react';
import { stateTransactionType, TransactionType, dispatchType } from '../components/TransactionType'
import AppReducer from './AppReducer';


// Create context
type transContext = {
  transactions: TransactionType[]
  addTransaction : (transaction:TransactionType) => void,
  deleteTransaction : (transaction:TransactionType) => void
}

const initialState: stateTransactionType = {
  transactions: []
}

export const GlobalContext = createContext({} as transContext);

export function useTranContext(){
  return useContext(GlobalContext);
}

type globalType = {
  children: React.ReactNode
}

// Provider component
export const GlobalProvider = ({ children }:globalType) => {

  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions
  function deleteTransaction(transaction:TransactionType){
    dispatch({type: dispatchType.DEL, payload: transaction})
  }

  function addTransaction(transaction: TransactionType){
    dispatch({type: dispatchType.ADD, payload: transaction})
  }

  return (<GlobalContext.Provider value={{
    transactions: state.transactions,
    deleteTransaction,
    addTransaction
  }}>
    {children}
  </GlobalContext.Provider>);
}