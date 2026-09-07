"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-[#070707] px-6">

      <div className="text-center">

        <h1 className="text-6xl font-bold text-orange-500">
          Oops!
        </h1>

        <p className="mt-5 text-gray-600 dark:text-gray-400">
          Something went wrong.
        </p>

        <div className="mt-8 flex gap-4 justify-center">

          <button
            onClick={reset}
            className="px-7 py-4 rounded-full bg-orange-500 text-white hover:bg-orange-600"
          >
            Try Again
          </button>

          <Link
            href="/"
            className="px-7 py-4 rounded-full border hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
          >
            Home
          </Link>

        </div>

      </div>

    </main>
  );
}