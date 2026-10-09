
"use client";

import Link from "next/link";
import { useEffect } from "react";
import { AlertTriangle, ArrowLeft, RefreshCw } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error for debugging.
    console.error("Union Add route error:", error);
  }, [error]);

  return (
    <main
      className="
        flex
        min-h-screen
        min-h-dvh
        w-full
        items-center
        justify-center
        bg-white
        px-4
        py-12
        text-black
        sm:px-6
        dark:bg-[#070707]
        dark:text-white
      "
    >
      <div
        className="
          w-full
          max-w-lg
          rounded-2xl
          border
          border-gray-200
          bg-white
          px-5
          py-10
          text-center
          shadow-sm
          sm:rounded-3xl
          sm:px-10
          sm:py-12
          dark:border-zinc-800
          dark:bg-[#111]
        "
      >
        {/* ERROR ICON */}
        <div
          aria-hidden="true"
          className="
            mx-auto
            flex
            h-16
            w-16
            items-center
            justify-center
            rounded-2xl
            bg-orange-50
            text-orange-500
            sm:h-20
            sm:w-20
            dark:bg-orange-500/10
          "
        >
          <AlertTriangle
            className="h-8 w-8 sm:h-10 sm:w-10"
            strokeWidth={1.8}
          />
        </div>

        {/* ERROR HEADING */}
        <h1
          className="
            mt-6
            text-4xl
            font-bold
            leading-tight
            tracking-tight
            text-orange-500
            sm:mt-8
            sm:text-6xl
          "
        >
          Oops!
        </h1>

        <p
          role="alert"
          className="
            mt-4
            text-base
            font-medium
            text-gray-700
            sm:mt-5
            sm:text-lg
            dark:text-gray-300
          "
        >
          Something went wrong.
        </p>

        <p
          className="
            mx-auto
            mt-3
            max-w-sm
            text-sm
            leading-7
            text-gray-500
            sm:text-base
            dark:text-gray-400
          "
        >
          We couldn&apos;t load this page right now.
          Please try again or return to the homepage.
        </p>

        {/* ACTION BUTTONS */}
        <div
          className="
            mt-8
            grid
            grid-cols-1
            gap-3
            sm:mt-10
            sm:grid-cols-2
            sm:gap-4
          "
        >
          <button
            type="button"
            onClick={() => reset()}
            className="
              inline-flex
              min-h-12
              w-full
              cursor-pointer
              items-center
              justify-center
              gap-2
              rounded-full
              bg-orange-500
              px-6
              py-3
              text-sm
              font-semibold
              text-white
              transition-colors
              duration-200
              hover:bg-orange-600
              active:bg-orange-700
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-orange-500
              sm:text-base
              motion-reduce:transition-none
            "
          >
            <RefreshCw
              aria-hidden="true"
              className="h-4 w-4 shrink-0"
            />
            Try Again
          </button>

          <Link
            href="/"
            className="
              inline-flex
              min-h-12
              w-full
              items-center
              justify-center
              gap-2
              rounded-full
              border
              border-gray-300
              px-6
              py-3
              text-sm
              font-semibold
              text-gray-800
              transition-colors
              duration-200
              hover:border-black
              hover:bg-black
              hover:text-white
              active:bg-gray-800
              focus-visible:outline-2
              focus-visible:outline-offset-4
              focus-visible:outline-orange-500
              sm:text-base
              dark:border-zinc-700
              dark:text-white
              dark:hover:border-white
              dark:hover:bg-white
              dark:hover:text-black
              motion-reduce:transition-none
            "
          >
            <ArrowLeft
              aria-hidden="true"
              className="h-4 w-4 shrink-0"
            />
            Home
          </Link>
        </div>
      </div>
    </main>
  );
}
