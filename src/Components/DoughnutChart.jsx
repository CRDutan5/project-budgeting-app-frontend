import { Doughnut } from "react-chartjs-2";
import React from "react";

const DoughnutChart = ({ transactions }) => {
  // WITHDRAWALS
  const withdrawalTransactions = transactions.filter(
    (transaction) => transaction.transactionType === "withdrawal"
  );

  const labels = withdrawalTransactions.map(
    (transaction) => transaction.item_name
  );
  const amounts = withdrawalTransactions.map(
    (transaction) => transaction.amount
  );

  //   DEPOSITS
  const depositTransactions = transactions.filter(
    (transaction) => transaction.transactionType === "deposit"
  );

  const depositLabels = depositTransactions.map(
    (transaction) => transaction.item_name
  );

  const depositAmounts = depositTransactions.map(
    (transaction) => transaction.amount
  );

  return (
    <div className="bg-indigo-200 min-h-screen pt-20">
      <div className="px-40 bg-white mx-40 p-10 rounded-3xl border-4 border-indigo-600">
        <div className="flex justify-between">
          <div className="w-1/2">
            <h1 className="text-3xl text-center">Withdrawals</h1>
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
              }}
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-3xl text-center">Deposits</h1>

            <Doughnut
              data={{
                labels: depositLabels,
                datasets: [
                  {
                    label: "Amount",
                    data: depositAmounts,
                    backgroundColor: [
                      "rgb(255, 99, 132)",
                      "rgb(54, 162, 235)",
                      "rgb(255, 205, 86)",
                    ],
                  },
                ],
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoughnutChart;
