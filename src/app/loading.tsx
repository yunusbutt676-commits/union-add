
export default function Loading() {
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
        py-10
        text-black
        dark:bg-[#070707]
        dark:text-white
      "
      aria-busy="true"
      aria-label="Loading page"
    >
      <div
        role="status"
        aria-live="polite"
        className="
          flex
          w-full
          max-w-xs
          flex-col
          items-center
          justify-center
          gap-5
          text-center
          sm:gap-6
        "
      >
        {/* LOADING SPINNER */}
        <div
          aria-hidden="true"
          className="
            h-11
            w-11
            shrink-0
            animate-spin
            rounded-full
            border-4
            border-orange-500
            border-t-transparent
            sm:h-14
            sm:w-14
            motion-reduce:animate-none
          "
        />

        {/* LOADING TEXT */}
        <p
          className="
            text-base
            font-medium
            tracking-wide
            text-gray-600
            sm:text-lg
            dark:text-gray-300
          "
        >
          Loading...
        </p>

        <span className="sr-only">
          Please wait while the page loads.
        </span>
      </div>
    </main>
  );
}
