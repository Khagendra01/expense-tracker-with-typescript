import { Transaction } from './Transaction';

import { useTranContext } from '../context/GlobalState';

export const TransactionList = () => {
  const { transactions } = useTranContext();
  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
      </ul>
    </>
  )
}
