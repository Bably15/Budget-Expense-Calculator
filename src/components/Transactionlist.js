import React from "react";

export const Transactionlist = ({ transactions, setTransactions }) => {
  // console.log(transaction);
  const deleteTransactionHandler = (i) => {
    let a = transactions.filter((item) => item.id !== i);

    setTransactions(a);
  };

  return (
    <div>
      {" "}
      <h3>History</h3>
      <ul className="list">
        {transactions.map((item, index) => (
          <li className="minus">
            {item.text} <span>{item.amount}</span>
            <button
              className="delete-btn"
              onClick={() => deleteTransactionHandler(item.id)}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
