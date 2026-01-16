import React from "react";

function Navbar() {
  return (
    <header className="bg-base-300 border-b border-base-content/10">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
          </div>
          <a className="btn btn-ghost rounded-3xl text-xl">daisyUI</a>
        </div>
        <div className="navbar-end">
          <a href="/create" className="btn rounded-2xl">Add Task</a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
