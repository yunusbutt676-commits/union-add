
interface QuoteStepsProps {
  currentStep: number;
}

const steps = [
  "Your Details",
  "Project Details",
  "Review",
] as const;

export default function QuoteSteps({
  currentStep,
}: QuoteStepsProps) {
  const totalSteps = steps.length;

  const safeStep = Math.min(
    Math.max(Math.trunc(Number(currentStep) || 1), 1),
    totalSteps
  );

  return (
    <nav
      aria-label="Quote request progress"
      className="
        mb-10
        w-full
        min-w-0
        sm:mb-12
        lg:mb-14
      "
    >
      <ol
        className="
          relative
          grid
          w-full
          grid-cols-3
          items-start
          gap-1
          sm:gap-4
        "
      >
        {/* BACKGROUND CONNECTING LINE */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-[16.6667%]
            right-[16.6667%]
            top-[18px]
            h-[2px]
            bg-gray-200
            sm:top-5
            dark:bg-gray-700
          "
        />

        {/* ACTIVE CONNECTING LINE */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            left-[16.6667%]
            top-[18px]
            h-[2px]
            bg-orange-500
            transition-[width]
            duration-300
            ease-in-out
            sm:top-5
            motion-reduce:transition-none
          "
          style={{
            width: `${
              ((safeStep - 1) / (totalSteps - 1)) *
              (100 - 33.3334)
            }%`,
          }}
        />

        {/* STEPS */}
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < safeStep;
          const isCurrent = stepNumber === safeStep;
          const isReached = stepNumber <= safeStep;

          return (
            <li
              key={step}
              aria-current={
                isCurrent ? "step" : undefined
              }
              className="
                relative
                z-10
                flex
                min-w-0
                flex-col
                items-center
                text-center
              "
            >
              {/* STEP CIRCLE */}
              <span
                aria-hidden="true"
                className={`
                  flex
                  h-9
                  w-9
                  shrink-0
                  items-center
                  justify-center

                  rounded-full

                  text-xs
                  font-semibold

                  shadow-sm

                  transition-all
                  duration-300

                  sm:h-10
                  sm:w-10
                  sm:text-sm

                  motion-reduce:transition-none

                  ${
                    isReached
                      ? `
                        bg-orange-500
                        text-white
                        border
                        border-orange-500
                      `
                      : `
                        bg-white
                        text-gray-500
                        border
                        border-gray-300

                        dark:bg-[#111]
                        dark:border-gray-700
                        dark:text-gray-400
                      `
                  }

                  ${
                    isCurrent
                      ? `
                        ring-4
                        ring-orange-500/15
                        dark:ring-orange-500/20
                      `
                      : ""
                  }
                `}
              >
                {stepNumber}
              </span>

              {/* STEP LABEL */}
              <span
                className={`
                  mt-3
                  block
                  w-full
                  max-w-[110px]

                  px-1

                  text-[11px]
                  leading-4
                  font-medium

                  sm:max-w-none
                  sm:text-sm
                  sm:leading-5

                  transition-colors
                  duration-300

                  ${
                    isReached
                      ? "text-gray-950 dark:text-white"
                      : "text-gray-500 dark:text-gray-400"
                  }
                `}
              >
                {step}
              </span>

              {/* SCREEN READER STATUS */}
              <span className="sr-only">
                {isCompleted
                  ? "Completed"
                  : isCurrent
                  ? "Current step"
                  : "Not started"}
              </span>
            </li>
          );
        })}
      </ol>

      {/* ACCESSIBLE PROGRESS DESCRIPTION */}
      <p className="sr-only">
        Step {safeStep} of {totalSteps}:{" "}
        {steps[safeStep - 1]}
      </p>
    </nav>
  );
}
