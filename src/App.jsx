import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav";
import TransactionsIndex from "./Components/TransactionsIndex";
import TransactionShow from "./Components/TransactionShow";
import TransactionForm from "./Components/TransactionForm";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import DoughnutChart from "./Components/DoughnutChart";

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch(`http://localhost:3333/transactions`)
      .then((res) => res.json())
      .then((data) => setTransactions(data.transactions));
  }, [transactions]);

  return (
    <div className=" min-h-screen bg-white">
      <Nav />
      <Routes>
        <Route
          path="/home"
          element={
            <div>
              <TransactionsIndex
                transactions={transactions}
                total={total}
                setTotal={setTotal}
              />
              <DoughnutChart transactions={transactions} />
              {/* <Bar
                data={{
                  labels: ["A", "B", "C"],
                  datasets: [
                    {
                      label: "Revenue",
                      data: [200, 300, 400],
                    },
                  ],
                }}
              /> */}
            </div>
          }
        />
        <Route
          path="/home/show/:id"
          element={<TransactionShow setTransactions={setTransactions} />}
        />
        <Route
          path="/home/new"
          element={
            <TransactionForm
              setTransactions={setTransactions}
              transactions={transactions}
            />
          }
        />
        <Route
          path="/home/edit/:id"
          element={<TransactionForm setTransactions={setTransactions} />}
        />
      </Routes>
    </div>
  );
};

export default App;
