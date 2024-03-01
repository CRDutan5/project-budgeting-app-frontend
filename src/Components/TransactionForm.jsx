import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const TransactionForm = ({ setTransactions }) => {
  const [userInput, setUserInput] = useState({
    item_name: "",
    amount: 0,
    date: "",
    from: "",
    category: "",
    transactionType: "",
  });

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
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userInput),
    };
    fetch(`http://localhost:3333/transactions`, options)
      .then((res) => res.json())
      .then((data) => setTransactions(data.transactions));

    navigate("/home");
  }

  return (
    <div className="flex justify-center items-center h-screen">
      <form
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/2 h-5/6"
        onSubmit={handleSubmit}
      >
        <h1 className="flex justify-center font-bold text-2xl py-5">
          Create a Transaction
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
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
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
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
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
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
              id="date"
              type="date"
              value={userInput.date}
              onChange={handleChange}
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
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-primary"
              id="from"
              type="text"
              value={userInput.from}
              onChange={handleChange}
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
              focus:outline-none focus:bg-white focus:border-primary"
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
                  value={userInput.transactionType}
                  onChange={handleChange}
                />
                <label htmlFor="withdrawal">Withdrawal</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="deposit"
                  name="transactionType"
                  value={userInput.transactionType}
                  onChange={handleChange}
                />
                <label htmlFor="deposit">Deposit</label>
              </div>
            </fieldset>
          </div>
        </div>
        <div className="flex justify-center">
          <button className="mx-10 px-10 border-primary bg-secondary border-4 rounded-xl text-xl my-5">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
