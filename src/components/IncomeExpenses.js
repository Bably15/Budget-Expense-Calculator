import React, { useEffect, useState } from "react";

export const IncomeExpenses = ({ totalIncome, totalExpenses }) => {
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-minus" className="money minus">
          {totalIncome}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          {totalExpenses}
        </p>
      </div>
    </div>
  );
};
