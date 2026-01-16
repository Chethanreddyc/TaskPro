import React from "react";
import { Link } from "react-router";

export default function NotesNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6">
      {/* Icon */}
      <div className="mb-4">
        <div className="bg-base-200 rounded-full p-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-base-content opacity-70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 17v-6h6v6m2 4H7a2 2 0 01-2-2V7a2 
              2 0 012-2h5l2 2h5a2 2 0 012 2v10a2 
              2 0 01-2 2z"
            />
          </svg>
        </div>
      </div>

      {/* Message */}
      <h2 className="text-xl font-semibold text-base-content">
        No Notes Found
      </h2>
      <p className="text-base-content opacity-70 mt-2">
        You don’t have any notes yet. Start by creating one!
      </p>

      {/* CTA Button */}
      <Link to="/create">
      <button className="btn btn-primary mt-6 rounded-2xl">
        Create Note
      </button>
      </Link>
    </div>
  );
}