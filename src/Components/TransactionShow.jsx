import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TransactionShow = ({ setTransactions }) => {
  const [targetTransaction, setTargetTransaction] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  function handleDelete() {
    const options = {
      method: "DELETE",
    };
    fetch(`http://localhost:3333/transactions/${id}`, options)
      .then((res) => res.json())
      .then((data) => setTransactions(data.transactions))
      .then(() => navigate("/home"));
  }

  useEffect(() => {
    fetch(`http://localhost:3333/transactions/${id}`)
      .then((res) => res.json())
      .then((data) => setTargetTransaction(data.transaction));
  }, [targetTransaction]);

  const { item_name, amount, date, from, category, transactionType } =
    targetTransaction;

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-gray-100 rounded-xl bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-100 border border-gray-100 p-8 w-1/2 h-3/5">
        <div className="flex justify-center text-4xl">
          <h1>${amount}</h1>
        </div>
        <div className="text-xl">
          <div className="grid grid-cols-2 row-auto">
            <div>
              <p className="flex justify-center">Name: </p>
              <p className="flex justify-center">Date: </p>
              <p className="flex justify-center">From: </p>
              <p className="flex justify-center">Category: </p>
              <p className="flex justify-center">Transaction Type: </p>
            </div>
            <div>
              <p className="flex justify-center">{item_name}</p>
              <p className="flex justify-center">{date}</p>
              <p className="flex justify-center">{from}</p>
              <p className="flex justify-center">{category}</p>
              <p className="flex justify-center">{transactionType}</p>
            </div>
          </div>
          <div className="flex justify-center py-20">
            <button
              onClick={handleDelete}
              className="mx-10 px-10 border-primary bg-secondary border-4 rounded-xl"
            >
              Delete
            </button>
            <button className="mx-10 px-10 border-primary bg-secondary border-4 rounded-xl">
              Edit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionShow;
