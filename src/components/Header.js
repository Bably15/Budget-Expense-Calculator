import React from "react";

export const Header = ({ balance }) => {
  return (
    <>
      <h1>Expense Tracker</h1>
      <div class="container">
        <h4>Your Balance</h4>
        <h1 id="balance">{balance}</h1>
      </div>
    </>
  );
};
