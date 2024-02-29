import React from "react";

const TransactionForm = () => {
  // item_name
  // amount
  // date
  // from
  // category
  // transactionType
  return (
    <div className="w-full max-w-md">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
              value=""
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
              //   ADD THE USERINPUT VAL HERE START WITH 0
              value=""
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
              //   REMEMBER TO DESTRCTURE AND CONVERT THE DATE RECEIVED
              type="date"
              value=""
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
              value=""
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
            <label
              className="block font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="transactionType"
            >
              Transaction Type
            </label>
          </div>
          <div className="md:w-2/3">
            <fieldset>
              <div>
                <input
                  type="radio"
                  id="withdrawal"
                  name="transactionType"
                  value=""
                />
                <label htmlFor="withdrawal">Withdrawal</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="deposit"
                  name="transactionType"
                  value=""
                />
                <label htmlFor="deposit">Deposit</label>
              </div>
            </fieldset>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TransactionForm;
