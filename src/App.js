import "./App.css";
import { useState, useEffect } from "react";
import { Header } from "./components/Header";

import { IncomeExpenses } from "./components/IncomeExpenses";
import { Transactionlist } from "./components/Transactionlist";
import { Addtransaction } from "./components/Addtransaction";
function App() {
  const [transactions, setTransactions] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);
  const [balance, setBalance] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);

  useEffect(() => {
    let totalIncome = 0;
    let totalExpenses = 0;
    let balance = 0;

    transactions.forEach((transaction) => {
      if (transaction.amount > 0) {
        totalIncome += transaction.amount;
      } else {
        totalExpenses += transaction.amount;
      }
      balance = totalIncome + totalExpenses;
    });
    setTotalIncome(totalIncome);
    setTotalExpenses(totalExpenses);
    setBalance(balance);
  }, [transactions]);

  console.log(transactions);

  const incomingTransaction = (text, amount) => {
    let id = Math.random();

    setTransactions([
      ...transactions,
      {
        text,
        amount,
        id,
      },
    ]);
  };

  return (
    <div>
      <Header balance={balance} />
      <div className="container">
        <IncomeExpenses
          totalIncome={totalIncome}
          totalExpenses={totalExpenses}
        />
        <Transactionlist
          transactions={transactions}
          setTransactions={setTransactions}
        />
        <Addtransaction incomingTransaction={incomingTransaction} />
      </div>
    </div>
  );
}

export default App;
