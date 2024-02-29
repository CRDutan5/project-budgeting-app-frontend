import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import TransactionsIndex from "./Components/TransactionsIndex";
import TransactionShow from "./Components/TransactionShow";
import TransactionForm from "./Components/TransactionForm";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:3333/transactions`)
      .then((res) => res.json())
      .then((data) => setTransactions(data.transactions));
  }, [transactions]);

  return (
    <div className=" min-h-screen bg-secondary">
      <Nav />
      <Routes>
        <Route
          path="/home"
          element={
            <TransactionsIndex
              transactions={transactions}
              total={total}
              setTotal={setTotal}
            />
          }
        />
        <Route
          path="/home/show/:id"
          element={<TransactionShow setTransactions={setTransactions} />}
        />
        <Route path="/home/new" element={<TransactionForm />} />
      </Routes>
    </div>
  );
};

export default App;
