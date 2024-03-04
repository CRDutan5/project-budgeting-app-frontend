import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const TransactionForm = ({ setTransactions, transactions }) => {
  const [userInput, setUserInput] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
    transactionType: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    if (e.target.id === "amount") {
      setUserInput({ ...userInput, [e.target.id]: +e.target.value });
    } else if (e.target.id === "deposit" || e.target.id === "withdrawal") {
      setUserInput({ ...userInput, transactionType: e.target.id });
    } else {
      setUserInput({ ...userInput, [e.target.id]: e.target.value });
    }
  };

  function handleSubmit(e) {
    e.preventDefault();

    if (id) {
      const options = {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInput),
      };
      fetch(`http://localhost:3333/transactions/${id}`, options)
        .then((res) => res.json())
        .then((data) => {
          setTransactions(data.transactions);
          navigate(`/home/show/${id}`);
        });
    } else {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(userInput),
      };
      fetch(`http://localhost:3333/transactions`, options)
        .then((res) => res.json())
        .then((data) => setTransactions(data.transactions))
        .then(() =>
          navigate(`/home/show/${transactions[transactions.length - 1].id + 1}`)
        );
    }
  }

  useEffect(() => {
    if (id) {
      fetch(`http://localhost:3333/transactions/${id}`)
        .then((res) => res.json())
        .then((data) => setUserInput(data.transaction));
    }
  }, [id]);

  return (
    <div className="flex justify-center items-center h-screen bg-indigo-200 ">
      <form
        className="bg-white shadow-md rounded-3xl px-8 pt-6 pb-8 mb-4 w-1/2 h-5/6 border-4 border-indigo-600"
        onSubmit={handleSubmit}
      >
        <h1 className="flex justify-center font-bold text-2xl py-5">
          {id ? "Edit Transaction" : "Create a Transaction"}
        </h1>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="item_name"
            >
              Item Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-600"
              id="item_name"
              type="text"
              value={userInput.item_name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="amount"
            >
              Amount
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-600"
              id="amount"
              type="number"
              value={userInput.amount}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="date"
            >
              Date
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-600"
              id="date"
              type="date"
              value={userInput.date}
              onChange={handleChange}
              checked={userInput.transactionType}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="from"
            >
              From
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-indigo-600"
              id="from"
              type="text"
              value={userInput.from}
              onChange={handleChange}
              checked={userInput.transactionType}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="block font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="category"
            >
              Category
            </label>
          </div>
          <div className="md:w-2/3">
            <select
              className="bg-gray-200 appearance-none border-2 border-gray-200
              rounded w-full py-2 px-4 text-gray-700 leading-tight
              focus:outline-none focus:bg-white focus:border-indigo-600"
              name="category"
              id="category"
              value={userInput.category}
              onChange={handleChange}
            >
              <option value="">Please Choose an Option</option>
              <option value="Income">Income</option>
              <option value="Food">Food</option>
              <option value="Housing">Housing</option>
              <option value="Investment">Investment</option>
              <option value="Shopping">Shopping</option>
              <option value="Bills">Bills</option>
              <option value="Savings">Savings</option>
            </select>
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <legend
              className="block font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="transactionType"
            >
              Transaction Type
            </legend>
          </div>
          <div className="md:w-2/3">
            <fieldset>
              <div>
                <input
                  type="radio"
                  id="withdrawal"
                  name="transactionType"
                  checked={userInput.transactionType === "withdrawal"}
                  onChange={handleChange}
                />
                <label htmlFor="withdrawal">Withdrawal</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="deposit"
                  name="transactionType"
                  checked={userInput.transactionType === "deposit"}
                  onChange={handleChange}
                />
                <label htmlFor="deposit">Deposit</label>
              </div>
            </fieldset>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="px-10 border-indigo-600 bg-indigo-200 border-4 rounded-xl hover:bg-white text-xl">
            {id ? "Submit Changes" : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
