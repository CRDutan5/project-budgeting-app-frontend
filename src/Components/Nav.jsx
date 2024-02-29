import React from "react";

const Nav = () => {
  return (
    <div className="grid grid-cols-2 bg-primary p-5">
      <div className="flex justify-left">
        <h1 className="text-5xl">Budgtr</h1>
      </div>
      {/* Add link to button using <Link> the path would be to the form */}
      <div className="flex justify-end">
        <button className="border-4 border-secondary  bg-primary  rounded-xl">
          New Transaction
        </button>
      </div>
    </div>
  );
};

export default Nav;
