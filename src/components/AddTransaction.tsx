import React, {useState, useContext, useEffect} from 'react'
import { GlobalContext } from '../context/GlobalState';
import { TransactionType } from './TransactionType';
import { useTranContext } from '../context/GlobalState';

export const AddTransaction = () => {
  const [text, setText] = useState('');

  const [amount, setAmount] = useState(0);

  const { addTransaction } = useTranContext();

  const onSubmit = () => {
    const newTransaction: TransactionType = {
      id: Math.floor(Math.random() * 100000000),
      text,
      amount: amount
    }
    addTransaction(newTransaction);
    setText("")
  }


  return (
    <>
      <h3>Add new transaction</h3>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input type="text" value={text} onChange={(e) => setText(e.target.value.toString())} placeholder="Enter text..." />
        </div>
        <div className="form-control">
          <label htmlFor="amount"
            >Amount <br />
            (negative - expense, positive - income)</label
          >
          <input type="number" onChange={(e) => setAmount(+e.target.value)} placeholder="Enter amount..." />
        </div>
        <button className="btn" onClick={() => onSubmit()}>Add transaction</button>
    </>
  )
}
