import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-[#070707] px-6">
      <div className="text-center">

        <h1 className="text-8xl font-bold text-orange-500">
          404
        </h1>

        <h2 className="mt-5 text-4xl font-bold text-black dark:text-white">
          Page Not Found
        </h2>

        <p className="mt-4 max-w-xl text-gray-600 dark:text-gray-400">
          The page you're looking for doesn't exist or may have been moved.
        </p>

        <div className="mt-10 flex gap-4 justify-center">

          <Link
            href="/"
            className="px-7 py-4 rounded-full bg-orange-500 text-white hover:bg-orange-600 transition"
          >
            Back Home
          </Link>

          <Link
            href="/contact"
            className="px-7 py-4 rounded-full border hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition"
          >
            Contact Us
          </Link>

        </div>

      </div>
    </main>
  );
}