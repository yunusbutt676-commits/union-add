export default function Loading() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white dark:bg-[#070707]">

      <div className="flex flex-col items-center gap-6">

        <div className="w-14 h-14 border-4 border-orange-500 border-t-transparent rounded-full animate-spin"/>

        <p className="text-lg text-gray-600 dark:text-gray-300">
          Loading...
        </p>

      </div>

    </main>
  );
}