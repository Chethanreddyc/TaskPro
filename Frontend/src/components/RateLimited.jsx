import React from 'react';

function RateLimited() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md text-center">
        {/* Icon */}
        <div className="flex justify-center mb-4">
          <svg
            className="w-16 h-16 text-red-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01M12 5a7 7 0 100 14a7 7 0 000-14z"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800 mb-2">
          Too Many Requests
        </h1>

        {/* Message */}
        <p className="text-gray-600 mb-6">
          You’ve hit the rate limit. Please wait a moment before trying again.
        </p>

        {/* Actions */}
        <div className="space-y-3">
          <button
          href="/"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
          >
            Retry
          </button>
          <a
            href="/"
            className="block w-full border border-gray-300 py-2 px-4 rounded text-gray-700 hover:bg-gray-50 transition"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
}

export default RateLimited;