import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

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
      setTextColorClass("text-green-500");
    } else if (total < 0) {
      setTextColorClass("text-red-500");
    } else {
      setTextColorClass("text-yellow-500");
    }
  }, [total]);

  return (
    <div>
      <h1 className={`text-5xl p-8`}>
        Bank Account Total:{" "}
        <span className={`${textColorClass}`}>${total}</span>
      </h1>
      <div className="grid auto-rows-auto">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="flex justify-between text-xl border-b-4 border-gray-400 p-3"
          >
            <p className="w-1/3 text-center">{transaction.date}</p>
            <p className="w-1/3 text-center">
              <Link to={`/home/show/${transaction.id}`}>
                {transaction.item_name}
              </Link>
            </p>
            <p className="w-1/3 text-center">
              {transaction.transactionType === "withdrawal"
                ? -transaction.amount
                : transaction.amount}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TransactionsIndex;
