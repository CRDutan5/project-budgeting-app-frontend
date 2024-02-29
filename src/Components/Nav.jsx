import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="grid grid-cols-2 bg-primary p-5">
      <div className="flex justify-left">
        <Link to={"/home"}>
          <h1 className="text-5xl">Budgtr</h1>
        </Link>
      </div>
      {/* Add link to button using <Link> the path would be to the form */}
      <div className="flex justify-end">
        <button className="border-4 border-secondary  bg-primary  rounded-xl">
          <Link to={"/home/new"}>New Transaction</Link>
        </button>
      </div>
    </div>
  );
};

export default Nav;
