import React from "react";

export const Transactionlist = ({ transactions }) => {
  // console.log(transaction);
  return (
    <div>
      {" "}
      <h3>History</h3>
      <ul className="list">
        {transactions.map((item, index) => (
          <li className="minus">
            {item.text} <span>{item.amount}</span>
            <button className="delete-btn">x</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
