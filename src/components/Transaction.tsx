import { useTranContext } from '../context/GlobalState';

//Money formatter function
function moneyFormatter(num: number) {
  let p = num.toFixed(2).split('.');
  return (
    '$ ' +
    p[0]
      .split('')
      .reverse()
      .reduce(function (acc, num, i, orig) {
        return num === '-' ? acc : num + (i && !(i % 3) ? ',' : '') + acc;
      }, '') +
    '.' +
    p[1]
  );
}

export const Transaction = ({ transaction }:any) => {
  const { deleteTransaction } = useTranContext();

  const sign = transaction.amount < 0 ? '-' : '+';

  return (
    <li className={transaction.amount < 0 ? 'minus' : 'plus'}>
      {transaction.text} <span>{sign}{moneyFormatter(transaction.amount)}</span><button onClick={() => deleteTransaction(transaction)} className="delete-btn">x</button>
    </li>
  )
}
