import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { dateToString } from "../helper";

const TransactionsIndex = ({ transactions, total, setTotal }) => {
  const [textColorClass, setTextColorClass] = useState("");

  useEffect(() => {
    const newTotal = transactions.reduce((acc, transaction) => {
      if (transaction.transactionType === "withdrawal") {
        return acc - transaction.amount;
      } else {
        return acc + transaction.amount;
      }
    }, 0);

    setTotal(newTotal);
  }, [transactions]);

  useEffect(() => {
    if (total > 100) {
      setTextColorClass("text-green-600");
    } else if (total < 0) {
      setTextColorClass("text-red-500");
    } else {
      setTextColorClass("text-yellow-500");
    }
  }, [total]);

  return (
    <div className="bg-indigo-200">
      <div className="flex text-3xl p-8">
        <p>
          Bank Account Total: $<span className={textColorClass}>{total}</span>
        </p>
      </div>

      <div className="grid auto-rows-auto px-40 bg-white mx-40 p-10 rounded-3xl border-4 border-indigo-600 ">
        <h1 className="text-3xl flex justify-center p-4">Transactions</h1>
        {transactions.map((transaction) => (
          <Link to={`/home/show/${transaction.id}`}>
            <div
              key={transaction.id}
              className="flex justify-between text-xl border-b-4 border-indigo-200 p-3 hover:bg-indigo-200"
            >
              <p className="w-1/3 text-center">
                {dateToString(transaction.date)}
              </p>
              <p className="w-1/3 text-center">{transaction.item_name}</p>
              <p className="w-1/3 text-center">
                {transaction.transactionType === "withdrawal"
                  ? -transaction.amount
                  : transaction.amount}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TransactionsIndex;
