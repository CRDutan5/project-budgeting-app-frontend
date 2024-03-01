import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
          <h1>
            {transactionType === "withdrawal" ? `$-${amount}` : `+$${amount}`}
          </h1>
        </div>
        <div className="text-xl">
          <div className="grid grid-cols-1 row-auto py-5">
            <p className="flex justify-center p-2">Name: {item_name}</p>
            <p className="flex justify-center p-2">Date: {date}</p>
            <p className="flex justify-center p-2">From: {from}</p>
            <p className="flex justify-center p-2">Category: {category}</p>
            <p className="flex justify-center p-2">
              Transaction Type: {transactionType}
            </p>
          </div>
          <div className="flex justify-center py-2">
            <button
              onClick={handleDelete}
              className="mx-10 px-10 border-primary bg-secondary border-4 rounded-xl"
            >
              Delete
            </button>
            <Link to={`/home/edit/${id}`}>
              <button className="mx-10 px-10 border-primary bg-secondary border-4 rounded-xl">
                Edit
              </button>
            </Link>
          </div>
          <div className="flex justify-center">
            <Link to={"/home"}>
              <button className="px-10 my-4 border-primary bg-secondary border-4 rounded-xl">
                Back to Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionShow;
