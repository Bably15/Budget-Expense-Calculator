import { React, useEffect, useState } from "react";

export const Addtransaction = ({ incomingTransaction }) => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleAmountChange = (e) => {
    setAmount(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    incomingTransaction(text, parseInt(amount));

    setAmount(0);
    setText("");
  };

  // const test = () => {
  //   console.log("test successful");
  // };
  // useEffect(() => {
  //   console.log("test successful");
  // }, []);
  // test();

  return (
    <div>
      <h3>Add new transaction</h3>
      <form onSubmit={onSubmitHandler}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={handleTextChange}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Amount <br />
            (negative - expense, positive - income)
          </label>
          <input
            type="number"
            value={amount}
            onChange={handleAmountChange}
            placeholder="Enter amount..."
          />
        </div>
        <button className="btn btn-warning" type="submit">
          Add transaction
        </button>
      </form>
    </div>
  );
};
