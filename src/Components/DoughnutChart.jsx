import { Doughnut } from "react-chartjs-2";
import React from "react";

const DoughnutChart = ({ transactions }) => {
  const withdrawalTransactions = transactions.filter(
    (transaction) => transaction.transactionType === "withdrawal"
  );

  const labels = withdrawalTransactions.map(
    (transaction) => transaction.item_name
  );
  const amounts = withdrawalTransactions.map(
    (transaction) => transaction.amount
  );

  return (
    <div className="bg-indigo-200 min-h-screen pt-20 ">
      <div className="px-40 bg-white mx-40 p-10 rounded-3xl border-4 border-indigo-600 ">
        <h1 className="text-3xl text-center">Expenses</h1>
        <div>
          <Doughnut
            data={{
              labels: labels,
              datasets: [
                {
                  label: "Amount",
                  data: amounts,
                  backgroundColor: [
                    "rgb(255, 99, 132)",
                    "rgb(54, 162, 235)",
                    "rgb(255, 205, 86)",
                  ],
                },
              ],
              height: 100,
              width: 100,
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
