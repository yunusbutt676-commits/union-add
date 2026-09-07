"use client";

interface QuoteStepsProps {
  currentStep: number;
}

const steps = [
  "Your Details",
  "Project Details",
  "Review",
];

export default function QuoteSteps({
  currentStep,
}: QuoteStepsProps) {
  return (
    <div className="mb-14">
      <div className="flex items-center justify-between relative">
        {/* Line */}
        <div className="absolute top-5 left-0 w-full h-[2px] bg-gray-200 dark:bg-gray-700" />

        {steps.map((step, index) => {
          const active = currentStep >= index + 1;

          return (
            <div
              key={step}
              className="relative z-10 flex flex-col items-center"
            >
              <div
                className={`
                  w-10 h-10 rounded-full
                  flex items-center justify-center
                  text-sm font-semibold
                  transition-all duration-300
                  ${
                    active
                      ? "bg-orange-500 text-white"
                      : "bg-white dark:bg-[#111] border border-gray-300 dark:border-gray-700 text-gray-500"
                  }
                `}
              >
                {index + 1}
              </div>

              <p
                className={`
                  mt-3 text-sm text-center
                  ${
                    active
                      ? "text-black dark:text-white"
                      : "text-gray-400"
                  }
                `}
              >
                {step}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}