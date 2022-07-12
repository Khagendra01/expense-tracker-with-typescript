import { ActionType, dispatchType, stateTransactionType } from "../components/TransactionType";

export default (state: stateTransactionType, action: ActionType) => {
  console.log(action.payload)
    switch(action.type) {
      case dispatchType.DEL:
        return {
          ...state,
          transactions: state.transactions.filter(transaction => transaction.id !== action.payload.id)
        }
      case dispatchType.ADD:
      
        return {
          ...state,
          transactions: [action.payload, ...state.transactions]
        }
      default:
        return state;
    }
  }