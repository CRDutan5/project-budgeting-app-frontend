import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="grid grid-cols-2 bg-indigo-800 py-10">
      <div className="flex justify-left">
        <Link to={"/home"}>
          <h1 className="text-5xl px-8 text-white">Budgtr</h1>
        </Link>
      </div>
      {/* Add link to button using <Link> the path would be to the form */}
      <div className="flex justify-end">
        <button className="border-4 border-indigo-600 bg-indigo-200  rounded-xl px-10 mx-10 text-xl hover:bg-white">
          <Link to={"/home/new"}>New Transaction</Link>
        </button>
      </div>
    </div>
  );
};

export default Nav;
