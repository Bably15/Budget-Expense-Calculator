import "./App.css";
import { useState, useEffect } from "react";
import { Header } from "./components/Header";

import { IncomeExpensesBalance } from "./components/IncomeExpensesBalance";
import { Transactionlist } from "./components/Transactionlist";
import { Addtransaction } from "./components/Addtransaction";
function App() {
  const [transactions, setTransations] = useState([]);
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
      // balance = totalIncome + totalExpenses;
    });
    setTotalIncome(totalIncome);
    setTotalExpenses(totalExpenses);
    // setBalance(balance);
  }, [transactions]);

  // console.log(balance);

  const incomingTransaction = (text, amount) => {
    setTransations([
      ...transactions,
      {
        text,
        amount,
      },
    ]);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <IncomeExpensesBalance
          totalIncome={totalIncome}
          totalExpenses={totalExpenses}
          // balance={balance}
        />
        <Transactionlist transactions={transactions} />
        <Addtransaction incomingTransaction={incomingTransaction} />
      </div>
    </div>
  );
}

export default App;
